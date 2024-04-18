import React from "react";
import "./Mellbet.css";
import mellBet from "./2865fa.png";
import icons8 from "../../../pages/icons8-dollar-coin-94.png";

const Mellbet = () => {
  return (
    <a
      href="https://refpakrtsb.top/L?tag=d_852201m_45415c_&site=852201&ad=45415"
      className="mellbet-skin-container"
    >
      <img src={mellBet} alt="Mellbet Skin" className="mellbet-skin-image" />

      <div className="mellbet-skin-info">
        <p className="mellbet-skin-name">Создать аккаунт на MellBet</p>
        <p className="mellbet-skin-price">
          <>
            <img src={icons8} alt="Icon" className="mellbet-small-image" />
            <span>4.00</span>
          </>
        </p>
      </div>
    </a>
  );
};

export default Mellbet;
