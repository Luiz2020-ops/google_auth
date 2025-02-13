import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleCredentialResponse(response) {
    if (response.credential) {
      setIsLoggedIn(true);
    } else {
      console.log('Falha no login');
    }
  }

  function handleLogout() {
    /* global google */
    google.accounts.id.disableAutoSelect();
    setIsLoggedIn(false);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '1016978376547-ammm0m45bra2q14vc5e1cc110eubr65u.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });

    const parent = document.getElementById('google_btn');
    google.accounts.id.renderButton(parent, { theme: 'filled_blue' });
  }, []);

  return (
    <>
      <h1> Trabalho Sistemas Distribuidos </h1>
      <h2> LOGIN </h2>
      
      <div id="fonte">
        <label for="userLogin">Usuario</label>
        <br></br>
        <input class="inputs" id="userLogin" type="text" aria-label="Usuário" placeholder="Usuario"></input>
      </div>
			
      <div id="fonte">
				<label for="userPassword">Senha</label>
        <br></br>
				<input class="inputs" id="userPassword" type="password" aria-label="Senha" placeholder="Senha"></input>
			</div>

      <div>
        <button class="logar" type="submit" value="Entrar"> Entrar </button>
      </div>

      {isLoggedIn ? (
        <>
          <div>
            <h2>Você está logado!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <>
          <div id="google_btn"></div>
        </>
        
      )}
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
