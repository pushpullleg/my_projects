import { currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return <div>You must be signed in to see this page.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user.firstName || "User"}!</h1>
      <p>You are signed in with {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
