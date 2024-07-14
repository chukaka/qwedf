import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, BottomNavigation, BottomNavigationAction, Drawer } from '@mui/material';
import { Menu as MenuIcon, QrCode as QrCodeIcon, MonetizationOn as DollarIcon, Widgets as GridIcon, WorkHistory as ArrowsIcon, OfflineBolt as EnergyIcon, Language as GlobeIcon } from '@mui/icons-material';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import DollarPage from './DollarPage';
import GridPage from './GridPage';
import ArrowsPage from './ArrowsPage';
import EnergyPage from './EnergyPage';
import GlobePage from './GlobePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Web3.css';
import UserContext from '../context/UserContext';

const theme = createTheme({
  palette: {
    typography: {
      fontFamily: 'Nunito, sans-serif', // указываем Nunito в качестве основного шрифта
    },
    primary: {
      main: '#ffffff', // цвет активного элемента
    },
    background: {
      default: '#333',
      paper: '#444',
    },
  },
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#ffffff', // цвет активного элемента
          },
          color: 'rgba(255, 255, 255, 0.5)', // цвет неактивного элемента
        },
      },
    },
  },
});

const loadingMessages = [
  "Comparing userid", 
  "Authentication userid", 
  "Verification userid",
  "Authorization userid", 
  "Connecting" 
];


const Web3 = () => {
  const { contextData } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [dots, setDots] = useState("");
  const history = useHistory();
  const { path } = useRouteMatch(); // Получаем базовый путь для вложенных маршрутов
  const { loadWallet, setLoadWallet } = contextData;

  useEffect(() => {
    if (loadWallet) {
      const messageInterval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
      }, 800);

      const dotInterval = setInterval(() => {
        setDots((prevDots) => (prevDots.length < 10 ? prevDots + "." : ""));
      }, 80);

      const timer = setTimeout(() => {
        setLoadWallet(false);
      }, 4000); // Устанавливаем таймер на 4 секунды

      return () => {
        clearTimeout(timer);
        clearInterval(messageInterval);
        clearInterval(dotInterval);
      }; // Очищаем таймер при размонтировании компонента
    }
  }, [loadWallet, setLoadWallet]);

  const handleTabChange = (event, newValue) => {
    triggerHapticFeedback();
    setActiveTab(newValue);
    switch (newValue) {
      case 0:
        history.push(`${path}/dollar`);
        break;
      case 1:
        history.push(`${path}/grid`);
        break;
      case 2:
        history.push(`${path}/arrows`);
        break;
      case 3:
        history.push(`${path}/energy`);
        break;
      case 4:
        history.push(`${path}/globe`);
        break;
      default:
        break;
    }
  };

  const triggerHapticFeedback = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('soft');
    } else if (navigator.vibrate) {
      navigator.vibrate(50); // Для Android устройств
    }
  };

  const stakedLocal = localStorage.getItem("stakedTon")
  const stakedL = stakedLocal > 0 

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  if (loadWallet) {
    return (
      <Box
        sx={{
          height: '100vh',
          bgcolor: '#333',
          display: 'flex',
          justifyContent: 'center', // Центрируем по горизонтали
          alignItems: 'center', // Центрируем по вертикали
          color: 'white',
          position: 'relative', // Для абсолютного позиционирования dots
        }}
      >
        <Typography sx={{ fontSize: "20px", color: "#D5A9D9", textAlign: "center" }}>
          {loadingMessages[currentMessageIndex]}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: 'absolute', // Абсолютное позиционирование для dots
            left: '50%', // Размещаем по центру по горизонтали
            transform: 'translateX(-50%)',
            marginTop: "10px",
            color: "grey", // Корректируем положение на половину ширины с учетом абсолютного позиционирования
          }}
        >
          {dots}
        </Typography>
      </Box>
    );
  }
  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'white' }}>
          <Switch>
            <Route path={`${path}/dollar`} component={DollarPage} />
            <Route path={`${path}/grid`} component={GridPage} />
            <Route path={`${path}/arrows`} component={ArrowsPage} />
            <Route path={`${path}/energy`} component={EnergyPage} />
            <Route path={`${path}/globe`} component={GlobePage} />
            <Route path={path} exact component={DollarPage} />
          </Switch>
        </Box>

        <BottomNavigation
      value={activeTab}
      onChange={handleTabChange}
      sx={{ bgcolor: 'background.paper', position: 'fixed', bottom: 0, width: '100%', paddingBottom: '20px' }}
    >
      <BottomNavigationAction
        label="Account"
        icon={<DollarIcon sx={{ fontSize: 22 }} />} // Увеличить размер иконки
        sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '0.1rem' }, paddingTop: "10px" }} // Увеличить размер лейбла
      />
      <BottomNavigationAction
        label="NFT"
        icon={<GridIcon sx={{ fontSize: 22 }} />}
        sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '0.1rem' }, paddingTop: "10px" }}
      />
      <BottomNavigationAction
        label="Stacking"
        icon={<ArrowsIcon sx={{ fontSize: 22, color: stakedL ? "lightgreen" : 'rgba(255, 255, 255, 0.5)'}} />}
        sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '0.1rem' }, paddingTop: "10px" }}
      />
      <BottomNavigationAction
        label="Activity"
        icon={<EnergyIcon sx={{ fontSize: 22 }} />}
        sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '0.1rem' }, paddingTop: "10px" }}
      />
      <BottomNavigationAction
        label="Browser"
        icon={<GlobeIcon sx={{ fontSize: 22 }} />}
        sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '0.1rem' }, paddingTop: "10px" }}
      />
    </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
};

export default Web3;
