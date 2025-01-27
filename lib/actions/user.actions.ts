'use server';

import { signInFormSchema } from '../validators';
import { signIn, signOut } from '@/auth';

// Sign in the user with credentials
export async function signInWithCredentials(
    prevState: unknown,
    formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    // Handle specific error cases if needed
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }

    // Generic error handling
    return { success: false, message: 'An unexpected error occurred' };
  }
}

// Sign the user out
export async function signOutUser() {
  await signOut();
}