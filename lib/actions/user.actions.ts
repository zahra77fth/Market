'use server';

import { signInFormSchema } from '../validators';
import { signIn, signOut } from '@/auth';

// Sign in the user with credentials
export async function signInWithCredentials(
    prevState: { message?: string; success?: boolean } | undefined,
    formData: FormData
) {
  try {
    // Parse and validate the form data
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    // Sign in the user with credentials
    const result = await signIn('credentials', {
      redirect: false, // Prevent automatic redirect
      email: user.email,
      password: user.password,
    });

    // Handle the result of the sign-in attempt
    if (result?.error) {
      return { success: false, message: result.error };
    }

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    // Handle redirect errors manually
    if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
      throw error; // Re-throw redirect errors to let Next.js handle them
    }

    // Handle other errors
    return { success: false, message: 'Invalid email or password' };
  }
}

// Sign the user out
export async function signOutUser() {
  await signOut();
}