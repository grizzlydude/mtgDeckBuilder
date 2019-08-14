import React from 'react';
import './App.css';
import route from './routes'
import Nav from './componets/NavBar/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      {route}
    </div>
  );
}

export default App;
