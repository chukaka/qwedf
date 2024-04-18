import React, { useContext, useState } from 'react';
import './AutoBot.css';
import UserContext from '../../../context/UserContext';
import iconcoin from '../../../pages/icons8-dollar-coin-94.png'

const AutoBot = () => {
  const { contextData } = useContext(UserContext);
  const { autoBot, setAutoBot, balance, setBalance } = contextData;
  const [buttonText, setButtonText] = useState('Auto Bot');
  const [buttonText2, setButtonText2] = useState('25.00');
  const [buttonColor, setButtonColor] = useState('');

  const handleClick = () => {
    if (balance >= 25.0 && !autoBot) {
      setAutoBot(true);
      localStorage.setItem('autoBot', true);
      setBalance(prevBalance => prevBalance - 25.0);
      
    } else {
      // Change button text and color temporarily
      setButtonText('Недостаточно средств');
      setButtonText2('');
      setButtonColor('black');
      
      // Revert button text and color after 1 second
      setTimeout(() => {
        setButtonText('Auto Bot');
        setButtonText2('25.00')
        setButtonColor('');
      }, 1000);
    }
  };

  return (
    <div className="auto-bot-container" onClick={handleClick} style={{ backgroundColor: buttonColor }}>
      <div className="auto-bot-info">
        <div className="auto-bot-name">{buttonText}</div>
        <div className="auto-bot-price"><span>{buttonText2}</span><img src={iconcoin} alt="Icon" className="auto-small-image" /></div>
      </div>
    </div>
  );
};

export default AutoBot;
