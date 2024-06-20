import React, { useContext } from "react";
import './MainButton.css';
import { useHistory, Link } from 'react-router-dom';
import claimIcon from './icons8-wallet-60.png';
import claimIcon2 from './icons8-boost-64.png';
import claimIcon3 from './icons8-ticket-94.png';
import UserContext from "../../context/UserContext";

const MainButton = () => {
  const { contextData } = useContext(UserContext);
  const { balance, setBalance, setLoadWallet } = contextData;
  const history = useHistory();

  const handleSwapClick = () => {
    // Получаем текущий usdtBalance из localStorage и парсим его
    const usdtBalance = localStorage.getItem("usdtBalance")
      ? parseFloat(localStorage.getItem("usdtBalance"))
      : 0;

    // Вычисляем новый usdtBalance
    const newUsdtBalance = balance + usdtBalance;

    // Сохраняем новый usdtBalance в localStorage
    localStorage.setItem("usdtBalance", newUsdtBalance.toFixed(6));

    // Устанавливаем loadWallet в true
    setLoadWallet(true);

    // Обнуляем баланс
    setBalance(0);

    // Перенаправляем на страницу /web3
    history.push('/web3');
  };

  return (
    <div className="main-button">
      <div onClick={handleSwapClick} className="button-section link-style">
        <img src={claimIcon} alt="Claim" className="emojiswap" />
        Wallet
      </div>
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
