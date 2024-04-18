import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Boost.css";
import DogSkin from "../components/CoinSkins/DogSkin/DogSkin";
import LegendarySkin from "../components/CoinSkins/LegendarySkin/LegendarySkin";
import SpeedBoost from "../components/Boosts/SpeedBoost/SpeedBoost";
import DoubleBoost from "../components/Boosts/DoubleBoost/DoubleBoost";
import AutoBot from "../components/Boosts/AutoBot/AutoBot";
import EachHour from "../components/Boosts/EachHour/EachHour";
import UserContext from "../context/UserContext";
import DefaultSkin from "../components/CoinSkins/DefaultSkin/DefaultSkin";

const Boost = () => {
  const { contextData } = useContext(UserContext);
  const { bust, speed, autoBot, selectedSkin, setSelectedSkin } = contextData;


  useEffect(() => {
    // При монтировании компонента проверяем localStorage на наличие выбранного скина
    const storedSkin = localStorage.getItem('selectedSkin');
    if (storedSkin) {
      setSelectedSkin(storedSkin);
    }
  }, []);

  const handleSkinSelect = (skin) => {
    setSelectedSkin(skin); // Преобразование в строку
    localStorage.setItem('selectedSkin', skin); // Сохраняем выбранный скин в localStorage
};

  return (
    <div className="boost-container">
      <div className="back-button">
        <Link to="/" className="back-link">
          &lt; Назад
        </Link>
      </div>
      <div className="center-text">🔋</div>
      <div className="boost-components">
        {!speed && <SpeedBoost />}
        {!bust && <DoubleBoost />}
        {!autoBot && <AutoBot />}
        <EachHour />
      </div>
      <div className="skins-heading">Skins</div>
      <div className="skins-components">
        <DefaultSkin selected={selectedSkin == 1 } onSelect={handleSkinSelect} />
        <LegendarySkin selected={selectedSkin == 2 } onSelect={handleSkinSelect} />
        <DogSkin selected={selectedSkin == 3} onSelect={handleSkinSelect} />
      </div>
    </div>
  );
};

export default Boost;
