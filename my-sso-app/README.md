## Deploying Your Project to Vercel with Authentication (Google/SSO) 🚀

This guide will help you deploy your Next.js project to Vercel with authentication powered by Clerk. Follow the steps below to get your project live.

### Prerequisites

Before proceeding, ensure you have completed the following:

- Logged into Vercel with GitHub.
- Set up a Next.js project locally.
- Installed Clerk and integrated it into `layout.tsx`.

### Deployment Steps

#### 1. Push Your Project to GitHub

If your project is not already a Git repository, initialize it and push it to GitHub:

```bash
# Initialize a Git repository (if not already done)
git init

# Stage all files and commit
git add . && git commit -m "initial commit"

# Set the main branch
git branch -M main

# Add your GitHub repository as the remote origin
git remote add origin <your-repo-url>

# Push the code to GitHub
git push -u origin main
```

#### 2. Deploy on Vercel

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **New Project** and import the GitHub repository you just pushed.
3. Vercel will automatically detect that it’s a Next.js app.
4. Click **Deploy** to deploy your project.

#### 3. Add Environment Variables for Clerk

To configure Clerk in your deployed project:

1. In your Vercel project, go to **Settings** → **Environment Variables**.
2. Add the following environment variables:
    - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
    - `CLERK_SECRET_KEY`
3. Redeploy your project to apply the changes.

Your project is now live with authentication enabled! 🎉


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
