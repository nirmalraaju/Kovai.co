import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { supabase } from './api/supabaseClient'; // Make sure you have a supabaseClient helper

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      // This ensures that after login, Google sends the user back to your app
      redirectTo: window.location.origin 
    }
  });
  if (error) console.error("Error logging in:", error.message);
};

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <Navbar 
        user={session?.user} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      />
      
      <main style={{ padding: '20px' }}>
        {session ? (
          <Dashboard user={session.user} />
        ) : (
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2>Please sign in to manage your tasks.</h2>
            <p>Your personal triage board is just a click away.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;