import React, { useContext, useState } from "react";
import "./Egg.css";
import kickLogo from "./IMG_0391.png";
import UserContext from "../../../context/UserContext";
import icons8 from '../../../pages/icons8-dollar-coin-94.png'
import galachka from '../icons8-approval-94.png'

const Egg = () => {
  const { contextData } = useContext(UserContext);
  const { balance, setBalance } = contextData;

  const [clicked, setClicked] = useState(localStorage.getItem('clickedEgg') === 'true');

  const handleClick = () => {
    if (!clicked) {
      setBalance(balance + 10.00);
      localStorage.setItem('clickedEgg', 'true');
      setTimeout(() => {
        setClicked(true);
        
      }, 120000); // 10 секунд задержки
    }
  };

  return (
    <div className={clicked ? "disabled" : ""} onClick={handleClick}>      
        <a href="https://t.me/uniegg_bot" className="egg-skin-container">
          <img src={kickLogo} alt="Egg Skin" className="egg-skin-image" />
          <div className="egg-skin-info">
            <p className="egg-skin-name">Зайти в игру и собрать 100 🥚</p>
            <div className="egg-skin-price">
              {!clicked && (
                <>
                  <img src={icons8} alt="Icon" className="egg-small-image" />
                  <span>10.00</span>
                </>
              )}
              {clicked && <img src={galachka} alt="Icon" class="egg-big-image" />}
            </div>
          </div>
        </a>
    </div>
  );
};
export default Egg;


