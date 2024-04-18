import React, { useState, useContext, useEffect } from "react";
import "./HomePage.css";
import DefaultCoin from "../components/DefaultCoin/DefaultCoin";
import MainButton from "../components/MainButton/MainButton";
import UserContext from "../context/UserContext";
import getUserDataFromServer from "../utils/axiosGet";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import coinimage from "./icons8-dollar-coin-94.png";


const HomePage = () => {
  const { contextData } = useContext(UserContext);
  const {
    setBalance,
    fiveHundred,
    hundred,
    setHundred,
    setFiveHundred,
    speed,
    autoBot,
    setUserId,
    userId,
    pageLoaded,
    setPageLoaded,
    setLoading,
    loading,
    selectedSkin,
  } = contextData;
  const [changeBalance, setChangeBalance] = useState(() => {
    const changeBalanceNow = localStorage.getItem("balance");
    return changeBalanceNow ? JSON.parse(changeBalanceNow) : 0;
  });
  const [lastActivity, setLastActivity] = useState(
    parseInt(localStorage.getItem("lastActivity"))
  );

  const [dream, setDream] = useState(0);
  const [autoChangeBalance, setAutoChangeBalance] = useState(0);
  const [showDream, setShowDream] = useState(false);

  const currentTime = new Date().getTime();

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes("win") || platform.includes("mac")) {
      console.log("Open on your mobile device");
      setPageLoaded(false);
    } else {
      setPageLoaded(true);
    }
  }, []);
  if (!pageLoaded) {
    return null;
  }

  useEffect(() => {
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.initDataUnsafe
    ) {
      const getUserId = window.Telegram.WebApp.initDataUnsafe.user.id;
      let checkId = localStorage.getItem("userId");
      if (!checkId) {
        setUserId(getUserId);
        localStorage.setItem("userId", getUserId);
      }
    }
    if (window.Telegram && window.Telegram.WebApp) {
      if (!pageLoaded) {
        return;
      }
      window.Telegram.WebApp.expand();
    }
  }, [pageLoaded]);

  useEffect(() => {
    let count = 0;
    let intervalID;
    let speedUp = speed ? 10 : 20;

    if (hundred) {
      intervalID = setInterval(
        () => {
          if (selectedSkin == 3) {
            if (count < 500) {
              setChangeBalance((prevBalance) => prevBalance + 0.000004);
              count++;
            } else {
              clearInterval(intervalID);
              setBalance((prevBalance) => prevBalance + 0.002);
              setHundred(false);
              setLastActivity(currentTime);
              localStorage.setItem("lastActivity", currentTime.toString());
            }
          } else {
            if (count < 500) {
              setChangeBalance((prevBalance) => prevBalance + 0.000002);
              count++;
            } else {
              clearInterval(intervalID);
              setBalance((prevBalance) => prevBalance + 0.001);
              setHundred(false);
              setLastActivity(currentTime);
              localStorage.setItem("lastActivity", currentTime.toString());
            }
          }
        },
        selectedSkin == 2 ? speedUp / 2 : speedUp
      );
    } else if (fiveHundred) {
      intervalID = setInterval(
        () => {
          if (selectedSkin == 3) {
            if (count < 500) {
              setChangeBalance((prevBalance) => prevBalance + 0.00002);
              count++;
            } else {
              clearInterval(intervalID);
              setBalance((prevBalance) => prevBalance + 0.01);
              setFiveHundred(false);
              setLastActivity(currentTime);
              localStorage.setItem("lastActivity", currentTime.toString());
            }
          } else {
            if (count < 500) {
              setChangeBalance((prevBalance) => prevBalance + 0.00001);
              count++;
            } else {
              clearInterval(intervalID);
              setBalance((prevBalance) => prevBalance + 0.005);
              setFiveHundred(false);
              setLastActivity(currentTime);
              localStorage.setItem("lastActivity", currentTime.toString());
            }
          }
        },
        selectedSkin == 2 ? speedUp / 2 : speedUp
      );
    }

    return () => clearInterval(intervalID);
  }, [fiveHundred, hundred, speed]);

  useEffect(() => {
    let count = 0;
    let intervalID;
    if (autoChangeBalance > 0) {
      intervalID = setInterval(() => {
        if (count < 300) {
          setChangeBalance(
            (prevBalance) => prevBalance + autoChangeBalance / 300
          );
          count++;
        } else {
          clearInterval(intervalID);
          setLastActivity(currentTime);
          localStorage.setItem("lastActivity", currentTime.toString());
          setAutoChangeBalance(0);
        }
      }, 10);

      return () => clearInterval(intervalID);
    }
  }, [autoChangeBalance]);

  useEffect(() => {
    if (changeBalance == 0) {
      const randomAmount = Math.random() * (18.40501 - 9.01883) + 9.01883;
      let count = 0;
      const intervalID = setInterval(() => {
        if (count < 300) {
          setChangeBalance((prevBalance) => prevBalance + randomAmount / 300);
          count++;
        } else {
          clearInterval(intervalID);
          setBalance(randomAmount);
          localStorage.setItem("balance", randomAmount.toString());
        }
      }, 10);

      return () => clearInterval(intervalID);
    }
  }, []);

  useEffect(() => {

    if (localStorage.getItem("got") !== "true") {
      getUserDataFromServer(userId);
      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 2000);
  
      return () => clearTimeout(timeoutId);
    }
  }, []);
  
  

  

  useEffect(() => {
    if (
      autoBot &&
      currentTime - lastActivity >= 30 * 60 * 1000 &&
      lastActivity
    ) {
      const amountTime = (currentTime - lastActivity) / 1000;
      if (amountTime > 60 * 60 * 4) {
        localStorage.setItem("lastActivity", currentTime.toString());
        setAutoChangeBalance(60 * 60 * 4 * 0.0001);
        setDream(60 * 60 * 4 * 0.0001);
        setShowDream(true);
        setTimeout(() => setShowDream(false), 3000);
        setBalance((prevBalance) => prevBalance + 60 * 60 * 4 * 0.0001);
      } else {
        localStorage.setItem("lastActivity", currentTime.toString());
        setAutoChangeBalance(amountTime * 0.0001);
        setDream(amountTime * 0.0001);
        setShowDream(true);
        setTimeout(() => setShowDream(false), 3000);
        setBalance((prevBalance) => prevBalance + amountTime * 0.0001);
      }
    }
  }, [autoBot, lastActivity]);

  return (
    <div className="container">

      <div className="top-section">
        {hundred || fiveHundred ? (
          <span style={{ color: "#1C1C1F", fontSize: "15px" }}>
            Please wait...
          </span>
        ) : null}
      </div>

      <div className={`top-section2 ${showDream ? "show" : ""}`}>
        {showDream && `+${dream.toFixed(5)}⚒`}
      </div>
      <div className="middle-section">
        <img src={coinimage} alt="Coin" className="coin-icon" />
        <div className="balance">{changeBalance.toFixed(5)}</div>
      </div>

      <div className="third-section">
        <DefaultCoin />
      </div>
      <div className="bottom-section">
        <MainButton />
        {hundred && (
          <ProgressBar
            duration={
              selectedSkin == 2 ? (speed ? 2500 : 5000) : speed ? 5000 : 10000
            }
          />
        )}
        {fiveHundred && (
          <ProgressBar
            duration={
              selectedSkin == 2 ? (speed ? 2500 : 5000) : speed ? 5000 : 10000
            }
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
