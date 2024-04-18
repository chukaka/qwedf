import React from "react";
import "./Desktop.css"; 
import qrcode from "./IMG_5556.png"

const HomePage = () => {
  return (
    <div className="image-container-desktop">
      <img
        src={qrcode}
        alt="Placeholder"
        className="image"
      />
    </div>
  );
};

export default HomePage;
