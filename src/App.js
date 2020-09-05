import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import ZipCodeForm from "./components/ZipCodeForm/ZipCodeForm";
import Results from "./components/Results/Results";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ZipCodeForm />
      <Results />
    </div>
  );
}

export default App;
