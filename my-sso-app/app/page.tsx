"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-6">
      <SignedOut>
        <h1 className="text-2xl font-bold">Welcome! Please sign in 👇</h1>
      </SignedOut>

      <SignedIn>
        <h1 className="text-2xl font-bold">🎉 You are logged in!</h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </main>
  );
}
