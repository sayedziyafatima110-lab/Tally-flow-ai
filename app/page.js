import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#2563eb' }}>TallyFlow AI</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>Mira Road's First AI Financial Tool</p>
      
      <div style={{ marginTop: '30px' }}>
        <SignedOut>
          <div style={{ display: 'inline-block', padding: '15px 30px', backgroundColor: '#2563eb', color: 'white', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
            <SignInButton mode="modal">Start Free Trial</SignInButton>
          </div>
        </SignedOut>
        
        <SignedIn>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
            <h2>Welcome to your Dashboard</h2>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
