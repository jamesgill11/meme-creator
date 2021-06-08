import React, { useState } from "react";

const ImageCreator = () => {
  const [url, setUrl] = useState("");
  const [picture, setPicture] = useState("");
  const [upperWording, setUpperWording] = useState("");
  const [lowerWording, setLowerWording] = useState("");
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl("");
    setPicture(url);
    setLowerWording("");
    setLower(lowerWording);
    setUpperWording("");
    setUpper(upperWording);
  };

  return (
    <div>
      <form className="my__form" onSubmit={handleSubmit}>
        <div className="input__form">
          <label>Image URL: </label>
          <input
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
          />
        </div>
        <div className="input__form">
          <label>Upper Wording: </label>
          <input
            type="text"
            value={upperWording}
            onChange={(event) => setUpperWording(event.target.value)}
            required
          />
        </div>
        <div className="input__form">
          <label>Lower Wording: </label>
          <input
            type="text"
            value={lowerWording}
            onChange={(event) => setLowerWording(event.target.value)}
            required
          />
        </div>
        <div className="input__form">
          <button>Submit!</button>
        </div>
      </form>

      <div className="image__container">
        <img src={url} />
        <img src={picture} />
        <p className="upper__text">
          {upperWording}
          {upper}
        </p>
        <p className="lower__text">
          {lowerWording}
          {lower}
        </p>
      </div>
    </div>
  );
};

export default ImageCreator;
