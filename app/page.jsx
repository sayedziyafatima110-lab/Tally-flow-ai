import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Upload, FileText, Shield, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="border-b px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FileText className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-blue-600">TallyFlow AI</span>
        </div>
        
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all">
                Login / Register
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          AI-Powered Accounting Automation
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
          Bank Statement to <span className="text-blue-600">Tally XML</span> <br />
          in Seconds.
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          CAs aur Accountants ke liye banaya gaya tool. Manual entry chhodo, 
          AI ka use karo aur apna 90% waqt bachao.
        </p>

        {/* Upload Box */}
        <div className="max-w-xl mx-auto bg-white border-2 border-dashed border-blue-200 rounded-3xl p-12 shadow-2xl shadow-blue-100 hover:border-blue-400 transition-all group">
          <div className="mb-6 flex justify-center">
            <div className="bg-blue-50 p-6 rounded-full group-hover:scale-110 transition-transform">
              <Upload className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Upload Bank PDF</h3>
          <p className="text-gray-400 mb-8">Drag and drop or click to browse (SBI, HDFC, ICICI, etc.)</p>
          
          <SignedIn>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all shadow-lg shadow-blue-200">
              Convert Now
            </button>
          </SignedIn>
          
          <SignedOut>
            <SignInButton mode="modal">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-2xl text-lg transition-all">
                Sign in to Upload
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="space-y-4">
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Zap className="text-white w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">Ek Click Mein Kaam</h4>
            <p className="text-gray-500 leading-relaxed">Bas PDF upload karein, AI transactions ko identify karke Tally XML taiyar kar dega.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Shield className="text-white w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">Data Security</h4>
            <p className="text-gray-500 leading-relaxed">Hum aapka financial data save nahi karte. Conversion ke baad data delete ho jata hai.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Zap className="text-white w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">Cost Effective</h4>
            <p className="text-gray-500 leading-relaxed">Manual staff se 10 guna sasta aur 100 guna tez. Mira Road ke smart CAs ki pasand.</p>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t text-center bg-gray-50">
        <p className="text-gray-400 font-medium">© 2026 TallyFlow AI. Proudly Made for Indian Accountants. 🇮🇳</p>
      </footer>
    </div>
  );
}
