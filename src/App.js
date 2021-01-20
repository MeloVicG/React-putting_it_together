import './App.css';
import React from "react";
import PersonCard from "./components/PersonCards";

function App() {
  return (
    <div className="App">
      
      <PersonCard lastName="The" firstName="UnderTaker" age={1} hairColor="turqoise"/>
      <PersonCard lastName="Mad" firstName="Max" age={22} hairColor="black"/>
      <PersonCard lastName="John" firstName="Snow" age={55} hairColor="black"/>
      <PersonCard lastName="Optimus " firstName="Prime" age={1000} hairColor="blue"/>
      
    </div>
  );
}

export default App;
