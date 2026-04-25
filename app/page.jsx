"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>TallyFlow AI</h1>
      <SignedOut>
        <SignInButton mode="modal" />
        <p>Please sign in to continue</p>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <p>Welcome! You are logged in.</p>
      </SignedIn>
    </div>
  );
}

        
