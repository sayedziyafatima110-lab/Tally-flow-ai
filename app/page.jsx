"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Upload, FileText, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FileText className="text-blue-600 w-6 h-6" />
          <span className="text-xl font-bold">TallyFlow AI</span>
        </div>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center pt-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Bank Statement to Tally XML</h1>
        <p className="text-slate-600 mb-8">Stop manual entries. Let AI handle it.</p>
        
        <SignedIn>
          <div className="border-2 border-dashed border-blue-200 rounded-2xl p-12 bg-white">
            <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
              Upload & Convert
            </button>
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
              Get Started Now
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
