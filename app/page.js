"use client";
import { useState } from 'react';
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function TallyToolWithLogin() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleConvert = () => {
    setStatus("AI analysis shuru ho raha hai... Tally XML ban raha hai.");
    setTimeout(() => {
      setStatus("Conversion Successful! (Demo mode)");
    }, 2000);
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center', minHeight: '100vh', backgroundColor: '#fdfdfd' }}>
      
      {/* Top Bar with Login/Logout */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#fff', borderBottom: '1px solid #eee', marginBottom: '30px' }}>
        <h3 style={{ margin: 0, color: '#1e40af' }}>TallyFlow AI</h3>
        <div>
          <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
          <SignedOut><SignInButton mode="modal" /></SignedOut>
        </div>
      </nav>

      {/* Jab User Login NAHI hai */}
      <SignedOut>
        <div style={{ marginTop: '100px' }}>
          <h1 style={{ color: '#1e40af' }}>Stop Manual Entry!</h1>
          <p>Bank Statement ko Tally XML mein badalne ke liye login karein.</p>
          <div style={{ marginTop: '20px', display: 'inline-block', padding: '15px 30px', backgroundColor: '#2563eb', color: 'white', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
            <SignInButton mode="modal">Login to Start</SignInButton>
          </div>
        </div>
      </SignedOut>

      {/* Jab User Login HAI - Tabhi Tool Dikhega */}
      <SignedIn>
        <div>
          <h1 style={{ color: '#1e40af' }}>Welcome Back!</h1>
          <p>Upload Bank PDF to get Tally XML</p>

          <div style={{ marginTop: '40px', padding: '30px', border: '2px dashed #3b82f6', borderRadius: '20px', display: 'inline-block', backgroundColor: '#eff6ff' }}>
            <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
            <br /><br />
            <button 
              onClick={handleConvert}
              disabled={!file}
              style={{ padding: '15px 40px', backgroundColor: file ? '#3b82f6' : '#cbd5e1', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Convert to Tally XML
            </button>
          </div>
          {status && <p style={{ marginTop: '20px', color: '#1e40af' }}>{status}</p>}
        </div>
      </SignedIn>

      <footer style={{ marginTop: '100px', color: '#94a3b8' }}>
        Mira Road Special - Business Tool 🚀
      </footer>
    </div>
  );
        }
        
