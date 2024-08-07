import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Box, Typography, Paper, Switch, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel  } from '@mui/material';
import { SettingsSuggest as SettingArrow, Person2 as Person2Icon, Abc as AbcIcon, RemoveCircle as Secret3, VisibilityOff as Secret2, HistoryEdu as Secret1, Key as Secret, ExpandMore as ExpandMoreIcon, Close as CloseIcon, ContentCopy as CircleIcon, ToggleOn as PlaylistAddIcon, AttachMoney as AttachMoneyIcon, Settings as SettingsIcon, QrCode as QrCodeIcon, ArrowForwardIos as ArrowForwardIcon, ArrowBackIos as ArrowBackIcon, Add as AddIcon, Telegram as TelegramIcon, WorkHistory as SwapHorizontalCircleIcon } from '@mui/icons-material';
import ImSucces from "./succes.png";
import ImError from "./errorinfo.png";
import axios from 'axios';


const EnergyPage = () => {
  const [stakingCrypto, setStakingCrypto] = useState(false);
  const [stakingClaim, setStakingClaim] = useState(false);
  const [stakingDots, setStakingDots] = useState(false);
  const [menuChecked11, setMenuChecked11] = useState(false);
  const [menuChecked22, setMenuChecked22] = useState(false);
  const [isLoadingArrow, setIsLoadingArrow] = useState(false);
  const [priceTon, setPriceTon] = useState("0");
  const [earnedToncoin, setEarnedToncoin] = useState(0);
  const [gettedFirst, setGettedFirst] = useState(0);
  const [gettedSecond, setGettedSecond] = useState(0);


  const triggerHapticFeedback = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    } else if (navigator.vibrate) {
      navigator.vibrate(50); // Для Android устройств
    }
  };

  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  const timeInLocal = localStorage.getItem("initialTimestamp")

  const toncoinBalance = localStorage.getItem("tonBalance");
  const toncoinStaked = parseFloat(localStorage.getItem("stakedTon") || 0).toFixed(6);
  const priceInSend2 = priceTon ? (toncoinStaked * priceTon).toFixed(6) : 'N/A';
  const earnedLocal = parseFloat(localStorage.getItem('earnedToncoin') || 0).toFixed(6);




  const handleCheckedToggle11 = () => {
    setMenuChecked11(!menuChecked11);
  };
  const handleCheckedToggle22 = () => {
    setMenuChecked22(!menuChecked22);
  };

  const showLoading = (callback) => {
    setIsLoadingArrow(true);
    setTimeout(() => {
      setIsLoadingArrow(false);
      callback();
    }, 2000);
  };

  const infoDots = () => {
    triggerHapticFeedback()
    setStakingDots(!stakingDots);
  };  

  const infoClaim = () => {
    showLoading(() => {
      triggerHapticFeedback();
      if (timeInLocal) {
        localStorage.setItem('initialTimestamp', timestamp);
      }
      const tonGetted = parseFloat(toncoinBalance) + parseFloat(earnedLocal)
      localStorage.setItem("tonBalance", tonGetted)
      localStorage.setItem('earnedToncoin', 0);
      setGettedFirst(earnedLocal)
      setEarnedToncoin(0)
      setStakingClaim(!stakingClaim);
    });
  };

  const infoCrypto = () => {
    showLoading(() => {
      triggerHapticFeedback();
      const tonGetted2 = parseFloat(toncoinBalance) + parseFloat(toncoinStaked)
      setGettedSecond(toncoinStaked)
      localStorage.setItem("tonBalance", tonGetted2);
      localStorage.setItem("stakedTon", 0);
      localStorage.removeItem('initialTimestamp');
      setStakingCrypto(!stakingCrypto);
    });
  };  
  const infoClaim2 = () => {
    triggerHapticFeedback()
    setStakingClaim(!stakingClaim);
  };  

  const infoCrypto2 = () => {
    triggerHapticFeedback()
    setStakingCrypto(!stakingCrypto);
  }; 

  const formatPrice = (price) => {
    // Преобразуем строку в число, если она не является числом, вернем её без изменений
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return price; // если price не число, возвращаем его без изменений
    }
  
    return numericPrice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd');
        setPriceTon(response.data['the-open-network'].usd);
      } catch (error) {
        console.error('Error fetching the prices:', error);
      }
    };

    fetchPrices();

    const interval = setInterval(fetchPrices, 45000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    const interestRate = 0.0000016; // 0.0000016%
  
    // Получаем текущий таймстемп и таймстемп из localStorage
    const initialTimestamp = localStorage.getItem('initialTimestamp');
  
    // Функция для обновления заработанного количества TONCOIN
    const updateToncoin = () => {
      const now = new Date().getTime();
      const startTimestamp = localStorage.getItem('initialTimestamp');
      if (startTimestamp) {
        const elapsedTime = (now - startTimestamp) / 1000; // в секундах
        const earned = elapsedTime * toncoinStaked * interestRate;
        setEarnedToncoin(earned);
        localStorage.setItem('earnedToncoin', earned);
      }
    };
  
    // Проверяем наличие initialTimestamp перед выполнением кода
    if (initialTimestamp) {
      // Обновляем TONCOIN при первом рендере
      updateToncoin();
  
      // Устанавливаем интервал для обновления каждую секунду
      const interval = setInterval(updateToncoin, 1000);
  
      // Очищаем интервал при размонтировании компонента
      return () => clearInterval(interval);
    }
  }, []);
  

  

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          backgroundColor: "#444",
          padding: 1.5,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="white">
          Стейкинг
        </Typography>
       
        <SettingArrow onClick={infoDots} sx={{ position: "absolute", right: 10, top: 10 }}/>
      </Box>
      <Box sx={{borderRadius: "12px", bgcolor: "#111", margin: "10px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', padding: '5px',}}>
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'space-between', margin: "10px 25px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "12px", textOverflow: 'ellipsis', color: "grey"}}>
                Общие активы стейкинга
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'left', margin: "0 25px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "60px", textOverflow: 'ellipsis', color: "white", fontWeight: "bold"}}>
                {toncoinStaked}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "33px",textOverflow: 'ellipsis', color: "#D5A9D9", fontWeight: "bold" }}>
                TON
              </Typography>
            </Box>
          </Box>
         
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'space-between', margin: "0 25px 10px 25px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "12px",textOverflow: 'ellipsis', color: "grey"}}>
              ≈{formatPrice(priceInSend2)}
              </Typography>
            </Box>
           
          </Box>

          
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'space-between', margin: "10px 25px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "12px",textOverflow: 'ellipsis', color: "grey"}}>
                Общая доходность
              </Typography>
            </Box>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "12px",textOverflow: 'ellipsis', color: "grey"}}>
                Доход за 24 часа
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'space-between', margin: "10px 25px 0 25px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "12px",textOverflow: 'ellipsis', color: "white"}}>
               {earnedLocal} TON
              </Typography>
            </Box>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "12px",textOverflow: 'ellipsis', color: "white"}}>
             {earnedLocal} TON
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ alignItems: "center", justifyContent: "center", borderBottom: '10px solid rgba(0, 0, 0, 0)', width: "66%" }} />
          </Box>
          
      </Box>

        
      <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'space-between', margin: "15px 15px 0 15px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "15px",textOverflow: 'ellipsis', color: "white"}}>
              Забрать прибыль
              </Typography>
            </Box>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "15px",textOverflow: 'ellipsis', color: "white"}}>
              Забрать вложения
              </Typography>
            </Box>
          </Box>
     
        <Box sx={{display: "flex", textAlign: 'center', justifyContent: 'space-evenly', marginTop: "5px"}}>
          
        <Box onClick={infoClaim} sx={{borderRadius: "50px", bgcolor: "#444", margin: "10px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '5px',}}>
         
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'left', margin: "0 25px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "20px", textOverflow: 'ellipsis', color: "white", fontWeight: "bold"}}>
                {earnedLocal}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "20px",textOverflow: 'ellipsis', color: "#D5A9D9", fontWeight: "bold" }}>
                TON
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box onClick={infoCrypto} sx={{borderRadius: "50px", bgcolor: "#444", margin: "10px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '5px',}}>
         
          <Box sx={{ display: "flex", textAlign: 'center', justifyContent: 'left', margin: "0 25px" }}>
            <Box>
              <Typography variant="h7" sx={{ fontSize: "20px", textOverflow: 'ellipsis', color: "white", fontWeight: "bold"}}>
                Unstaking
              </Typography>
            </Box>
          
          </Box>
        </Box>
      
        </Box>

        

      
      

      {stakingClaim && (
        <Paper
          sx={{
            position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '55%', bgcolor: '#222', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1250, borderRadius: '40px 40px 0 0', animation: 'slide-up 0.3s ease-in-out'
          }}
        >
          <Box
            onClick={infoClaim2}
            sx={{ height: '30px', bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '40px 40px 0 0', marginLeft: '10px', padding: "17px" }}
          >
            <CloseIcon />
          </Box>
          <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={ImSucces} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                </Box>
          <Box 
            sx={{ bgcolor: '#222',  alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ margin: "5px", fontSize: '30px', color: 'lightgreen' }}>
              Успешно 
            </Typography>
            <Typography sx={{ marginLeft: "5px", fontSize: '18px', color: 'white' }}>
              {gettedFirst} TON отправлены на ваш счет
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={infoClaim2}
            >
              Готово
            </Button>
          </Box>
        </Paper>
      )}

      {stakingCrypto && (
              <Paper
                sx={{
                  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '55%', bgcolor: '#222', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1250, borderRadius: '40px 40px 0 0', animation: 'slide-up 0.3s ease-in-out'
                }}
              >
                <Box
                  onClick={infoCrypto2}
                  sx={{ height: '30px', bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '40px 40px 0 0', marginLeft: '10px', padding: "17px" }}
                >
                  <CloseIcon />
                </Box>
                <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={ImSucces} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                      </Box>
                <Box 
                  sx={{ bgcolor: '#222',  alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ margin: "5px", fontSize: '30px', color: 'lightgreen' }}>
                     Успешно
                  </Typography>
                  <Typography sx={{ marginLeft: "5px", fontSize: '18px', color: 'white' }}>
                  {gettedSecond} TON вернулись на ваш счет
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
                  <Button
                    variant="contained"
                    style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
                    onClick={infoCrypto2}
                  >
                    Готово
                  </Button>
                </Box>
              </Paper>
            )}

            {stakingDots && (
              <Paper
                sx={{
                  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '65%', bgcolor: '#222', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1250, borderRadius: '40px 40px 0 0', animation: 'slide-up 0.3s ease-in-out'
                }}
              >
                <Box
                  onClick={infoDots}
                  sx={{ height: '30px', bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '40px 40px 0 0', marginLeft: '10px', padding: "17px" }}
                >
                  <CloseIcon />
                </Box>
                <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '18px', color: 'white', fontWeight: "bold" }}>Настройки стейкинга</Typography>
              </Box>

              <Box  sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
              <Typography variant="body1" sx={{ fontSize: '12px', flex: 1,  color: 'white' }}>Автоматически забирать прибыль в в 03:00 </Typography>
              <Switch
                checked={menuChecked11}
                onChange={handleCheckedToggle11}
                color="primary"
              />
            </Box>
           
            <Box  sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
              <Typography variant="body1" sx={{ fontSize: '12px', flex: 1, color: 'white' }}>Забрать TON по окончанию акции</Typography>
              <Switch
                checked={menuChecked22}
                onChange={handleCheckedToggle22}
                color="primary"
              />
            </Box>
            <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
                <Typography variant="body1" sx={{ fontSize: '12px', color: 'grey' }}>Забрать TON автоматически при снижении APY ставки до 7.68%</Typography>
              </Box>
            
            
                
              </Paper>
            )}
            {isLoadingArrow && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Loading...</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default EnergyPage;