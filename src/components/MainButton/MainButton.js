import React from 'react';
import './MainButton.css';
import { Link } from 'react-router-dom';
import claimIcon from './icons8-gold-pot-94.png'
import claimIcon2 from './icons8-boost-64.png'
import claimIcon3 from './icons8-ticket-94.png'

const MainButton = () => {
  return (
    <div className="main-button">
      <Link to="/claim" className="button-section link-style">
      <img src={claimIcon} alt="Claim" className="emoji" />
        Claim
      </Link>
      <Link to="/boost" className="button-section link-style">
      <img src={claimIcon2} alt="Claim" className="emoji" />
        Boost
      </Link>
      <Link to="/task" className="button-section link-style">
      <img src={claimIcon3} alt="Claim" className="emoji" />
        Tasks
      </Link>
    </div>
  );
};

export default MainButton;
