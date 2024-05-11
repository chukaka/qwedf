import React from "react";
import "./MostBet.css";
import mostBet from "./mostbet.png";
import icons8 from "../../../pages/icons8-dollar-coin-94.png";

const MostBet = () => {
  return (
    <a
      href="https://g4etwkxducmp.com/T9ws"
      className="mostbet-skin-container"
    >
      <img src={mostBet} alt="Mellbet Skin" className="mostbet-skin-image" />

      <div className="mostbet-skin-info">
        <p className="mostbet-skin-name">Создать аккаунт на MOSTBET</p>
        <p className="mostbet-skin-price">
          <>
            <img src={icons8} alt="Icon" className="mostbet-small-image" />
            <span>8.00</span>
          </>
        </p>
      </div>
    </a>
  );
};

export default MostBet;
