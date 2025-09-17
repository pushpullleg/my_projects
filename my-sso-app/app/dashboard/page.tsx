"use client";  // 👈 important when using hooks in App Router
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>Welcome, {user.firstName}!</div>;
}
