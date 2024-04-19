import axios from "axios";

const getUserDataFromServer = async (userId) => {
  try {
    const response = await axios.get(`https://repo-nyqh.onrender.com/api/get-user-data/${userId}/`);
    // Проверяем, были ли данные уже получены ранее
    if (localStorage.getItem("got") !== "true") {
      localStorage.setItem("balance", response.data[0].balance);
      localStorage.setItem("dogSkinP", response.data[0].dogSkinP);
      localStorage.setItem("clickedKick", response.data[0].clickedKick);
      localStorage.setItem("clickedPublic", response.data[0].clickedPublic);
      localStorage.setItem("legendarySkinP", response.data[0].legendarySkinP);
      localStorage.setItem("selectedSkin", response.data[0].selectedSkin);
      localStorage.setItem("autoBot", response.data[0].autoBot);
      localStorage.setItem("bust", response.data[0].bust);
      localStorage.setItem("bonus", response.data[0].bonus);
      localStorage.setItem("speed", response.data[0].speed);
      localStorage.setItem("got", "true");
      console.log('did it');
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export default getUserDataFromServer;
