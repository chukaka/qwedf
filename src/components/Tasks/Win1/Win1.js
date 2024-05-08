import React, { useContext, useState } from "react";
import "./Win1.css";
import kickLogo from "./photo1715189337-removebg-preview.png";
import UserContext from "../../../context/UserContext";
import icons8 from '../../../pages/icons8-dollar-coin-94.png'
import galachka from '../icons8-approval-94.png'

const Win1 = () => {
  const { contextData } = useContext(UserContext);
  const { balance, setBalance } = contextData;

  const [clicked, setClicked] = useState(localStorage.getItem('clickedAnal') === 'true');

  const handleClick = () => {
    if (!clicked) {
      setBalance(balance + 5.00);
      localStorage.setItem('clickedAnal', 'true');
      setTimeout(() => {
        setClicked(true);
        
      }, 2000); // 10 секунд задержки
    }
  };

  return (
    <div className={clicked ? "disabled" : ""} onClick={handleClick}>      
        <a href="https://t.me/+qauup0dykMlkNjVi" className="win1-skin-container">
          <img src={kickLogo} alt="Analytics" className="win1-skin-image" />
          <div className="win1-skin-info">
            <p className="win1-skin-name">Подписаться на Псевдо Аналитик</p>
            <div className="win1-skin-price">
              {!clicked && (
                <>
                  <img src={icons8} alt="Icon" className="win1-small-image" />
                  <span>5.00</span>
                </>
              )}
              {clicked && <img src={galachka} alt="Icon" class="win1-big-image" />}
            </div>
          </div>
        </a>
    </div>
  );
};
export default Win1;


