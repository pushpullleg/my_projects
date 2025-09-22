"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-6">
      <SignedOut>
        <h1 className="text-2xl font-bold">Welcome! Please sign in 👇</h1>
        <Link
          href="/sign_in"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sign In
        </Link>
      </SignedOut>

      <SignedIn>
        <h1 className="text-2xl font-bold">🎉 You are logged in!</h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </main>
  );
}
