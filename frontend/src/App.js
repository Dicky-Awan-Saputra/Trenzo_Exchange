import React, { useState } from 'react';
import './App.css';

function App() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = () => {
    alert('Fitur wallet akan datang');
  };

  return (
    <div className="App">
      <header>
        <h1>🚀 Trenzo Exchange</h1>
        <button onClick={connectWallet}>
          {wallet ? 'Terhubung' : 'Hubungkan Wallet'}
        </button>
      </header>
      <main>
        <section>
          <h2>Trading Pasangan</h2>
          <div>BTC/USDT</div>
          <div>ETH/USDT</div>
        </section>
      </main>
    </div>
  );
}

export default App;