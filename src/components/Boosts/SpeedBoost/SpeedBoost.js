import React, { useContext, useState } from 'react';
import './SpeedBoost.css';
import UserContext from '../../../context/UserContext';
import iconcoin from '../../../pages/icons8-dollar-coin-94.png'

const SpeedBoost = () => {
  const { contextData } = useContext(UserContext);
  const { speed, setSpeed, balance, setBalance } = contextData;
  const [buttonText, setButtonText] = useState('Speed Boost X2');
  const [buttonText2, setButtonText2] = useState('5.00');
  const [buttonColor, setButtonColor] = useState('');

  const handleClick = () => {
    if (balance >= 5.0 && !speed) {
      setSpeed(true);
      localStorage.setItem('speed', true);
      setBalance(prevBalance => prevBalance - 5.0);
      
    } else {
      // Change button text and color temporarily
      setButtonText('Недостаточно средств');
      setButtonText2('');
      setButtonColor('black');
      
      // Revert button text and color after 1 second
      setTimeout(() => {
        setButtonText('Speed Boost X2');
        setButtonText2('5.00')
        setButtonColor('');
      }, 1000);
    }
  };

  return (
    <div className="speed-boost-container" onClick={handleClick} style={{ backgroundColor: buttonColor }}>
      <div className="speed-boost-info">
        <div className="speed-boost-name">{buttonText}</div>
        <div className="speed-bot-price"><span>{buttonText2}</span><img src={iconcoin} alt="Icon" className="speed-small-image" /></div>
      </div>
    </div>
  );
};

export default SpeedBoost;
