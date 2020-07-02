import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ["Go to market", "Buy food", "Make dinner"];
  return (
    <div className="App">
      <ul className="App-Todos">
        {todos.map((e) => <li className="App-Todos-Item">{e}</li>)}
      </ul>
    </div>
  );
}

export default App;
