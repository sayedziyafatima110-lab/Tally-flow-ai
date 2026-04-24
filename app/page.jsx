import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Upload, FileText, CheckCircle, ArrowRight, Zap, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <FileText className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-800">TallyFlow AI</span>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">Get Started</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {/* Agar Logged Out hai (Welcome Page) */}
      <SignedOut>
        <div className="max-w-4xl mx-auto text-center pt-20 px-6">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Bank PDF to <span className="text-blue-600">Tally XML</span> <br/> 1-Click Mein.
          </h1>
          <p className="text-lg text-slate-600 mb-10">CAs aur Accountants ke liye AI-powered automation.</p>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 mx-auto">
              Start Free Trial <ArrowRight />
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      {/* Agar Logged In hai (Real Dashboard) */}
      <SignedIn>
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 text-center">
            <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">Upload Bank Statement (PDF)</h2>
            <div className="border-2 border-dashed border-blue-100 rounded-2xl py-12 bg-slate-50 mb-6">
              <input type="file" id="fileInput" className="hidden" accept=".pdf" />
              <label htmlFor="fileInput" className="cursor-pointer bg-white border px-6 py-2 rounded-full font-semibold shadow-sm">
                Choose PDF File
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg">
              Convert to Tally XML
            </button>
          </div>
        </div>
      </SignedIn>
    </div>
  );
      }
