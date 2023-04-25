import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './Sidebar.jsx';
import Chat from "./Chat.jsx";

function App() {
  return (
    <div className="app">

      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
