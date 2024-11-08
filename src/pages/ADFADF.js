import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Box, Typography, Paper, Switch, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel } from '@mui/material';
import ImUsd from "./tether-usdt-logo.png";
import { Payments as Payment, Person2 as Person2Icon, Abc as AbcIcon, RemoveCircle as Secret3, VisibilityOff as Secret2, HistoryEdu as Secret1, Key as Secret, ExpandMore as ExpandMoreIcon, Close as CloseIcon, ContentCopy as CircleIcon, ToggleOn as PlaylistAddIcon, AttachMoney as AttachMoneyIcon, Settings as SettingsIcon, QrCode as QrCodeIcon, ArrowForwardIos as ArrowForwardIcon, ArrowBackIos as ArrowBackIcon, Add as AddIcon, Telegram as TelegramIcon, WorkHistory as SwapHorizontalCircleIcon, WindowRounded } from '@mui/icons-material';
import { useSwipeable } from "react-swipeable";

const EnergyPage = () => {
  const [energyInfo, setEnergyInfo] = useState(false);
  const [hidenElement, setHidenElement] = useState(false);
  const [hidenElementTether, setHidenElementTether] = useState(false);
  const [valueTether, setValueTether] = useState('');
  const [checkAddress, setCheckAddress] = useState('UQAgRV8-JTlsOqxWSQj7qitnAoxqsMkCGa824S4LBv-lT_Y8')
  const [inputValueTether, setInputValueTether] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(false);
  const [ziped, setZiped] = useState(false);
  const [pageIndex, setPageIndex] = useState(0); // индекс страницы

  useEffect(() => {
    const initTether = localStorage.getItem('initTether5');
    setValueTether(initTether)
  }, []);

  // Проверка валидности адреса
  useEffect(() => {
    setIsValidAddress(inputValueTether.startsWith('EQ') || inputValueTether.startsWith('UQ') && inputValueTether.length === 48);
  }, [inputValueTether]);

  const copyToClipboard = async () => {
    triggerHapticFeedback()
    try {
      await navigator.clipboard.writeText(checkAddress);
      setZiped(true);
    
      // Таймаут для возврата значения ziped к false через 3 секунды
      setTimeout(() => {
        setZiped(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to copy address:', error);
    }
  };

  // Функция вставки текста из буфера обмена
  const handlePasteFromClipboard = async () => {
    triggerHapticFeedback()
    try {
      const text = await navigator.clipboard.readText();
      setInputValueTether(text);
    } catch (error) {
      console.error("Ошибка при чтении буфера обмена:", error);
    }
  }

  const formatAddress = (address) => {
    if (address.length > 12) {
      return `${address.slice(0, 4)}...${address.slice(-4)}`;
    }
    return address;
  };

  const zipIt = () => {
    setValueTether(inputValueTether);
    triggerHapticFeedback()
    localStorage.setItem("initTether5", inputValueTether);
  };
  
  const unzipIt = () => {
    triggerHapticFeedback()
    localStorage.removeItem("initTether5");
    setValueTether('');
  };

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

  const handleSwipeLeft = () => {
    if (pageIndex < 1) setPageIndex(pageIndex + 1); // переходим к следующей странице
  };

  const handleSwipeRight = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1); // возвращаемся на предыдущую страницу
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });


  return (
    <Box >
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
      
      {!valueTether && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Typography sx={{ textAlign: 'left', color: 'grey',  fontSize: '18px', width: '80%' }}>
          1.Привяжите адрес 
        </Typography>
        
        <Typography sx={{ textAlign: 'center', color: 'grey', marginTop: '20px', fontSize: '9px', width: '80%' }}>
          Кросс-интеграция Wallet с вашим кошельком. Получите доступ к вашим средствам на Wallet в любом другом удобном крипто-кошельке. Для аутентификации адреса используйте исключительно The Open Network (TON). 
        </Typography>
        </Box>
      )}


      {valueTether && (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
       <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
       <Payment />
        <Box
          sx={{
            borderRadius: "8px",
            backgroundColor: '#333',
            width: '90%',
            padding: '10px',
            textAlign: 'center',
            color: 'white',
            fontSize: '22px',
          }}
        >
          {formatAddress(valueTether)}
        </Box>
          </Box>
        {/* Кнопка для вставки из буфера обмена */}
        <Button onClick={unzipIt} variant="contained" sx={{ mt: 2, width: '80%' }}>
         Изменить адрес
        </Button>

       
      </Box>)}
      {!valueTether && (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* Инпут, который не вызывает клавиатуру */}
        <TextField
          value={inputValueTether}
          onChange={(e) => setInputValueTether(e.target.value)}
          placeholder="Вставьте адрес"
          InputProps={{ readOnly: true }} // Инпут только для чтения
          sx={{
            borderRadius: "8px",
            backgroundColor: '#555',
            width: '80%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& input': {
                color: '#999',
                padding: '5px 5px',
                height: 'auto',
                fontSize: '9.5px',
                justifyContent: 'center',
                textAlign: 'center',
              },
              '& fieldset': {
                borderColor: '#555',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#999',
              fontSize: '15px'
            },
          }}
        />

        {/* Кнопка для вставки из буфера обмена */}
        <Button onClick={inputValueTether && isValidAddress ? zipIt : handlePasteFromClipboard} variant="contained" sx={{ mt: 2, width: '80%' }}>
         {inputValueTether && isValidAddress ? "Привязать" : " Вставить"}
        </Button>

         {!isValidAddress && inputValueTether && (
          <Typography color="#f64b3c" sx={{ marginTop: '10px', width: '80%',fontSize: '9.5px',
            justifyContent: 'center',
            textAlign: 'center', }}>
            Используйте строго адрес сети TON
          </Typography>
        )}
      </Box>)}

      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Typography sx={{ textAlign: 'left', color: 'grey',  fontSize: '18px', width: '80%' }}>
          2.Выполните транзакцию 
        </Typography>
        
        <Typography sx={{ textAlign: 'center', color: 'grey', marginTop: '20px', fontSize: '9px', width: '80%' }}>
          Скопируйте адрес размещенный ниже. Выполните транзакцию в размере 1.00 TON. Для успешной интеграции используйте исключительно The Open Network (TON). 
        </Typography>
        </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* Инпут, который не вызывает клавиатуру */}
        <TextField
          value={inputValueTether}
          placeholder={checkAddress}
          InputProps={{ readOnly: true }} // Инпут только для чтения
          sx={{
            borderRadius: "8px",
            backgroundColor: '#555',
            width: '80%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& input': {
                color: '#999',
                padding: '5px 5px',
                height: 'auto',
                fontSize: '9.5px',
                justifyContent: 'center',
                textAlign: 'center',
              },
              '& fieldset': {
                borderColor: '#555',
              },
              '&:hover fieldset': {
                borderColor: '#999',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
              fontSize: '9.5px'
            },
          }}
        />

        {/* Кнопка для вставки из буфера обмена */}
        <Button onClick={copyToClipboard} variant="contained" sx={{ mt: 2, width: '80%' }}>
         {ziped ? '✔':"Скопировать"}
        </Button>

      
      </Box>
      
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Button onClick={copyToClipboard} variant="contained" sx={{ mt: 2, width: '60%' }}>
         Проверить
        </Button>

        <Typography sx={{ textAlign: 'center', color: 'grey', marginTop: '20px', fontSize: '9px', width: '80%' }}>
          Кросс-интеграция Wallet с вашим кошельком. Получите доступ к вашим средствам на Wallet в любом другом удобном крипто-кошельке. Для аутентификации адреса используйте исключительно The Open Network (TON). 
        </Typography>


          </Box>
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
      
    </Box>
  );
};

export default EnergyPage;
