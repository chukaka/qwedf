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

  const usdt = 0.9149;

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
    return !inputValue || parseFloat(inputValue) > balance;
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
      <div className="balance-field">
        <span>{balance.toFixed(6)}</span>
        <img src={melImage} alt="MEL icon" className="icon-mell" />
      </div>
      <div className="usdt-field">
        <span>{usdt.toFixed(6)}</span>
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
        style={{ filter: isIconColored ? "none" : "grayscale(100%)" }} // Применяем стиль для изменения цвета иконки
        onClick={() => {
          if (!isButtonDisabled()) {
            // Если кнопка активна, можно выполнить действие
            // В данном случае, переход по ссылке
            window.location.href = "https://t.me/mrtsk"; // Замените ссылку на нужную
          }
        }}
      />
      <div className="usdt-input">
        <label htmlFor="usdtInput" className="balance-label">
          usdt
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

      <div class="area">
        <label for="areaInput" class="area-label">
          usdt
        </label>
        <textarea
          id="areaInput"
          placeholder="Enter text here..."
          class="area-in"
        ></textarea>
        <button id="submitButton" disabled>
          adfad
        </button>
      </div>

      <div className="infotext">
        <p>
          *Не выводите средства напрямую на краудфандинговую платформу или ICO.
          Мы не сможем начислить на ваш счет токены от этой продажи.
        </p>
        <p>
          *Убедитесь, что вы ввели правильный адрес для пополнения в USDT сети
          Solana. В противном случае средства могут быть утеряны.
        </p>
      </div>
    </div>
  );
};

export default Swap;
