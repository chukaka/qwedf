import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Box, Typography, Paper, Switch, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel } from '@mui/material';
import ImUsd from "./tether-usdt-logo.png";
import { Person2 as Person2Icon, Abc as AbcIcon, RemoveCircle as Secret3, VisibilityOff as Secret2, HistoryEdu as Secret1, Key as Secret, ExpandMore as ExpandMoreIcon, Close as CloseIcon, ContentCopy as CircleIcon, ToggleOn as PlaylistAddIcon, AttachMoney as AttachMoneyIcon, Settings as SettingsIcon, QrCode as QrCodeIcon, ArrowForwardIos as ArrowForwardIcon, ArrowBackIos as ArrowBackIcon, Add as AddIcon, Telegram as TelegramIcon, WorkHistory as SwapHorizontalCircleIcon } from '@mui/icons-material';

const EnergyPage = () => {
  const [energyInfo, setEnergyInfo] = useState(false);
  const [hidenElement, setHidenElement] = useState(false);
  const [hidenElementTether, setHidenElementTether] = useState(false);

  const triggerHapticFeedback = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    } else if (navigator.vibrate) {
      navigator.vibrate(50); // Для Android устройств
    }
  };

  const infoRecent = () => {
    triggerHapticFeedback();
    setEnergyInfo(!energyInfo);
  };
  
  const toggleElement = () => {
    triggerHapticFeedback();
    setEnergyInfo(false);
    setHidenElement(!hidenElement);
  };

  const toggleElementTether = () => {
    triggerHapticFeedback();
    setHidenElementTether(!hidenElementTether);
  };

  const balanceUSDT = localStorage.getItem("usdtBalance");
  const formattedBalanceUSDT = balanceUSDT
    ? parseFloat(balanceUSDT).toFixed(2)
    : null;

  return (
    <Box>
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
          Недавние действия
        </Typography>
        <Typography onClick={infoRecent}
          variant="h5"
          color="white"
          sx={{ position: "absolute", right: 10, top: 2 }}
        >
          ...
        </Typography>
      </Box>
      
      
        <Typography sx={{ textAlign: 'center', color: 'grey', marginTop: '100px', fontSize: '18px' }}>
          Нет недавних действий
        </Typography>
      


      {energyInfo && (
        <Paper 
          sx={{ 
            position: 'fixed',color: "white",bottom: 0,left: 0,width: '100%',height: '25%',bgcolor: '#222',padding: '0px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)',zIndex: 1200,borderRadius: '40px 40px 0 0',animation: 'slide-up 0.3s ease-in-out' 
          }}
        >
          <Box 
            onClick={infoRecent} 
            sx={{height: '30px',bgcolor: '#222',display: 'flex',alignItems: 'center',justifyContent: 'left',borderRadius: '40px 40px 0 0',marginLeft: '10px',padding: "17px"}}
          >
            <CloseIcon />
          </Box>
          
          <Box onClick={toggleElement}
            sx={{bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Secret2 />
            <Typography sx={{ marginLeft: "15px", fontSize: '18px', color: 'white' }}>
              Показать скрытые действия
            </Typography>
          </Box>
        </Paper>
      )}
      {/* енерджи скрыты */}
      {hidenElement && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '100%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleElement} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Typography sx={{ color: 'grey', fontSize: '18px', textAlign: "center", marginTop: '100px' }}>Нет скрытых действий</Typography>
        </Paper>
      )}
      {hidenElementTether && (
        <Paper sx={{  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '100%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleElementTether} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px" }}>
            <Box sx={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={ImUsd} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center', justifyContent: 'center', marginTop: "30px" }}>
            <Typography sx={{ color: 'lightgreen', fontSize: '40px', fontWeight: "bold" }}>+{formattedBalanceUSDT} USDT</Typography>
            <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold" }}>Дата</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white', fontWeight: "bold" }}>Jun 19, 2024 в 10:51 am</Typography>
              </Box>
              <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold" }}>Статус</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'lightgreen', fontWeight: "bold" }}>Успешно</Typography>
              </Box>
              <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold" }}>Откуда</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white', fontWeight: "bold" }}>0xA6...d1dV</Typography>
              </Box>
              <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold" }}>Сеть</Typography>                
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white', fontWeight: "bold" }}>Polygon (Pos)</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default EnergyPage;
