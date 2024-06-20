import React, { useState, useEffect, useRef } from 'react';
import { InputAdornment, IconButton, Box, Typography, Paper, Switch, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel  } from '@mui/material';
import { SettingsSuggest as SettingArrow, Person2 as Person2Icon, Abc as AbcIcon, RemoveCircle as Secret3, VisibilityOff as Secret2, HistoryEdu as Secret1, Key as Secret, ExpandMore as ExpandMoreIcon, Close as CloseIcon, ContentCopy as CircleIcon, ToggleOn as PlaylistAddIcon, AttachMoney as AttachMoneyIcon, Settings as SettingsIcon, QrCode as QrCodeIcon, ArrowForwardIos as ArrowForwardIcon, ArrowBackIos as ArrowBackIcon, Add as AddIcon, Telegram as TelegramIcon, WorkHistory as SwapHorizontalCircleIcon } from '@mui/icons-material';
import ImSucces from "./purple.png";
import DefiMeteora from "./meteora.png";
import ImgMeteora from "./meteoraImg.jpg";
import DefiRuffle from "./raffle.png";
import ImgRuffle from "./raffleImg.png";
import DefiStarAtlas from "./staratlas.png";
import ImgStarAtlas from "./staratlasImg.png";
import DefiParcl from "./parcl.jpeg";
import ImgParcl from "./parclImg.jpg";
import DefiWhales from "./whales.webp";
import ImgWhales from "./whalesImg.png";
import DefiAtlas3 from "./atlas3.png";
import ImgAtlas3 from "./atlas3Img.png";
import DefiDeBridge from "./debridge.jpg";
import ImgDeBridge from "./debridgeImg.png";
import DefiDeMooar from "./mooar.png";
import ImgDeMooar from "./mooarImg.png";
import ImgJupiter from "./jupiter.jpg";
import ImgPump from "./pumpfun.png";
import ImgRaydium from "./raydium.webp";
import ImgSunflower from "./sunflowerland.png";
import SearchIcon from '@mui/icons-material/Search';

const GlobePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const browserMeteora = () => {
    window.location.href = 'https://app.meteora.ag/?utm_source=phantom&utm_medium=featured';
};
  const browserRaffle = () => {
    window.location.href = 'https://rafffle.famousfoxes.com/?utm_source=phantom&utm_medium=featured';
};
  const browserStarAtlas = () => {
    window.location.href = 'https://play.staratlas.com/?utm_source=phantom&utm_medium=featured';
};
  const browserParcle = () => {
    window.location.href = 'https://app.parcl.co/?utm_source=phantom&utm_medium=featured';
};
  const browserWhales = () => {
    window.location.href = 'https://pro.whales.market/?utm_source=phantom&utm_medium=featured';
};
  const browserAtlas3 = () => {
    window.location.href = 'https://atlas3.io/?utm_source=phantom&utm_medium=featured';
};
  const browserDeBridge = () => {
    window.location.href = 'https://app.debridge.finance/?utm_source=phantom&utm_medium=featured';
};
  const browserMooar = () => {
    window.location.href = 'https://mooar.com/?utm_source=phantom&utm_medium=featured';
};
  const browserJupiter = () => {
    window.location.href = 'https://jup.ag/ru/infra';
};
  const browserPump = () => {
    window.location.href = 'https://pump.fun/';
};
  const browserRay = () => {
    window.location.href = 'https://raydium.io/swap/';
};
  const browserSun = () => {
    window.location.href = 'https://sunflower-land.com/';
};

  const items = [
    { id: 1, backgroundImage: `url(${DefiMeteora})`, logo: ImgMeteora, text1: "Meteora", text2: "DeFi", method: browserMeteora },
    { id: 2, backgroundImage: `url(${DefiRuffle})`, logo: ImgRuffle, text1: "Raffle", text2: "Другое", method: browserRaffle },
    { id: 3, backgroundImage: `url(${DefiStarAtlas})`, logo: ImgStarAtlas, text1: "StarAtlas", text2: "Игры", method: browserStarAtlas },
    { id: 4, backgroundImage: `url(${DefiParcl})`, logo: ImgParcl, text1: "Parcl", text2: "DeFi", method: browserParcle },
    { id: 5, backgroundImage: `url(${DefiWhales})`, logo: ImgWhales, text1: "Whales", text2: "DeFi", method: browserWhales },
    { id: 6, backgroundImage: `url(${DefiAtlas3})`, logo: ImgAtlas3, text1: "Atlas3", text2: "Общество", method: browserAtlas3 },
    { id: 7, backgroundImage: `url(${DefiDeBridge})`, logo: ImgDeBridge, text1: "deBridge", text2: "Перенос", method: browserDeBridge },
    { id: 8, backgroundImage: `url(${DefiDeMooar})`, logo: ImgDeMooar, text1: "MOOAR", text2: "Платформа", method: browserMooar },
  ];

  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#444',
          padding: 2,
          display: 'flex',
          alignItems: 'center', justifyContent: 'space-between' 
          

        }}
      >
          <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={ImSucces} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
        <TextField
          placeholder="Найдите или введите URL"
          variant="outlined"
          size='small'
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            borderRadius: "8px",
            backgroundColor: '#555',
            width: '86%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              '& input': {
                color: '#222',
                padding: '8px 1px',
                height: 'auto',
              },
              '& fieldset': {
                borderColor: '#222',
              },
              '&:hover fieldset': {
                borderColor: '#777',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'white',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px' }}>
                <Typography variant="body1" sx={{ fontSize: '18px', color: 'white', fontWeight: "bold" }}>Сайты</Typography>
              </Box>
    <Box sx={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>
    {items.map(item => (
        <Box onClick={item.method}
          sx={{
            position: 'relative',
            width: '150px',
            height: '150px',
            backgroundImage: item.backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: "15px",
            marginRight: '10px',
            flex: '0 0 auto', // Fixes width to 100px and prevents shrinking
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '35%',
              borderRadius: "0 0 15px 15px",
              background: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black
              backdropFilter: 'blur(2px)', // Blur effect
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px',
              boxSizing: 'border-box',
            }}
          >
            <Box>
            <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>{item.text1}</Typography>
            <Typography sx={{ color: '#999', fontSize: '14px', marginLeft: '10px', fontWeight: 'bold' }}>{item.text2}</Typography>
            </Box>
            
            <Box
              component="img"
              src={item.logo}
              alt="icon"
              sx={{ width: '43px', height: '43px', borderRadius: "25%", marginTop: "-25px",marginRight: "10px" }}
            />
          </Box>
        </Box>
         ))}
    </Box>
    {/* Ничего не найдено */}
    {searchQuery && (
      <Paper 
        sx={{ 
          position: 'fixed', 
          color: "white", 
          bottom: 0, 
          left: 0, 
          right: 0, 
          top: '73px', 
          bgcolor: '#333', 
          padding: '0px', 

          zIndex: 1200, 
          animation: 'slide-up 0.3s ease-in-out' 
        }}
      >
        <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 15px' }}>
                <Typography variant="body1" sx={{ fontSize: '18px', color: 'grey' }}>Ничего не найдено</Typography>
              </Box>
      </Paper>
    )}


    <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px' }}>
                <Typography variant="body1" sx={{ fontSize: '18px', color: 'white', fontWeight: "bold" }}>Популярные</Typography>
              </Box>
              <Popular image={ImgJupiter} text1Left="Jupiter" symbol="1." text2Left="DeFi" method={browserJupiter} />
              <Popular image={ImgPump} text1Left="pump.fun" symbol="2." text2Left="DeFi" method={browserPump} />
              <Popular image={ImgRaydium} text1Left="Raydium" symbol="3." text2Left="DeFi" method={browserRay} />
              <Popular image={ImgSunflower} text1Left="Sunflower Land" symbol="4." text2Left="Игры" method={browserSun} />
    </Box>
  );
};

const Popular = ({ image, text1Left, text2Left, method, symbol}) => (
  <Box onClick={method} sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2,  borderRadius: '12px', mt: 1, margin: "10px" }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mr: 2  }}>
        <Typography variant="body2" sx={{ fontSize: '14px', color: 'gray' }}>{symbol}</Typography>
      </Box>
    <Box sx={{ width: '40px', height: '40px', borderRadius: '25%', overflow: 'hidden', mr: 2 }}>
      <img src={image} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ fontSize: '14px', color: 'white', fontWeight: "bold" }}>{text1Left}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ fontSize: '14px', color: 'gray' }}>{text2Left}</Typography>
      </Box>
    </Box>
  </Box>
);

export default GlobePage;

