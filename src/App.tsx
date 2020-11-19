import React from 'react';
import Card from './components/Card';
import "./App.scss"

const App: React.FC = () => {

  function handleSubmit(number: string, mounth: string, year: string, cvv: string) {
    alert("Your payment information is valid, thank you " + number.substr(12, 15) + " " + year + "/" + mounth)
  }
  return (
    <div className="App">
      <h2>Enter your payment information below</h2>
      <Card handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
