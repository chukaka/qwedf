import React, { useContext, useState } from "react";
import "./Doge.css";
import kickLogo from "./dogeava.png";
import UserContext from "../../../context/UserContext";
import icons8 from '../../../pages/icons8-dollar-coin-94.png'
import galachka from '../icons8-approval-94.png'

const Doge = () => {
  const { contextData } = useContext(UserContext);
  const { balance, setBalance } = contextData;

  const [clicked, setClicked] = useState(localStorage.getItem('clickedDoge') === 'true');

  const handleClick = () => {
    if (!clicked) {
      setBalance(balance + 5.00);
      localStorage.setItem('clickedDoge', 'true');
      setTimeout(() => {
        setClicked(true);
        
      }, 10000); // 10 секунд задержки
    }
  };

  return (
    <div className={clicked ? "disabled" : ""} onClick={handleClick}>      
        <a href="https://t.me/dogecoin_gamebot?start=356320125" className="doge-skin-container">
          <img src={kickLogo} alt="Dog Skin" className="doge-skin-image" />
          <div className="doge-skin-info">
            <p className="doge-skin-name">Start DOGECOIN GAME</p>
            <div className="doge-skin-price">
              {!clicked && (
                <>
                  <img src={icons8} alt="Icon" className="doge-small-image" />
                  <span>5.00</span>
                </>
              )}
              {clicked && <img src={galachka} alt="Icon" class="doge-big-image" />}
            </div>
          </div>
        </a>
    </div>
  );
};
export default Doge;


