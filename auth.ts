import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/db/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';
import type { NextAuthConfig } from 'next-auth';

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in', //if err accured we want to be in sign in page
    },
    // using json web token
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    // Array of providers
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            async authorize(credentials) {
                if (credentials == null) return null;

                // Find user in database
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email as string,
                    },
                });

                // Check if user exists and if the password matches
                if (user && user.password) {
                    const isMatch = compareSync( // because we used hashSync
                        credentials.password as string,
                        user.password
                    );

                    // if password is correct, return user
                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        };
                    }
                }
                // If user does not exist or password does not match return null
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, user, trigger, token }: any) {
            // Set the user ID from the token
            session.user.id = token.sub;

            // If there is an update, set the user name
            if (trigger === 'update') {
                session.user.name = user.name;
            }

            return session;
        },
    },
} satisfies NextAuthConfig; //ensures the object is compatible with nextAuth config to prevent ts errs

export const { handlers, auth, signIn, signOut } = NextAuth(config);
