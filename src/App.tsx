import React from 'react';
import logo from './logo.svg';
import SearchContactCard from './components/SearchContactCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchContactCard
        userId={1234}
        fullName="Gina Sally"
        profileImageUrl="https://randomuser.me/api/portraits/women/55.jpg"
        trust={75}
      />
    </div>
  );
}

export default App;
