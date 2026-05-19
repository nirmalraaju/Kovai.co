import React from 'react';

const Navbar = ({ user, onLogin, onLogout }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 30px',
      background: '#1e293b',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '24px' }}>✅</span>
        <h2 style={{ margin: 0, fontSize: '20px', letterSpacing: '0.5px' }}>TaskFlow Triage</h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {user ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={user.user_metadata?.avatar_url || 'https://via.placeholder.com/32'} 
                alt="Profile" 
                style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #3b82f6' }} 
              />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{user.email}</span>
            </div>
            <button 
              onClick={onLogout}
              style={{
                padding: '6px 12px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button 
            onClick={onLogin}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'white',
              color: '#334155',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '18px' }} />
            Sign in with Google
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;