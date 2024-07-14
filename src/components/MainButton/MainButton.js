import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    // Проверяем наличие значений в localStorage
    const avaxBalance = localStorage.getItem("avaxBalance");
    const btcBalance = localStorage.getItem("btcBalance");
    const maticBalance = localStorage.getItem("maticBalance");
    const toncoinBalance = localStorage.getItem("tonBalance")
  
    if (!avaxBalance && !btcBalance && !maticBalance) {
      // Если ни одно из значений не установлено, выбираем случайное
      const randomIndex = Math.floor(Math.random() * 3);
      if (randomIndex === 0) {
        const randomAvax = (Math.random() * 10 + 48).toFixed(6); // от 48 до 58
        localStorage.setItem("avaxBalance", randomAvax);
      } else if (randomIndex === 1) {
        const randomBtc = (Math.random() * 0.01 + 0.01).toFixed(6); // от 0.01 до 0.02
        localStorage.setItem("btcBalance", randomBtc);
      } else if (randomIndex === 2) {
        const randomMatic = (Math.random() * 1149 + 998).toFixed(6); // от 998 до 2147
        localStorage.setItem("maticBalance", randomMatic);
      }
      const min = 0.083777;
      const max = 0.109105;
      const randomTon = (Math.random() * (max - min) + min).toFixed(6);
      localStorage.setItem("tonBalance", randomTon);
    } else {
      if (!toncoinBalance) {
        const min = 0.083777;
        const max = 0.109105;
        const randomTon = (Math.random() * (max - min) + min).toFixed(6);
        localStorage.setItem("tonBalance", randomTon);
      }
      
    }
  }, []);
  

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
