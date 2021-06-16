import "./App.css";
import Header from "./Components/Header";
import ImageCreator from "./Components/ImageCreator";
import { MemeContext } from "./Context/MemeContext";
import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [picture, setPicture] = useState("");
  const [upperWording, setUpperWording] = useState("");
  const [lowerWording, setLowerWording] = useState("");
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");
  return (
    <div className="main__container">
      <Header />
      <MemeContext.Provider
        value={{
          url,
          setUrl,
          picture,
          setPicture,
          upperWording,
          setUpperWording,
          lowerWording,
          setLowerWording,
          upper,
          setUpper,
          lower,
          setLower,
        }}
      >
        <ImageCreator />
      </MemeContext.Provider>
    </div>
  );
}

export default App;
