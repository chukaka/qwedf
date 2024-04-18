import React from "react";
import "./Win1.css";
import win11 from "./1284-1WIN-9e31416c34.png";
import icons8 from "../../../pages/icons8-dollar-coin-94.png";

const Win1 = () => {
  return (
    <a
      href="https://1wdrwn.life/casino/list?open=register#01a4"
      className="win1-skin-container"
    >
      <img src={win11} alt="Win1 Skin" className="win1-skin-image" />

      <div className="win1-skin-info">
        <p className="win1-skin-name">Создать аккаунт на 1Win ( VPN )</p>
        <p className="win1-skin-price">
          <>
            <img src={icons8} alt="Icon" className="win1-small-image" />
            <span>3.00</span>
          </>
        </p>
      </div>
    </a>
  );
};
export default Win1;
