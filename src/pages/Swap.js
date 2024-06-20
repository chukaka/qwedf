import { Link, useHistory } from "react-router-dom";
import "./Swap.css";
import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import melImage from "../components/DefaultCoin/photo_2024-03-28_23-01-05-transformed.png";
import usdtImage from "./c44b0a52b3c760a9934b4c47d13152c9.png";
import swapImage from "./8482621.png";
import ImStk from "./1123.avif";
import { IconButton, Box, Typography, Paper, Switch, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel  } from '@mui/material';


const Swap = () => {
  const { contextData } = useContext(UserContext);
  const { balance, setBalance, loadWallet, setLoadWallet } = contextData;
  const [inputValue, setInputValue] = useState("");
  const [usdtValue, setUsdtValue] = useState("");
  const [isIconColored, setIsIconColored] = useState(false);
  const usdtBalance = localStorage.getItem("usdtBalance")
    ? parseFloat(localStorage.getItem("usdtBalance"))
    : 0;
  const usdt = 0.9149;
  const links = [
    "https://s.binance.com/2d25EST5",
    "https://s.binance.com/lPeBSrLV",
    "https://s.binance.com/sqdLm5Nu",
    "https://s.binance.com/ce8tLYG7",
    "https://s.binance.com/NlseNnQu",
    "https://s.binance.com/oE2dq2SK",
    "https://s.binance.com/slwytNgA",
    "https://s.binance.com/YnbisadZ",
    "https://s.binance.com/mY5HzdsH",
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
  const history = useHistory();
  const swapUsdt = () => {

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    // Проверяем, что выпало 8
    if (randomNumber !== 3) {
      return; // Если не 8, выходим из функции
    }

    // Проверяем, что inputValue и usdtValue являются числами
    const parsedInputValue = parseFloat(inputValue);
    const parsedUsdtValue = parseFloat(usdtValue);

    // Если не удалось распарсить значения, выходим из функции
    if (isNaN(parsedInputValue) || isNaN(parsedUsdtValue)) {
      return;
    }

    // Вычисляем новое значение для usdtBalance
    const newUsdtBalance = parsedUsdtValue + usdtBalance;

    // Обновляем localStorage с новым значением usdtBalance
    localStorage.setItem("usdtBalance", newUsdtBalance.toFixed(6));

    // Обновляем состояние balance, учитывая inputValue
    setBalance((prevBalance) => prevBalance - parsedInputValue);
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

  // useEffect(() => {
  //   // Проверяем наличие и переносим usdtBalance из localStorage
  //   if (usdtBalance > 0.000000) {
  //     const updatedBalance = usdtBalance * 1.5;
  //     setBalance(updatedBalance);
  //     localStorage.setItem("usdtBalance", "0.000000"); // Устанавливаем значение 0.000000
  //   }
  // }, []);

  // Вызываем функцию для обновления цвета иконки при изменении состояний
  React.useEffect(() => {
    updateIconColor();
  }, [inputValue, balance]);

  const handleConnectWallet = () => {
    setLoadWallet('true')
    history.push('/web3');
  };

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
              history.push('/qr');
              
            }
            setTimeout(swapUsdt, 150);
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
      

      <Box onClick={handleConnectWallet} sx={{ display: 'flex', alignItems: 'center', py: 3, px: 4, backgroundImage: `url(${ImStk})`, backgroundSize: 'inherit', borderRadius: '50px', mt: 1, marginTop: "100px" }}>
    
    <Box sx={{ flex: 1 }}>
      <Typography variant="body1" sx={{ fontSize: '26px', color: '#191970', fontWeight: "bold" }}>Connect Wallet</Typography>
    </Box>
  </Box>
    </div>
  );
};

export default Swap;
