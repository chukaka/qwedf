import React, { useContext, useState } from "react";
import "./Kick.css";
import kickLogo from "./Kick_logo.svg.png";
import UserContext from "../../../context/UserContext";
import icons8 from '../../../pages/icons8-dollar-coin-94.png'
import galachka from '../icons8-approval-94.png'

const Kick = () => {
  const { contextData } = useContext(UserContext);
  const { balance, setBalance } = contextData;

  const [clicked, setClicked] = useState(localStorage.getItem('clickedKick') === 'true');

  const handleClick = () => {
    if (!clicked) {
      setBalance(balance + 2.00);
      localStorage.setItem('clickedKick', 'true');
      setTimeout(() => {
        setClicked(true);
        
      }, 10000); // 10 секунд задержки
    }
  };

  return (
    <div className={clicked ? "disabled" : ""} onClick={handleClick}>      
        <a href="https://kick.com/mellstroy271" className="kick-skin-container">
          <img src={kickLogo} alt="Dog Skin" className="kick-skin-image" />
          <div className="kick-skin-info">
            <p className="kick-skin-name">Подпишись на Kick MELLSTROY</p>
            <div className="kick-skin-price">
              {!clicked && (
                <>
                  <img src={icons8} alt="Icon" className="kick-small-image" />
                  <span>2.00</span>
                </>
              )}
              {clicked && <img src={galachka} alt="Icon" class="public-big-image" />}
            </div>
          </div>
        </a>
    </div>
  );
};
export default Kick;


