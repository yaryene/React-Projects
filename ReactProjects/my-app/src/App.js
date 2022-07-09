import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
export default App;
