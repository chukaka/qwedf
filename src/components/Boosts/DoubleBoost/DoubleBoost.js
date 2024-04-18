import React, { useContext, useState } from 'react';
import './DoubleBoost.css';
import UserContext from '../../../context/UserContext';
import iconcoin from '../../../pages/icons8-dollar-coin-94.png'


const DoubleBoost = () => {
  const { contextData } = useContext(UserContext);
  const { bust, setBust, balance, setBalance } = contextData;
  const [buttonText, setButtonText] = useState('Double Boost X5');
  const [buttonText2, setButtonText2] = useState('15.00');
  const [buttonColor, setButtonColor] = useState('');

  const handleClick = () => {
    if (balance >= 15.0 && !bust) {
      setBust(true);
      localStorage.setItem('bust', true);
      setBalance(prevBalance => prevBalance - 15.0);
      
    } else {
      // Change button text and color temporarily
      setButtonText('Недостаточно средств');
      setButtonText2('');
      setButtonColor('black');
      
      // Revert button text and color after 1 second
      setTimeout(() => {
        setButtonText('Double Boost X5');
        setButtonText2('15.00')
        setButtonColor('');
      }, 1000);
    }
  };

  return (
    <div className="double-boost-container" onClick={handleClick} style={{ backgroundColor: buttonColor }}>
        <div className="double-boost-info">
          <div className="double-boost-name">{buttonText}</div>
          <div className="double-bot-price"><span>{buttonText2}</span><img src={iconcoin} alt="Icon" className="double-small-image" /></div>
        </div>
    </div>
  );
};

export default DoubleBoost;
