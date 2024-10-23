This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Configuration

1. [Create a Firebase project](https://console.firebase.google.com/u/0/) and add a new app to it.
2. Create a `.env.local` file and copy the contents of `.env.local.example` into it:

```bash
cp .env.local.example .env.local
```

3. Set each variable on `.env.local` with your Firebase Configuration (found in "Project settings").

4. If you want to check the SSR page, get your account credentials from the Firebase console at _Project settings > Service accounts_, where you can click on _Generate new private key_ and download the credentials as a json file. Then set `FIREBASE_CLIENT_EMAIL` and `FIREBASE_PRIVATE_KEY` in `.env.local`

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

## Basic technologies

1. **Next.js**  
   A React framework that provides features like server-side rendering, static site generation, and API routes.  
   [Next.js Documentation](https://nextjs.org/docs)

2. **Feature-Sliced Design**  
   A methodology for structuring frontend applications by focusing on scalability and maintainability through separation of concerns.  
   [Feature-Sliced Design Documentation](https://feature-sliced.design/)

3. **Chakra UI**  
   A simple, modular, and accessible component library for React applications that allows for flexible styling.  
   [Chakra UI Documentation](https://chakra-ui.com/docs)

4. **Effector**  
   A powerful and reactive state manager designed to manage state in a predictable way.  
   [Effector Documentation](https://effector.dev/docs)

5. **Firebase**  
   A platform by Google for building mobile and web apps, offering services like real-time databases, authentication, and hosting.  
   [Firebase Documentation](https://firebase.google.com/docs)

6. **Telegram Mini Apps**  
   A platform for creating lightweight web applications that run within the Telegram messenger.  
   [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)

7. **React Testing Library**  
   A testing utility for React components, focusing on testing user interactions and behavior rather than implementation details.  
   [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro)

8. **Vercel**  
   A platform for frontend developers, providing hosting and deployment services optimized for Next.js and other frameworks.  
   [Vercel Documentation](https://vercel.com/docs)

9. **GitHub Actions**  
   A CI/CD platform integrated into GitHub for automating workflows, including build, test, and deployment pipelines.  
   [GitHub Actions Documentation](https://docs.github.com/en/actions)

