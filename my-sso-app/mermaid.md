flowchart TD
    A[GitHub Account] --> B[Vercel Account (Linked to GitHub)]
    B --> C[Clerk Dashboard]
    C -->|Create Web App| D[Clerk API Keys]
    D --> E[Next.js Project Created]
    E -->|Install| F[@clerk/nextjs + @clerk/clerk-sdk-node]
    F --> G[.env.local with API Keys]
    G --> H[Update app/layout.tsx]
    H -->|Wrap children| I[ClerkProvider Active]
    I --> J[Ready for SignIn Page (Google/SSO)]

flowchart TD
    A["GitHub Account"] --> B["Vercel Account (Linked to GitHub)"]
    B --> C["Clerk Dashboard"]
    C -->|Create Web App| D["Clerk API Keys"]
    D --> E["Next.js Project Created"]
    E -->|Install| F["@clerk/nextjs + @clerk/clerk-sdk-node"]
    F --> G[".env.local with API Keys"]
    G --> H["Update app/layout.tsx"]
    H -->|Wrap children| I["ClerkProvider Active"]
    I --> J["Ready for SignIn Page (Google/SSO)"]


You can use the mermaidchart.com to preview this first part wont work ther is error
