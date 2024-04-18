import axios from "axios";

const postDataToServer = async (userData) => {
  try {
    const response = await axios.post("https://repo-nyqh.onrender.com/api/user-data/", userData);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

const sendUserDataToServer = async () => {
  const userId = localStorage.getItem("userId");
  const balance = localStorage.getItem("balance");
  const clickedKick = localStorage.getItem("clickedKick");
  const clickedPublic = localStorage.getItem("clickedPublic");
  const dogSkinP = localStorage.getItem("dogSkinP");
  const legendarySkinP = localStorage.getItem("legendarySkinP");
  const lastActivity = localStorage.getItem("lastActivity");
  const selectedSkin = localStorage.getItem("selectedSkin");
  const autoBot = localStorage.getItem("autoBot");
  const bust = localStorage.getItem("bust");
  const bonus = localStorage.getItem("bonus");
  const speed = localStorage.getItem("speed");

  const userData = {
    userId: userId,
    balance: balance,
    clickedKick: clickedKick,
    clickedPublic: clickedPublic,
    dogSkinP: dogSkinP,
    legendarySkinP: legendarySkinP,
    lastActivity: lastActivity,
    selectedSkin: selectedSkin,
    autoBot: autoBot,
    bust: bust,
    bonus: bonus,
    speed: speed
  };

  if (userData) {
    try {
      await postDataToServer(userData);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  } else {
    console.log("No user data found in local storage");
  }
};

export default sendUserDataToServer;
