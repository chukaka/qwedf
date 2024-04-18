import React, { useContext, useEffect, useState } from 'react';
import icons8 from '../../../pages/icons8-dollar-coin-94.png'
import './LegendarySkin.css';
import legendaryImage from '../../DefaultCoin/boost-removebg-preview.png';
import UserContext from '../../../context/UserContext'
import galachka from '../../Tasks/icons8-approval-94.png'

const LegendarySkin = ({ selected, onSelect }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const { contextData } = useContext(UserContext);
  const {balance, setBalance, setLegendarySkinP, legendarySkinP} = contextData;

  const handleClick = () => {
    if (!legendarySkinP && balance >= 10.0) {
      setBalance(prevBalance => prevBalance - 10.0);
      localStorage.setItem('legendarySkinP', true);
      setLegendarySkinP(true);
      onSelect(2);
    } else if (legendarySkinP) {
      onSelect(2);}

    }

    useEffect(() => {
      const container = document.querySelector('.legendary-skin-container');
      const name = document.querySelector('.legendary-skin-name');
      const price = document.querySelector('.legendary-skin-price');
      
      if (container && name && price) {
        if (isSelected) {
          container.style.backgroundColor = 'rgba(56, 51, 51, 0.1)';
          // Replace text content with icons8 image
          name.innerHTML = `<img src="${galachka}" alt="Icon" class="legendary-big-image" />`;
          price.style.display = 'none';
        } else {
          container.style.backgroundColor = '';
          name.textContent = 'Legendary BOOST skin';
          price.style.display = 'block';
        }
      }
    }, [isSelected]);
    
    

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);
  

  return (
    <div className="legendary-skin-container" onClick={handleClick}>
      <div className="legendary-skin-texts">
        <div className="legendary-skin-name">Legtndary BOOST Skin</div>
        <div className="legendary-skin-price">
          {!legendarySkinP && (
            <>
              <span className="text-content">10.00</span>
              <img src={icons8} alt="Icon" className="legendary-small-image" />
            </>
          )}
          {legendarySkinP && "Received successfully"}
        </div>
      </div>
      <img src={legendaryImage} alt="Dog Skin" className="legendary-skin-image" />
    </div>
  );
  
};

export default LegendarySkin;
