import React, { useEffect, useState, useContext } from "react";
import "./DogSkin.css";
import dogImage from "../../DefaultCoin/dog.png";
import UserContext from "../../../context/UserContext";
import icons8 from "../../../pages/icons8-dollar-coin-94.png";
import galachka from '../../Tasks/icons8-approval-94.png'


const DogSkin = ({ selected, onSelect }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const { contextData } = useContext(UserContext);
  const {
    dogSkin,
    dogSkinP,
    setDogSkin,
    setDogSkinP,
    balance,
    setBalance,
    setDefaultSkin,
  } = contextData;

  const handleClick = () => {
    if (!dogSkinP && balance >= 25.0) {
      setBalance((prevBalance) => prevBalance - 25.0);
      localStorage.setItem("dogSkinP", true);
      setDogSkinP(true);
      onSelect(3);
    } else if (dogSkinP) {
      onSelect(3);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".dog-skin-container");
    const name = document.querySelector(".dog-skin-name");
    const price = document.querySelector(".dog-skin-price"); // Добавлено получение элемента с классом dog-skin-price

    if (container && name && price) {
      if (isSelected) {
        container.style.backgroundColor = "rgba(56, 51, 51, 0.1)";
        name.innerHTML = `<img src="${galachka}" alt="Icon" class="dog-big-image" />`;
        price.style.display = "none";
      } else {
        container.style.backgroundColor = "";
        name.textContent = "Exclusive DogHouse Skin";
        price.style.display = "block"; // Показать элемент с ценой
      }
    }
  }, [isSelected]);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div className="dog-skin-container" onClick={handleClick}>
      <div className="dog-skin-texts">
        <div className="dog-skin-name">Exclusive DogHouse Skin</div>
        <div className="dog-skin-price">
          {!dogSkinP && (
            <>
              <span className="text-content">25.00</span>
              <img src={icons8} alt="Icon" className="dog-small-image" />
            </>
          )}
          {dogSkinP && "Received successfully"}
        </div>
      </div>
      <img src={dogImage} alt="Dog Skin" className="dog-skin-image" />
    </div>
  );
};

export default DogSkin;
