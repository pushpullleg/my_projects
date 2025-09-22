"use client";

import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <SignedOut>
        <h1 className="text-2xl font-bold">Welcome! Please sign in 👇</h1>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </SignedOut>

      <SignedIn>
        <h1 className="text-3xl font-bold text-center">
          Thanks for rearranging things, my love! 💙
        </h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </main>
  );
}
