import { Link } from "react-router-dom";
import "./ClaimPage.css";
import coinse from "./ecx.jpg";
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import ClaimBar from "../components/ClaimBar/ClaimBar";
import getUserDataFromServer from '../utils/axiosGet'

const ClaimPage = () => {
  const { contextData } = useContext(UserContext);
  const { balance, userId } = contextData;

  const getter = ()  => {
    getUserDataFromServer(userId)
  }
 
  return (
    <div className="claim-page-container">
      <div className="claim-back-button">
        <Link to="/" className="claim-back-link">
          &lt; Назад
        </Link>
      </div>
      <div className="claim-center-text">MELLCOINS balance</div>
      <div className="claim-center-text2">{balance.toFixed(5)}</div>
      <div className="claim-boost-components">
        <img src={coinse} alt="Bottom Icon" />
      </div>
      <div className="claim-skins-heading">COMING SOON..</div>
      <div className="claim-skins-heading2">
        <ClaimBar />
      </div>
      <div className="claim-skins-heading3" onClick={getter}></div>

    </div>
  );
};

export default ClaimPage;
