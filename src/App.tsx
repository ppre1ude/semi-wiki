import React from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';


function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: "20px", flex: 1 }}>

        </main>
      </div>
    </div>
  );
}

export default App;
