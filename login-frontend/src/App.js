import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { username, password, remember };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("🔐 Resultado del servidor:", result);
      alert("👨‍🏫Profe ya puede observar la Terminal 🚀");
    } catch (error) {
      console.error("❌ Error enviando los datos:", error);
    }

    
    console.log("Usuario:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember ? "Sí" : "No");
    
  
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.phoneContainer}>
      
        <div style={styles.statusBar}>
          <span style={styles.time}>12:00</span>
          <div style={styles.icons}>
            <span>📶</span>
            <span>📱</span>
            <span>🔋</span>
          </div>
        </div>

        
        <div style={styles.purpleCircle}></div>
        <div style={styles.blueCircle}></div>

        <form onSubmit={handleSubmit} style={styles.container}>
          
          <div style={styles.avatarContainer}>
            <div style={styles.avatarIcon}></div>
          </div>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          
          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
              style={styles.checkbox}
            />
            <label htmlFor="remember" style={styles.checkboxLabel}>Remember me</label>
          </div>
          
          
          <button type="submit" style={styles.button}>Sign in</button>
          <a href="#" style={styles.link}>Forgot password?</a>
        </form>

        
        <div style={styles.bottomBar}></div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f5f5f5',
  },
  phoneContainer: {
    position: 'relative',
    width: '280px',
    height: '580px',
    backgroundColor: '#f8fdff',
    borderRadius: '30px',
    overflow: 'hidden',
    border: '8px solid #6E70E3',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  blueCircle: {
    position: 'absolute',
    top: '-90px',
    left: '-70px',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: '#3DA5E1',
    zIndex: 2,
  },
  purpleCircle: {
    position: 'absolute',
    top: '-90px',
    right: '-60px',
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    backgroundColor: '#6E70E3',
    zIndex: 1,
  },
  statusBar: {
    height: '24px',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    color: 'black',
    fontSize: '12px',
    fontWeight: 'bold',
    zIndex: 3,
    position: 'relative',
    marginTop: '5px',
  },
  time: {
    fontSize: '12px',
  },
  icons: {
    display: 'flex',
    gap: 'px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '45px',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: '70px',
    position: 'relative',
    zIndex: 3,
  },
  avatarContainer: {
    width: '80px',
    height: '80px',
    backgroundColor: '#3DA5E1',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 3,
    
  },
  avatarIcon: {
    width: '80px',
    height: '80px',
    backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"%23ffffff\"%3E%3Cpath d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"%3E%3C/path%3E%3C/svg%3E')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#6E70E3',
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
    '&::placeholder': {
      color: 'white',
      opacity: 0.8,
    },
    outline: 'none',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: '15px',
    marginTop: '5px',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    accentColor: '#3DA5E1',
  },
  checkboxLabel: {
    marginLeft: '8px',
    fontSize: '14px',
    color: '#3DA5E1',
  },
  button: {
    backgroundColor: '#3DA5E1',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    color: 'white',
    width: '100%',
    marginTop: '15px', 
    marginBottom: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  link: {
    color: '#3DA5E1',
    fontSize: '12px',
    textDecoration: 'none',
    cursor: 'pointer',
    marginTop: '5px',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '25px',
    backgroundColor: '#3DA5E1',
  }
};