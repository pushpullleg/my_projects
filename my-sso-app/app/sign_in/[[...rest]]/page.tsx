"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">Sign in to your account</h1>
      <SignIn signUpUrl="/sign_up" />
    </main>
  );
}
