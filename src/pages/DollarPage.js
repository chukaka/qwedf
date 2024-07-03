import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Box, Typography, Paper, Switch, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel  } from '@mui/material';  
import ImTon from "./toncoin_ton_logo_c5fb8b4302.png";
import ImNot from "./avax.png";
import ImUsd from "./tether-usdt-logo.png";
import ImMat from "./matic-logo.png";
import ImBtc from "./Bitcoin.svg.png";
import ImStk from "./ton-new.png";
import ImInfo from "./information-icon-3.png";
import ImError from "./errorinfo.png";
import ImSend from "./imagesSend.png";
import ImCoinbase from "./coinbase.png";
import ImBinance from "./binance.png";
import ImBybit from "./bybit.png";
import ImPurple from "./purple.png";
import ImWar from "./warning.png";
import { Person2 as Person2Icon, Abc as AbcIcon, RemoveCircle as Secret3, VisibilityOff as Secret2, HistoryEdu as Secret1, Key as Secret, ExpandMore as ExpandMoreIcon, Close as CloseIcon, ContentCopy as CircleIcon, ToggleOn as PlaylistAddIcon, AttachMoney as AttachMoneyIcon, Settings as SettingsIcon, QrCode as QrCodeIcon, ArrowForwardIos as ArrowForwardIcon, ArrowBackIos as ArrowBackIcon, Add as AddIcon, Telegram as TelegramIcon, WorkHistory as SwapHorizontalCircleIcon } from '@mui/icons-material';
import axios from 'axios';
import QRCode from 'qrcode.react';

const DollarPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedP, setIsCheckedP] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const [tetherBase, setTetherBase] = useState(false);
  const [toncoinBase, setToncoinBase] = useState(false);
  const [notcoinBase, setNotcoinBase] = useState(false);
  const [polygonBase, setPolygonBase] = useState(false);
  const [bitcoinBase, setBitcoinBase] = useState(false);
  const [getTetherMenu, setGetTetherMenu] = useState(false);
  const [getToncoinMenu, setGetToncoinMenu] = useState(false);
  const [getNotcoinMenu, setGetNotcoinMenu] = useState(false);
  const [getPolygonMenu, setGetPolygonMenu] = useState(false);
  const [getBitcoinMenu, setGetBitcoinMenu] = useState(false);
  const [settingsMenuOpen2, setSettingsMenuOpen2] = useState(false);
  const [settingsMenuSecret, setSettingsMenuSecret] = useState(false);
  const [settingsMenuSecretPage, setSettingsMenuSecretPage] = useState(false);
  const [settingsMenuPrivate, setSettingsMenuPrivate] = useState(false);
  const [settingsMenuPrivatePage, setSettingsMenuPrivatePage] = useState(false);
  const [settingsMenuPrivateTether, setSettingsMenuPrivateTether] = useState(false);
  const [settingsMenuPrivateToncoin, setSettingsMenuPrivateToncoin] = useState(false);
  const [settingsMenuPrivateNotcoin, setSettingsMenuPrivateNotcoin] = useState(false);
  const [settingsMenuPrivatePolygon, setSettingsMenuPrivatePolygon] = useState(false);
  const [settingsMenuPrivateBitcoin, setSettingsMenuPrivateBitcoin] = useState(false);
  const [qrCodeMenuOpen, setQrCodeMenuOpen] = useState(false);
  const [qrTether, setQrTether] = useState(false);
  const [qrToncoin, setQrToncoin] = useState(false);
  const [qrNotcoin, setQrNotcoin] = useState(false);
  const [qrPolygon, setQrPolygon] = useState(false);
  const [qrBitcoin, setQrBitcoin] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [tokenMenuOpen, setTokenMenuOpen] = useState(false);
  const [getToken, setGetToken] = useState(false);
  const [copiedSecret, setCopiedSecret] = useState(false);
  const [copiedTether, setCopiedTether] = useState(false);
  const [copiedToncoin, setCopiedToncoin] = useState(false);
  const [copiedNotcoin, setCopiedNotcoin] = useState(false);
  const [copiedPolygon, setCopiedPolygon] = useState(false);
  const [copiedBitcoin, setCopiedBitcoin] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [copied4, setCopied4] = useState(false);
  const [copied5, setCopied5] = useState(false);
  const [sendMenuBase, setSendMenuBase] = useState(false);
  const [sendMenuTether, setSendMenuTether] = useState(false);
  const [sendMenuToncoin, setSendMenuToncoin] = useState(false);
  const [sendMenuNotcoin, setSendMenuNotcoin] = useState(false);
  const [sendMenuPolygon, setSendMenuPolygon] = useState(false);
  const [sendMenuBitcoin, setSendMenuBitcoin] = useState(false);
  const [sendLastTether, setSendLastTether] = useState(false);
  const [sendLastToncoin, setSendLastToncoin] = useState(false);
  const [sendLastNotcoin, setSendLastNotcoin] = useState(false);
  const [sendLastPolygon, setSendLastPolygon] = useState(false);
  const [sendLastBitcoin, setSendLastBitcoin] = useState(false);
  const [tetherError, setTetherError] = useState(false);
  const [toncoinError, setToncoinError] = useState(false);
  const [notcoinError, setNotcoinError] = useState(false);
  const [polygonError, setPolygonError] = useState(false);
  const [bitcoinError, setBitcoinError] = useState(false);
  const [menuChecked1, setMenuChecked1] = useState(true);
  const [menuChecked2, setMenuChecked2] = useState(true);
  const [menuChecked3, setMenuChecked3] = useState(true);
  const [tokens, setTokens] = useState({
    Tether: true,
    Toncoin: true,
    Avax: true,
    Polygon: true,
    Bitcoin: true
  });

 

  const [priceUsd, setPriceUsd] = useState("0");
  const [priceTon, setPriceTon] = useState("0");
  const [priceNot, setPriceNot] = useState("0");
  const [priceMat, setPriceMat] = useState("0");
  const [priceBtc, setPriceBtc] = useState("0");

  const [inputValueTether, setInputValueTether] = useState('');
  const [inputValueToncoin, setInputValueToncoin] = useState('');
  const [inputValueToncoinTag, setInputValueToncoinTag] = useState('');
  const [inputValueNotcoin, setInputValueNotcoin] = useState('');
  const [inputValueNotcoinTag, setInputValueNotcoinTag] = useState('');
  const [inputValuePolygon, setInputValuePolygon] = useState('');
  const [inputValueBitcoin, setInputValueBitcoin] = useState('');

  const [infoTetherUp, setInfoTetherUp] = useState(false);
  const [infoStakingUp, setInfoStakingUp] = useState(false);
  const [infoDelite, setInfoDelite] = useState(false);

  const [stakingTon, setStakingTon] = useState(false);
  const [stakingTonI, setStakingTonI] = useState(false);
  const [buy, setBuy] = useState(false);
  const [sendInfo, setSendInfo] = useState(false);

  const [amountSend, setAmountSend] = useState('');
  const amountRef = useRef(null);

  useEffect(() => {
    if (amountRef.current) {
      amountRef.current.focus();
    }
  }, [sendLastTether]);

  const handleInputChangeSend = (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    setAmountSend(value || '');
  };

  const formatAddress = (address) => {
    if (address.length > 12) {
      return `${address.slice(0, 4)}...${address.slice(-4)}`;
    }
    return address;
  };

  const handleFocus = (e) => {
    setAmountSend('');
  };

  const handleBlur = (e) => {
    if (!amountSend) {
      setAmountSend('');
    }
  };
  
  const getFontSize = () => {
    const length = amountSend.length;
    if (length > 7) return '15px';
    if (length > 6) return '20px';
    if (length > 5) return '22px';
    if (length > 4) return '28px';
    if (length > 3) return '35px';
    if (length > 2) return '50px';
    return '60px';
  };

  const getFontSize2 = () => {
    const length = amountSend.length;
    if (length > 7) return '8px';
    if (length > 6) return '10px';
    if (length > 5) return '12px';
    if (length > 4) return '14px';
    if (length > 3) return '16px';
    if (length > 2) return '18px';
    return '20px';
  };

  // const webUserId = "156334"
  const webUserId = window.Telegram.WebApp.initDataUnsafe.user.id;
  const webUserFirst = window.Telegram.WebApp.initDataUnsafe.user.first_name;
  const webUserUser = window.Telegram.WebApp.initDataUnsafe.user.username;
  

  const getColor = () => {
    const amountA = parseFloat(amountSend);
    const balanceA = parseFloat(formattedBalanceUSDT);
    return amountA > balanceA ? '#ff4d4d' : 'white';
  };

  const getColor2 = () => {
    const amountA = parseFloat(amountSend);
    const balanceA = parseFloat(formattedBalanceUSDT);
    return amountA > balanceA ? '#ff4d4d' : '#555';
  };

  const getColor3 = () => {
    const amountA = parseFloat(amountSend);
    const balanceA = parseFloat(formattedBalanceBTC);
    return amountA > balanceA ? '#ff4d4d' : 'white';
  };

  const getColor4 = () => {
    const amountA = parseFloat(amountSend);
    const balanceA = parseFloat(formattedBalanceAVAX);
    return amountA > balanceA ? '#ff4d4d' : 'white';
  };

  const getColor5 = () => {
    const amountA = parseFloat(amountSend);
    const balanceA = parseFloat(formattedBalanceMATIC);
    return amountA > balanceA ? '#ff4d4d' : 'white';
  };

  const getColorAll = () => {
    const amountA = parseFloat(amountSend);
    const balanceA = parseFloat(toncoinP);
    return amountA > balanceA ? '#ff4d4d' : 'white';
  };


  const triggerHapticFeedback = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    } else if (navigator.vibrate) {
      navigator.vibrate(50); // Для Android устройств
    }
  };

  const toncoinP = "0"
  const notcoinP = "0"
  const polygonP = "0"
  const bitcoinP = "0"


  const tetherArray = [
    '0x1373961058EDDEd235a92DD30031a68C3DF2698D',
    '0x039107F28F417D449f33Aff127581Ef9a6C78456',
    '0xD34F2EfaAa40e72194c71a39cBF5ED96a8C750ff',
    '0x8EA5D9B8aF821c8Ebf36DE70ed2DB9FC9477Aafd',
    '0x4E8E3d2a77630e2181239e2e5517E9615F560e16',
    '0x65722717136a0eA9c3cBc641e603eb67ED946053',
    '0x363F27Da2D03327dd2485Cd4DE385577FC954509',
    '0x975BA021216B604A45e83176Fe082eEE2DFe2aaB',
    '0x40002A9F30941107c2B73f3311663Fa00F9FEb35',
    '0x8C24D05E46aD683861f4d7Ad49eE1CC28758156b'
    ];
    
  
  
  const getTetherArray = (userId) => {
    // Получаем последнее число из userId
    const lastDigit = userId % 10;
    return tetherArray[lastDigit];
  };

  const adressTether = getTetherArray(webUserId);
  const adressNotcoin = getTetherArray(webUserId);
  const adressPolygon = getTetherArray(webUserId);

  const toncoinArray = [
    'EQDwZyTlHSNqRhf4QlKDZwE1DqJ1n0YJHKqvyx30oDAcFqw6',
    'EQDrfjibZ00Y4tkSacF8OtCcnhJkzyw-68_9e8tNeSDzjQ05',
    'EQANnAPiY2r-laHHzAJiG4t-kgMLaN8G3fG0MTslJtwLcoq7',
    'EQDmOoxjd-48WXjuu65Ke4CA2UdYnv7Ewl7QvefkfNGne-ab',
    'EQDXY8yb_oCTozjGuExBNL-rkxMLaIvk-ueU0IGNkF8k2Sak',
    'EQDEyCvUpOhNEZglNRVD__ZfAmu6_GafZGEk8gbpQj6zutSt',
    'EQCO-kDIdlW2JEbqZUhKEwVK-Z-W04zhQIWpqhsAQCWR2qLn',
    'EQD6EQ7kViQqmsBweQXAW_AXaaR6aGdWqqEjVFR7QU0UfxCn',
    'EQBYzgPkEiKMtZozTu4PpvCC3IshcvKPnO3pnBnYExsBVGzh',
    'EQCjtPqFlP9TL0eE0VITsTKrFynsbm9a_xtxIcy15URbW-au'
    ];
    
  const getToncoinArray = (userId) => {
    // Получаем последнее число из userId
    const lastDigit = userId % 10;
    return toncoinArray[lastDigit];
  };

  const adressToncoin = getToncoinArray(webUserId)

  const bitcoinArray = [
    'bc1q4uwek7qdk2h67rszaknt9tg9xaj45gm2j985xv',
    'bc1qhugfllad5fqgvdda0hwerqukpxkqy0w8eur5q6',
    'bc1qgndu4lwzx3gt720zt3fsnptydqz9wxc5xe7pwd',
    'bc1q9t03rs059zmqkf6f3hmn00h3g3m4dnkuw3cdrq',
    'bc1qpty6n52gq7ldt8wns0vza8xse53j7shcdzxmu0',
    'bc1qnzpc4860rqxstcj5hw8825gvt5n5w0hjjhzxt7',
    'bc1qvytyhfjstvv4padkqq899cfrq45nq374dl2vjc',
    'bc1qaaxua5j0zah4640629ra5dvd9nwfdpr99wacwa',
    'bc1qvp8tpghzv9pys8ckhd3ehcpsmzumlzqna49ljl',
    'bc1qd0vwkuq7ean8948fng4gxw96q68fr55stxez58'
    ];

  const getBitcoinArray = (userId) => {
    // Получаем последнее число из userId
    const lastDigit = userId % 10;
    return bitcoinArray[lastDigit];
  };
    
  const adressBitcoin = getBitcoinArray(webUserId)

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCheckboxChangeP = (event) => {
    setIsCheckedP(event.target.checked);
  };

  const handleInputTether = (event) => {
    setInputValueTether(event.target.value);
  };

  const handleSubmitTether = () => {
    // Ваша логика для обработки введенного текста
    toggleSendLastTether()
    // Здесь вы можете сохранить значение в состояние или выполнять другие действия с ним
  };

  const handleInputToncoin = (event) => {
    setInputValueToncoin(event.target.value);
  };
  const handleInputToncoinTag = (event) => {
    setInputValueToncoinTag(event.target.value);
  };

  const handleSubmitToncoin = () => {
    // Ваша логика для обработки введенного текста
    console.log('Введенное значение:', inputValueTether);
    // Здесь вы можете сохранить значение в состояние или выполнять другие действия с ним
  };

  const handleInputNotcoin = (event) => {
    setInputValueNotcoin(event.target.value);
  };
  const handleInputNotcoinTag = (event) => {
    setInputValueNotcoinTag(event.target.value);
  };

  const handleSubmitNotcoin = () => {
    // Ваша логика для обработки введенного текста
    console.log('Введенное значение:', inputValueTether);
    // Здесь вы можете сохранить значение в состояние или выполнять другие действия с ним
  };

  const handleInputPolygon = (event) => {
    setInputValuePolygon(event.target.value);
  };

  const handleSubmitPolygon = () => {
    // Ваша логика для обработки введенного текста
    console.log('Введенное значение:', inputValueTether);
    // Здесь вы можете сохранить значение в состояние или выполнять другие действия с ним
  };

  const handleInputBitcoin = (event) => {
    setInputValueBitcoin(event.target.value);
  };

  const handleSubmitBitcoin = () => {
    // Ваша логика для обработки введенного текста
    console.log('Введенное значение:', inputValueTether);
    // Здесь вы можете сохранить значение в состояние или выполнять другие действия с ним
  };

  const CopyTether = () => {
    triggerHapticFeedback()
    navigator.clipboard
      .writeText(adressTether)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
  };

  const CopyToncoin = () => {
    triggerHapticFeedback()
    navigator.clipboard
      .writeText(adressToncoin)
      .then(() => {
        setCopied2(true);
        setTimeout(() => {
          setCopied2(false);
        }, 2000);
      });
  };

  const CopyPolygon = () => {
    triggerHapticFeedback()
    navigator.clipboard
      .writeText(adressPolygon)
      .then(() => {
        setCopied3(true);
        setTimeout(() => {
          setCopied3(false);
        }, 2000);
      });
  };

  const CopyBitcoin = () => {
    triggerHapticFeedback()
    navigator.clipboard
      .writeText(adressBitcoin)
      .then(() => {
        setCopied4(true);
        setTimeout(() => {
          setCopied4(false);
        }, 2000);
      });
  };

  const CopyNotcoin = () => {
    triggerHapticFeedback()
    navigator.clipboard
      .writeText(adressNotcoin)
      .then(() => {
        setCopied5(true);
        setTimeout(() => {
          setCopied5(false);
        }, 2000);
      });
  };

  const toggleBuyCoinbase = () => {
    triggerHapticFeedback();
    window.location.href = 'https://www.coinbase.com/login';
};
  const toggleBuyBinance = () => {
    triggerHapticFeedback();
    window.location.href = 'https://accounts.binance.com/ru-UA/login';
};
  const toggleBuyBybit = () => {
    triggerHapticFeedback();
    window.location.href = 'https://www.bybit.com/uk-UA/login';
};

  const infoTether = () => {
    setInfoTetherUp(!infoTetherUp);
  };

  const infoStaking = () => {
    setInfoStakingUp(!infoStakingUp);
  };
  const infoDelitToggle = () => {
    triggerHapticFeedback()
    setInfoDelite(!infoDelite);
  };

  const toggleBuy = () => {
    triggerHapticFeedback()
    setBuy(!buy);
  };
  const toggleStaking = () => {
    triggerHapticFeedback()
    setStakingTon(!stakingTon);
  };
  const toggleStakingI = () => {
    triggerHapticFeedback()
    setStakingTonI(!stakingTonI);
  };
  const toggleStakingTether = () => {
    triggerHapticFeedback()
    setTetherBase(false)
    setStakingTon(!stakingTon);
  };
  const toggleStakingToncoin = () => {
    triggerHapticFeedback()
    setToncoinBase(false)
    setStakingTon(!stakingTon);
  };
  const toggleStakingNotcoin = () => {
    triggerHapticFeedback()
    setNotcoinBase(false)
    setStakingTon(!stakingTon);
  };
  const toggleStakingPolygon = () => {
    triggerHapticFeedback()
    setPolygonBase(false)
    setStakingTon(!stakingTon);
  };
  const toggleStakingBitcoin = () => {
    triggerHapticFeedback()
    setBitcoinBase(false)
    setStakingTon(!stakingTon);
  };
  const toggleStakingTetherI = () => {
    triggerHapticFeedback()
    setTetherBase(false)
    setStakingTonI(!stakingTonI);
  };
  const toggleSendInfo = () => {
    triggerHapticFeedback()
    setSendInfo(!sendInfo);
  };

  const toggleStakingToncoinI = () => {
    triggerHapticFeedback()
    setToncoinBase(false)
    setStakingTonI(!stakingTonI);
  };
  const toggleStakingNotcoinI = () => {
    triggerHapticFeedback()
    setNotcoinBase(false)
    setStakingTonI(!stakingTonI);
  };
  const toggleStakingPolygonI = () => {
    triggerHapticFeedback()
    setPolygonBase(false)
    setStakingTonI(!stakingTonI);
  };
  const toggleStakingBitcoinI = () => {
    triggerHapticFeedback()
    setBitcoinBase(false)
    setStakingTonI(!stakingTonI);
  };
  const toggleSendMenuBase = () => {
    triggerHapticFeedback()
    setSendMenuBase(!sendMenuBase);
  };
  const toggleSendMenuTether = () => {
    triggerHapticFeedback()
    setInputValueTether("");
    setTetherBase(false)
    setSendMenuTether(!sendMenuTether);
  };
  const toggleSendMenuToncoin = () => {
    triggerHapticFeedback()
    setInputValueToncoin("");
    setInputValueToncoinTag("");
    setToncoinBase(false)
    setSendMenuToncoin(!sendMenuToncoin);
  };
  const toggleSendMenuNotcoin = () => {
    triggerHapticFeedback()
    setInputValueNotcoin("");
    setInputValueNotcoinTag("");
    setNotcoinBase(false)
    setSendMenuNotcoin(!sendMenuNotcoin);
  };
  const toggleSendMenuPolygon = () => {
    triggerHapticFeedback()
    setInputValuePolygon("");
    setPolygonBase(false)
    setSendMenuPolygon(!sendMenuPolygon);
  };
  const toggleSendMenuBitcoin = () => {
    triggerHapticFeedback()
    setInputValueBitcoin("");
    setBitcoinBase(false)
    setSendMenuBitcoin(!sendMenuBitcoin);
  };

  const tetherBaseMenu = () => {
    triggerHapticFeedback()
    setTetherBase(!tetherBase);
  };

  const toggleSendLastTether = () => {
    triggerHapticFeedback()
    setSendLastTether(!sendLastTether);
  };

  const toggleSendLastToncoin = () => {
    triggerHapticFeedback()
    setSendLastToncoin(!sendLastToncoin);
  };

  const toggleSendLastNotcoin = () => {
    triggerHapticFeedback()
    setSendLastNotcoin(!sendLastNotcoin);
  };

  const toggleSendLastPolygon = () => {
    triggerHapticFeedback()
    setSendLastPolygon(!sendLastPolygon);
  };

  const toggleSendLastBitcoin = () => {
    triggerHapticFeedback()
    setSendLastBitcoin(!sendLastBitcoin);
  };

  const toncoinBaseMenu = () => {
    triggerHapticFeedback()
    setToncoinBase(!toncoinBase);
  };

  const notcoinBaseMenu = () => {
    triggerHapticFeedback()
    setNotcoinBase(!notcoinBase);
  };

  const polygonBaseMenu = () => {
    triggerHapticFeedback()
    setPolygonBase(!polygonBase);
  };

  const bitcoinBaseMenu = () => {
    triggerHapticFeedback()
    setBitcoinBase(!bitcoinBase);
  };

  const toggleGetToken = () => {
    triggerHapticFeedback()
    setGetToken(!getToken);
  };
  const toggleGetTetherMenu = () => {
    triggerHapticFeedback()
    setGetTetherMenu(!getTetherMenu);
  };

  const toggleGetToncoinMenu = () => {
    triggerHapticFeedback()
    setGetToncoinMenu(!getToncoinMenu);
  };

  const toggleGetNotcoinMenu = () => {
    triggerHapticFeedback()
    setGetNotcoinMenu(!getNotcoinMenu);
  };

  const toggleGetPolygonMenu = () => {
    triggerHapticFeedback()
    setGetPolygonMenu(!getPolygonMenu);
  };

  const toggleGetBitcoinMenu = () => {
    triggerHapticFeedback()
    setGetBitcoinMenu(!getBitcoinMenu);
  };

  const toggleSettingsMenu = () => {
    triggerHapticFeedback()
    setSettingsMenuOpen(!settingsMenuOpen);
  };

  const toggleSettingsMenu2 = () => {
    triggerHapticFeedback()
    setSettingsMenuOpen2(!settingsMenuOpen2);
  };

  const toggleSettingsClose = () => {
    triggerHapticFeedback()
    setSettingsMenuSecretPage(!settingsMenuSecretPage);
    setSettingsMenuOpen(!settingsMenuOpen);
    setSettingsMenuSecret(!settingsMenuSecret);
  };
  const toggleSettingsCloseTether = () => {
    triggerHapticFeedback()
    setSettingsMenuPrivatePage(!settingsMenuPrivatePage);
    setSettingsMenuOpen(!settingsMenuOpen);
    setSettingsMenuPrivate(!settingsMenuPrivate);
    setSettingsMenuPrivateTether(!settingsMenuPrivateTether);
    
  };

  const toggleSettingsCloseToncoin = () => {
    triggerHapticFeedback()
    setSettingsMenuPrivatePage(!settingsMenuPrivatePage);
    setSettingsMenuOpen(!settingsMenuOpen);
    setSettingsMenuPrivate(!settingsMenuPrivate);
    setSettingsMenuPrivateToncoin(!settingsMenuPrivateToncoin);
    
  };

  const toggleSettingsCloseNotcoin = () => {
    triggerHapticFeedback()
    setSettingsMenuPrivatePage(!settingsMenuPrivatePage);
    setSettingsMenuOpen(!settingsMenuOpen);
    setSettingsMenuPrivate(!settingsMenuPrivate);
    setSettingsMenuPrivateNotcoin(!settingsMenuPrivateNotcoin);
    
  };

  const toggleSettingsClosePolygon = () => {
    triggerHapticFeedback()
    setSettingsMenuPrivatePage(!settingsMenuPrivatePage);
    setSettingsMenuOpen(!settingsMenuOpen);
    setSettingsMenuPrivate(!settingsMenuPrivate);
    setSettingsMenuPrivatPolygon(!settingsMenuPrivatePolygon);
    
  };

  const toggleSettingsCloseBitcoin = () => {
    triggerHapticFeedback()
    setSettingsMenuPrivatePage(!settingsMenuPrivatePage);
    setSettingsMenuOpen(!settingsMenuOpen);
    setSettingsMenuPrivate(!settingsMenuPrivate);
    setSettingsMenuPrivateBitcoin(!settingsMenuPrivateBitcoin);
    
  };

  const toggleSettingsSecret = () => {
    triggerHapticFeedback()
    setIsChecked(false)
    setSettingsMenuSecret(!settingsMenuSecret);
    
  };
  const toggleSettingsSecretPage = () => {
    triggerHapticFeedback()
    setIsChecked(false)
    setSettingsMenuSecretPage(!settingsMenuSecretPage);
  };
  const toggleSettingsPrivate = () => {
    triggerHapticFeedback()
    setIsCheckedP(false)
    setSettingsMenuPrivate(!settingsMenuPrivate);
    
  };
  const toggleSettingsPrivatePage = () => {
    triggerHapticFeedback()
    setIsCheckedP(false)
    setSettingsMenuPrivatePage(!settingsMenuPrivatePage);
  };

  const toggleSettingsPrivateTether = () => {
    triggerHapticFeedback()
    setIsCheckedP(false)
    setSettingsMenuPrivateTether(!settingsMenuPrivateTether);
  };
  const toggleSettingsPrivateToncoin = () => {
    triggerHapticFeedback()
    setIsCheckedP(false)
    setSettingsMenuPrivateToncoin(!settingsMenuPrivateToncoin);
  };
  const toggleSettingsPrivateNotcoin = () => {
    triggerHapticFeedback()
    setIsCheckedP(false)
    setSettingsMenuPrivateNotcoin(!settingsMenuPrivateNotcoin);
  };
  const toggleSettingsPrivatePolygon = () => {
    triggerHapticFeedback()
    setIsCheckedP(false)
    setSettingsMenuPrivatePolygon(!settingsMenuPrivatePolygon);
  };
  const toggleSettingsPrivateBitcoin = () => {
    triggerHapticFeedback()
    setIsCheckedP(false)
    setSettingsMenuPrivateBitcoin(!settingsMenuPrivateBitcoin);
  };

  const toggleTetherError = () => {
    triggerHapticFeedback()
    setTetherError(!tetherError);
  };
  const toggleToncoinError = () => {
    triggerHapticFeedback()
    setToncoinError(!toncoinError);
  };
  const toggleNotcoinError = () => {
    triggerHapticFeedback()
    setNotcoinError(!notcoinError);
  };
  const togglePolygonError = () => {
    triggerHapticFeedback()
    setPolygonError(!polygonError);
  };
  const toggleBitcoinError = () => {
    triggerHapticFeedback()
    setBitcoinError(!bitcoinError);
  };

  const toggleQrCodeMenu = () => {
    triggerHapticFeedback()
    setQrCodeMenuOpen(!qrCodeMenuOpen);
  };

  const toggleQrTether = () => {
    triggerHapticFeedback()
    setQrTether(!qrTether);
  };

  const toggleQrToncoin = () => {
    triggerHapticFeedback()
    setQrToncoin(!qrToncoin);
  };

  const toggleQrNotcoin = () => {
    triggerHapticFeedback()
    setQrNotcoin(!qrNotcoin);
  };

  const toggleQrPolygon = () => {
    triggerHapticFeedback()
    setQrPolygon(!qrPolygon);
  };

  const toggleQrBitcoin = () => {
    triggerHapticFeedback()
    setQrBitcoin(!qrBitcoin);
  };

  const toggleAccountMenu = () => {
    triggerHapticFeedback()
    setAccountMenuOpen(!accountMenuOpen);
  };

  const toggleTokenMenu = () => {
    triggerHapticFeedback()
    setTokenMenuOpen(!tokenMenuOpen);
  };

  const handleTokenToggle = (token) => {
    setTokens((prevTokens) => ({
      ...prevTokens,
      [token]: !prevTokens[token]
    }));
  };

  const handleCheckedToggle1 = () => {
    setMenuChecked1(!menuChecked1);
  };
  const handleCheckedToggle2 = () => {
    setMenuChecked2(!menuChecked2);
  };
  const handleCheckedToggle3 = () => {
    setMenuChecked3(!menuChecked3);
  };

  const secretPhrases = [
    ['apple', 'car', 'house', 'dog', 'cat', 'book', 'tree', 'flower', 'river', 'mountain', 'sky', 'sea'],
    ['computer', 'phone', 'table', 'chair', 'window', 'door', 'pen', 'notebook', 'lamp', 'backpack', 'keyboard', 'mouse'],
    ['bird', 'fish', 'tiger', 'lion', 'elephant', 'horse', 'rabbit', 'frog', 'snake', 'bear', 'wolf', 'fox'],
    ['pencil', 'eraser', 'sharpener', 'ruler', 'marker', 'glue', 'scissors', 'paper', 'stapler', 'clip', 'folder', 'envelope'],
    ['bread', 'milk', 'cheese', 'butter', 'yogurt', 'egg', 'fruit', 'vegetable', 'meat', 'fish', 'sugar', 'salt'],
    ['city', 'village', 'town', 'street', 'road', 'bridge', 'park', 'garden', 'market', 'shop', 'building', 'square'],
    ['doctor', 'nurse', 'teacher', 'student', 'engineer', 'architect', 'chef', 'police', 'firefighter', 'pilot', 'driver', 'soldier'],
    ['sun', 'moon', 'star', 'planet', 'galaxy', 'universe', 'comet', 'asteroid', 'meteor', 'space', 'rocket', 'satellite'],
    ['cup', 'plate', 'bowl', 'fork', 'knife', 'spoon', 'glass', 'mug', 'jug', 'bottle', 'tray', 'napkin'],
    ['football', 'basketball', 'tennis', 'cricket', 'hockey', 'golf', 'swimming', 'boxing', 'volleyball', 'rugby', 'baseball', 'badminton']
  ];
  
  
  const getUserSecretPhrase = (userId) => {
    // Получаем последнее число из userId
    const lastDigit = userId % 10;
    return secretPhrases[lastDigit];
  };

  const secretPhraseAnswer = getUserSecretPhrase(webUserId);
  const secretPhraseText = secretPhraseAnswer.join(' ');

  const privatePhrasesTether = [
    '4ef7c9d2e0452a634a76c1a6d2c0f4b9c5e4e8a1b4c3d2e1f6a4c3d5e8b6a7c1d9e0f2a4b6c7d8e9f1b3a5c7d9e0f3a4b6',
    '2a4f8c7d9e0b3c5ad1e9f4a7b8c1e3d2e5c4f7b8a6d3e1c9a2f4e7d8b6c3a1f5b7c9d2e4a6f8b3d5c7a9e0f1b3c6d8e2f4',
    '7c3d7e4b6a1f8d92e5a7f4b8c1e3d5a6c9b2f7d8a4e9c3b5a1f6d2e7a8c4b1f9d3e5a7c9b2f4d6e8a1b3c5d7f2e4a6b8c9',
    '8e1a7c5b9f4e6d38b2c7d1f5e9a4b6c3d8e2a1f9b7c4a5e3d7f2b8c6a1d9e5a4c7f1b3d5e8a9c2f4d6b1e3a5c8f2d7b9e4a6',
    '6d9e4c7b3f5a1de8b2c4a7f9d3e1a8b5c6d2e7a4f1b9c8a5e3d1f7c4b2a6d9e5a3b7c4f1d8e2a6b9c7e4f2d1b5a8c3f6d7e9',
    '1b7a3f4c1d8e56f9c3b2e4d1a7c5f2e8b6d9a4c7e3f5b1a2d6e9c4f8a1b3d5e7a9c2f4b6e1d3a5c8f7b9d4e2a6b1f5c3d8e7',
    '4c4a8b6fd7e1a9b3f5c1d4a7e8b2f6c3d5a1e9b7f4a6d3c8e2b1f9d5a4b7c3e1d6f8a2c4b9e5d1f7a3b6c2d9e4f1a8b5c7d2e6',
    '3a5b9f2d3ce8a1f4b6d5c2e9a3f8b4d1c6e7a2f9b3d5a8c4e1b7f6d2a9b1c3e5f8a4d7b9e2c1f6a3b5d8e4c2a7f9b6d1e5c3a8',
    '5b4d7a69c1e2a8b3f5c6d1e4a7f8b9d2c3e5a6b1f7d9c4e8a2b5f1d3c9e7a4b6f2d8e3a1c5b9f7a2d6c3e9b4a1f8d5c2e7b3a6',
    '3f5a3bd1e8c6a2f9d3b5e4c7a1f6b9d2c8e5a3f4b1d7c9e2a5f8d6b4e1c3a7b9f2d5e8a1c6b4f7d3a2e9b5c8f1d4a6b3e7c2f9'
  ];
  
  
  const getUserTetherPhrase = (userId) => {
    // Получаем последнее число из userId
    const lastDigit = userId % 10;
    return privatePhrasesTether[lastDigit];
  };

  const privatePhraseTether = getUserTetherPhrase(webUserId);
  
  const privatePhrasesToncoin= [
    '8f4d7e9b2c5a6e8d3b4f1a9c7e2d8b6a1f3d9e5b7c4a2f6d8e1b3c5a7d9f2e4b6c8a1f5d7e3b9c2a4f8d6e1b5c7a9f3d4e2b6',
    '5e5a8b6c3f4d1e7a9b2f5c8d3a6e1b4f9d2c7a5e3b6f1d8a4c2e7b9f3d5a1c6e2b8f4d7a3c1e9b5f6d2a8c4e1b7f3d9a5c2e6',
    '4b7c4d1e8a5f2c9b3e6d4a7f1c5e2b8d9a4f3c1e7b5d2a9f6c8e3b1d5a2f4c7e1b9d3a5f8c2e6b4d1a7f9c3e5b2d8a1f6c4e7',
    '4d9e1b6c3f5a7e2d8b4f6c9a3e1b7f4d2c5a9e8b3f1d6c2a7e4b5f3d9a1c8e6b2f7d4a3c1e9b7f2d5a6c8e1b4f9d3a2c7e5b6',
    '1c1f8a6d4e2b7f9c3a5d1e8b4f6c2a9d7e5b3f1c4a7d2e6b9f8c1a5d3e4b2f7c9a6d1e3b5f2c8a4d7e9b1f6c2a3d5e8b4f7c1',
    '1e2b7a9d1f4c8e3b5a7d9f2c1e6b4a3d5f8c2e1b7a6d9f3c4e2b1a5d7f6c9e4b3a1d8f2c7e5b9a6d1f3c5e7b4a2d9f8c6e1b2',
    '6a5f1d9b6c3e2a8f4d1b7c5a9e6f3d8b2a4c7e1b9f5d2c6a3e4b8f1d7c9a2e5b3f4d6c1a8e2b7f9d3c5a1e9b6f8d4c2a7e3b1',
    '2d3b6e1c7f4a9b2e5d3c6a8f1e4b7d9c2a5e3b6f1d8c4a7e2b9f5d1c3a6e9b4f7d2c1a5e8b3f6d9c4a1e7b2f3d5c8a9e1b4f6',
    '3b1d6a8c4e3f2b7d5a9c6e1f3b8d2a4c5e7b1f6d9c3a8e2b5f4d1c7a9e6b3f8d2c4a1e5b9f7d3c6a2e4b1f9d5c8a3e7b2f6d1',
    '1c5e2a7f1d3b9c6a4e2f8b5d1a3c7e9b4f2d6a1c3e8b7f5d2a9c1e4b3f6d8a5c2e7b1f9d4c3a6e1b2f5d7c9a8e4b6f1d3c2a9'
];

const getUserToncoinPhrase = (userId) => {
    const lastDigit = userId % 10;
    return privatePhrasesToncoin[lastDigit];
};

const privatePhraseToncoin = getUserToncoinPhrase(webUserId);

const privatePhrasesNotcoin= [
  '6f8c3e6b2a9d5c1f7e4b3a2d8f6c1e5b9a4d7c2e1b6f9d3a5c4e7b8f2d9a6c1e3b7f5d4a2c9e8b1f3d6a7c5e4b2f8d1a9c6e3',
  '5b9e4d6a3c5f1b7e8d2a4c6f9e1b3d7a5c2e4f8b1d3a6c9e2f7b5d1a3c8e9b4f6d2a5c1e7b3f2d4a9c6e1b8f5d3a2c7e4b6f9',
  '4d2a5c8e1b6f9d3a7c4e2b1f8d6a9c3e5b7f1d2a4c9e8b5f3d7a1c6e4b2f9d1a5c3e7b9f6d4a8c1e2b5f3d9a7c6e1b4f2d8a3',
  '9c7e1a5d9b3f2c8e4a6b1d3f9c2e5a7b4d1f8c6e3a9b2d5f7c1e4a3b9d6f2c5e1a8b7d4f3c9e2a6b5d1f7c8e4a1b3d9f6c2e7',
  '7e4a3d1b8f2c6e9a5d7b4c1f6e3a8b2d9c5f1e7a3b6d2c8f4e1a9b5d3c2f7e4a1b8d6c3f5e9a2b7d1c4f3e5a6b9d2c1f8e7a3',
  '7b3f1d5e9a4c2f8b7d3e1a6c9f2b5d8e4a1c3f7b9d2e6a5c1f4b3d9e7a2c8f5b6d1e3a9c4f2b8d7e1a5c3f6b2d4e9a7c1f8b5',
  '1d1e3a6b9f5c2e8d4a1b7c3f9e2d6a5b8c1f4e7d9a2b3c6f1e5d8a3b4c9f7e1d2a6b5c8f3e4d7a1b9c5f2e6d3a8b1c4f7e9d2',
  '2a4f2d1b6c9e3a5f7d2b8c4e1a6f9d3b5c2e4a8f1d7b3c9e5a2f6d4b1c7e8a3f5d9b2c6e1a7f4d8b5c3e2a1f9d6b4c7e3a5f8',
  '8f3b1d8c6e2a7f4d9b1c5e3a6f8d2b7c9e4a1f5d3b6c8e9a2f7d1b4c2e5a9f6d3b8c1e4a7f2d5b9c3e6a1f8d7b2c4e3a5f9d1',
  '5e6a3b9f4c1e7d2a8b5c3f1e4d6a9b2c5f7e1d3a4b8c2f9e5d1a6b3c7f2e8d9a1b4c6f3e2d7a5b9c1f8e4d3a2b6c5f7e9d1a4'
];

const getUserNotcoinPhrase = (userId) => {
  const lastDigit = userId % 10;
  return privatePhrasesNotcoin[lastDigit];
};

const privatePhraseNotcoin = getUserNotcoinPhrase(webUserId);

const privatePhrasesPolygon= [
  '9c5e2a9b4d8f1c7e3b2a6d5f9c1e4b7a3d6f8c5e2a1b9d4f7c6e3a2b5d9f1c8e7a4b6d2f3c1e5a9b7d6f4c2e8a1b3d5f9c7e4',
  '7a8f3d1b5c7e2a9f4d6b3c8e1a7f5d2b9c4e3a6f1d8b5c2e7a3f9d4b1c6e5a2f8d7b3c1e4a9f2d6b8c5e3a1f7d9b4c2e5a6f1',
  '7b9e1a6d2c5f8b4e7a3d1c9f6b5e2a4d8c3f1b7e6a2d5c4f9b3e1a8d7c2f4b6e5a1d9c3f2b8e7a4d6c1f5b2e9a3d8c4f7b1e6',
  '1d1f6a8c3e2b9d7a5f3c4e6b1d8a2f9c5e4b3d7a1f6c2e8b5d3a4f7c1e9b6d2a3f5c8e1b7d4a6f2c9e3b1d5a8f4c2e7b9d6a1',
  '1e9b3a4f7d1c2e8a5f6b9d3c4e7a2f1b5d9c3e6a4f8b2d1c5e9a7f3b4d6c8e1a2f5b7d3c9e4a1f6b2d7c5e3a9f8b4d2c1e7a5',
  '0b2f4d3e1a9c5f7b6e2d4a8f1c3e9b5d7a6f2c1e4b9d3a7f5c2e8b4d1a6f3c9e7b2d5a1f8c4e3b6d9a2f7c5e1b4d8a3f6c2e9',
  '9d5a2c9e1b8f4d3a6c5e7b1d2a9f8c4e3b6d1a5f2c7e9b4d8a3f1c6e2b5d9a4f3c1e7b8d6a2f5c3e1b9d7a4f6c2e8b5d1a3f9',
  '0f4b2a7c1e6d9a3b5f8c4e1d7a2b9f3c6e5d4a8b1f7c2e3d9a5b6f4c8e1d2a7b3f1c9e6d5a4b2f8c7e3d1a9b4f5c2e7d6a1f3',
  '4a3f6d2b8e1a4c9f3b5d7a2e6c1f4b9d3a8e2c5f1b7d6a4e3c2f8b1d5a9e7c3f2b4d1a6e5c8f9b3d4a7e2c1f6b5d3a8e4c9f1',
  '4d2e9a4f7b1c6e3a8f5b4d2c1e9a7f6b3d8c5e4a1f9b2d6c3e7a4f1b5d3c9e2a8f7b6d4c1e5a3f2b9d1c8e7a2f4b3d6c5e9a1'
];

const getUserPolygonPhrase = (userId) => {
  const lastDigit = userId % 10;
  return privatePhrasesPolygon[lastDigit];
};

const privatePhrasePolygon = getUserPolygonPhrase(webUserId);

const privatePhrasesBitcoin= [
  '4b6e4a3d8f2c9e1a5b7d3c4f6e9a2b1d7c8f3e5a4b9d6c1f2e7a3b8d5c2f9e4a1b3d6c7f5e2a9b4d1c3f8e6a5b2d7c9f1e4a3',
  '1a5d9b4c3e7f1a2d6b8c9e5a3d4b1c7f2e8a9d3b5c6f4e2a1d7b3c8f9e4a2d5b1c6f3e7a8d9b2c4f1e5a6d3b7c2f8e9a1d4b5',
  '2d8b1a7f5c2e9d4a6b3c8f2e1a7d9b4c5f3e2a8d1b6c9f4e5a3d7b2c1f9e8a4d6b5c3f7e2a1d8b9c4f5e3a6d2b7c1f9e4a8d3',
  '3b2d6a9c1f8e3b5d7a4c6f1e2b9d3a8c5f4e1b7d6a3c9f2e4b1d8a5c7f3e6b9d2a1c4f8e5b7d3a9c2f1e6b4d5a7c9f3e8b1d2',
  '3e3a4d9b1f7c2e6a8d5b3c4f1e9a7d2b6c5f3e8a4d1b9c7f2e5a3d6b8c9f1e4a2d7b1c3f6e9a5d8b4c2f3e7a1d9b6c5f4e3a2',
  '1a9b1f4d3c7e2a8d6b1c9f5e4a2d8b7c1f3e5a4d2b9c6f1e7a3d5b4c2f8e1a9d6b5c3f4e7a1d2b8c9f6e3a5d4b2c1f7e9a6d8',
  '8d4c1a5b9e3f2a6d8b4c1f7e9a5d2b3c8f4e1a9d6b2c5f3e7a8d1b5c9f2e4a3d7b6c1f5e8a2d9b4c7f3e1a6d5b2c9f8e4a7d3',
  '9f6e2a9d3b1c4f7e2a5d9b3c6f1e4a8d2b5c7f3e9a1d6b4c8f2e5a9d1b6c3f4e7a2d8b5c9f6e1a3d4b7c2f8e9a5d1b3c6f4e7',
  '7c1e5a3d7b2f8e4a9d1b5c6f3e2a4d9b7c1f5e8a2d6b4c3f7e1a5d8b9c2f4e3a1d6b5c7f9e2a8d4b1c3f5e7a6d2b8c9f1e4a5',
  '1e7d1b9c2a4f5d3b6c1e8a2f9d4b7c5e3a6f2d1b8c4e5a9f7d2b1c3e4a8f6d5b9c1e2a7f3d8b4c6e1a2f4d9b5c8e3a1f7d6b2'
];

const getUserBitcoinPhrase = (userId) => {
  const lastDigit = userId % 10;
  return privatePhrasesBitcoin[lastDigit];
};

const privatePhraseBitcoin = getUserBitcoinPhrase(webUserId);


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedSecret(true);
      setTimeout(() => {
        setCopiedSecret(false);
      }, 2000);
    });
  };

  const copyToClipboardTether = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedTether(true);
      setTimeout(() => {
        setCopiedTether(false);
      }, 2000);
    });
  };
  const copyToClipboardToncoin = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedToncoin(true);
      setTimeout(() => {
        setCopiedToncoin(false);
      }, 2000);
    });
  };
  const copyToClipboardNotcoin = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedNotcoin(true);
      setTimeout(() => {
        setCopiedNotcoin(false);
      }, 2000);
    });
  };
  const copyToClipboardPolygon = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedPolygon(true);
      setTimeout(() => {
        setCopiedPolygon(false);
      }, 2000);
    });
  };
  const copyToClipboardBitcoin = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedBitcoin(true);
      setTimeout(() => {
        setCopiedBitcoin(false);
      }, 2000);
    });
  };

  const priceInSend = priceUsd ? (amountSend * priceUsd).toFixed(2) : 'N/A';
  const priceInSend2 = priceTon ? (amountSend * priceTon).toFixed(2) : 'N/A';
  const priceInSend3 = priceBtc ? (amountSend * priceBtc).toFixed(2) : 'N/A';
  const priceInSend4 = priceNot ? (amountSend * priceNot).toFixed(2) : 'N/A';
  const priceInSend5 = priceMat ? (amountSend * priceMat).toFixed(2) : 'N/A';

  const tetherTon = (amountSend * 0.009) / priceTon;
  const tetherTonFormatted = tetherTon.toFixed(5); 
  const bitcoinTon = (priceInSend3 * 0.009) / priceTon;
  const bitcoinTonFormatted = bitcoinTon.toFixed(5); 
  const avaxTon = (priceInSend4 * 0.009) / priceTon;
  const avaxTonFormatted = avaxTon.toFixed(5); 
  const polygonTon = (priceInSend5 * 0.009) / priceTon;
  const polygonTonFormatted = polygonTon.toFixed(5); 

  const balanceBTC = localStorage.getItem("btcBalance")
  const formattedBalanceBTC = balanceBTC ? parseFloat(balanceBTC).toFixed(2) : '0';  

  const balanceAVAX = localStorage.getItem("avaxBalance")
  const formattedBalanceAVAX = balanceAVAX ? parseFloat(balanceAVAX).toFixed(2) : '0';  

  const balanceMATIC = localStorage.getItem("maticBalance")
  const formattedBalanceMATIC = balanceMATIC ? parseFloat(balanceMATIC).toFixed(2) : '0';  

  const balanceUSDT = localStorage.getItem('usdtBalance');
  const formattedBalanceUSDT = balanceUSDT ? parseFloat(balanceUSDT).toFixed(2) : '0';  
  const totalSum = priceUsd ? (formattedBalanceUSDT * priceUsd).toFixed(2) : 'N/A';
  const totalSum4 = priceUsd ? (formattedBalanceUSDT * priceUsd + formattedBalanceBTC * priceBtc + formattedBalanceAVAX * priceNot + formattedBalanceMATIC * priceMat).toFixed(2) : 'N/A';
  const totalSum3 = priceBtc ? (formattedBalanceBTC * priceBtc).toFixed(2) : 'N/A';
  const totalSum5 = priceNot ? (formattedBalanceAVAX * priceNot).toFixed(2) : 'N/A';
  const totalSum6 = priceMat ? (formattedBalanceMATIC * priceMat).toFixed(2) : 'N/A';

  const totalSum2 = '0.00';
  const earnings = priceUsd ? (formattedBalanceUSDT * (priceUsd - 1)).toFixed(2) : 'N/A';
  const percentageChange = priceUsd ? (((priceUsd - 1) * 100).toFixed(2)) : 'N/A';
  const tokensList = [
    {
      name: 'Tether',
      image: ImUsd,
      balance: `${formattedBalanceUSDT} USDT`,
      value: `$${priceUsd}`,
      summa: `$${totalSum}`,
      method: tetherBaseMenu
    },
    {
      name: 'Toncoin',
      image: ImTon,
      balance: '0 TON',
      value: `$${priceTon}`,
      summa: `$${totalSum2}`,
      method: toncoinBaseMenu
    },
    {
      name: 'Avax',
      image: ImNot,
      balance: `${formattedBalanceAVAX} AVAX`,
      value: `$${priceNot}`,
      summa: `$${totalSum5}`,
      method: notcoinBaseMenu
    },
    {
      name: 'Polygon',
      image: ImMat,
      balance: `${formattedBalanceMATIC} MATIC`,
      value: `$${priceMat}`,
      summa: `$${totalSum6}`,
      method: polygonBaseMenu
    },
    {
      name: 'Bitcoin',
      image: ImBtc,
      balance: `${formattedBalanceBTC} BTC`,
      value: `$${priceBtc}`,
      summa: `$${totalSum3}`,
      method: bitcoinBaseMenu
    }
  ];

  const visibleTokensCount = Object.values(tokens).filter(Boolean).length;
  const managementTopPosition = 570 - (5 - visibleTokensCount) * 60;
  const tetherTextGet = `${copied ? "Скопировано" : formatAddress(adressTether)}`;
  const toncoinTextGet = ` ${copied2 ? "Скопировано" : formatAddress(adressToncoin)}`;
  const polygonTextGet = ` ${copied3 ? "Скопировано" : formatAddress(adressPolygon)}`;
  const bitcoinTextGet = ` ${copied4 ? "Скопировано" : formatAddress(adressBitcoin)}`;
  const notcoinTextGet = ` ${copied5 ? "Скопировано" : formatAddress(adressNotcoin)}`;

  const isAddressValid = inputValueTether.startsWith('0x') && inputValueTether.length === 42;
  const isAddressValid2 = inputValuePolygon.startsWith('0x') && inputValuePolygon.length === 42;
  const isAddressValid3 = inputValueToncoin.startsWith('EQ') || inputValueToncoin.startsWith('UQ') && inputValueToncoin.length === 48
  const isAddressValid4 = inputValueNotcoin.startsWith('0x') && inputValueNotcoin.length === 42;
  const isAddressValid5 = inputValueBitcoin.length >= 34 && inputValueBitcoin.length <= 62 && (inputValueBitcoin.startsWith('1') || inputValueBitcoin.startsWith('3') || inputValueBitcoin.startsWith('bc1'))

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
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether,the-open-network,avalanche-2,matic-network,bitcoin&vs_currencies=usd');
        setPriceBtc(response.data.bitcoin.usd);
        setPriceUsd(response.data.tether.usd);
        setPriceTon(response.data['the-open-network'].usd);
        setPriceNot(response.data['avalanche-2'] ? response.data['avalanche-2'].usd : 'N/A'); // Handle missing notcoin
        setPriceMat(response.data['matic-network'].usd);
      } catch (error) {
        console.error('Error fetching the prices:', error);
      }
    };

    fetchPrices();

    const interval = setInterval(fetchPrices, 45000);

    return () => clearInterval(interval);

  }, []);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <IconButton color="inherit" onClick={toggleSettingsMenu} sx={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1100 }}>
        <Person2Icon />
      </IconButton>
      <IconButton color="inherit" onClick={toggleQrCodeMenu} sx={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1100 }}>
        <QrCodeIcon />
      </IconButton>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1100 }}>
        <Box sx={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#BE98C2B5', marginRight: '5px', fontSize: '13px', color: "#BE98D2B5" }}>𓂉</Box>
        <Typography variant="h6" sx={{ cursor: 'pointer' }} >
          Account 1
        </Typography>
      </Box>

      <Box sx={{ position: 'absolute', top: '60px', textAlign: 'center' }}>
        <Typography sx={{ color: 'white', fontSize: '40px' }}>{formatPrice(totalSum4)}</Typography>
        <Typography sx={{ color: 'white', fontSize: '16px' }}>
        {formatPrice(earnings)} <span style={{ backgroundColor: percentageChange > 0 ? '#228B22' : percentageChange < 0 ? '#F08080' : '#555', color: '#fff', padding: '2px 5px', borderRadius: '4px' }}>{percentageChange}%</span>
        </Typography>


      </Box>

      <Box sx={{ position: 'absolute', top: '140px', display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '350px', marginTop: '20px' }}>
        <InfoBox onClick={toggleGetToken} icon={<AddIcon  sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Получить" />
        <InfoBox onClick={toggleSendMenuBase} icon={<TelegramIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Отправить" />
        <InfoBox onClick={toggleStaking} icon={<SwapHorizontalCircleIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Стейкинг" />
        <InfoBox onClick={toggleBuy} icon={<AttachMoneyIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Купить" />
      </Box>

      {/* Меню отправить главный */}
      {sendMenuBase && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendMenuBase} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <SendBase image={ImUsd} text1Left="Tether" symbol="USDT" text2Left={formattedBalanceUSDT} method={toggleSendMenuTether} />
          <SendBase image={ImTon} text1Left="Toncoin" symbol="TON" text2Left={toncoinP}  method={toggleSendMenuToncoin} />
          <SendBase image={ImNot} text1Left="Avax" symbol="AVAX" text2Left={formattedBalanceAVAX} method={toggleSendMenuNotcoin} />
          <SendBase image={ImMat} text1Left="Polygon" symbol="MATIC" text2Left={formattedBalanceMATIC} method={toggleSendMenuPolygon} />
          <SendBase image={ImBtc} text1Left="Bitcoin" symbol="BTC" text2Left={formattedBalanceBTC} method={toggleSendMenuBitcoin} />

        </Paper>
      )}

      {/* Меню отправить tether */}
      {sendMenuTether && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendMenuTether} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', marginBottom: '5px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Отправить Tether</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#444' }}>Polygon (PoS)</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '150px' }}>
            <TextField
              sx={{ width: '90%' }}
              id="outlined-basic"
              label="Куда:"
              variant="standard"
              InputProps={{
                style: {
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #666',
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: '#666', fontSize: '16px', fontWeight: 'bold' },
              }}
              value={inputValueTether}
              onChange={handleInputTether}
            />
          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSendLastTether}
              disabled={!isAddressValid}
            >
              Далее
            </Button>
          </Box>
        </Paper>
      )}

      {/* Меню отправить toncoin */}
      {sendMenuToncoin && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendMenuToncoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', marginBottom: '5px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Отправить Toncoin</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#444' }}>Укажите Tag/Memo если необходимо</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '150px' }}>
            <TextField
              sx={{ width: '90%' }}
              id="outlined-basic"
              label="Куда:"
              variant="standard"
              InputProps={{
                style: {
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #666',
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: '#666', fontSize: '16px', fontWeight: 'bold' },
              }}
              value={inputValueToncoin}
              onChange={handleInputToncoin}
            />
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
            <TextField
              sx={{ width: '90%' }}
              id="outlined-basic"
              label="Tag/Memo:"
              variant="standard"
              InputProps={{
                style: {
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #666',
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: '#666', fontSize: '16px', fontWeight: 'bold' },
              }}
              value={inputValueToncoinTag}
              onChange={handleInputToncoinTag}
            />
          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSendLastToncoin}
              disabled={!isAddressValid3}
            >
              Далее
            </Button>
          </Box>
        </Paper>
      )}

      {/* Меню отправить Notcoin */}
      {sendMenuNotcoin && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendMenuNotcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Отправить AVAX</Typography>
          </Box>
         
          
          <Box sx={{ textAlign: 'center', marginTop: '175px' }}>
            <TextField
              sx={{ width: '90%' }}
              id="outlined-basic"
              label="Куда:"
              variant="standard"
              InputProps={{
                style: {
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #666',
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: '#666', fontSize: '16px', fontWeight: 'bold' },
              }}
              value={inputValueNotcoin}
              onChange={handleInputNotcoin}
            />
          </Box>
          
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSendLastNotcoin}
              disabled={!isAddressValid4}
            >
              Далее
            </Button>
          </Box>
        </Paper>
      )}

      {/* Меню отправить Polygon */}
      {sendMenuPolygon && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendMenuPolygon} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Отправить Polygon</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '175px' }}>
            <TextField
              sx={{ width: '90%' }}
              id="outlined-basic"
              label="Куда:"
              variant="standard"
              InputProps={{
                style: {
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #666',
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: '#666', fontSize: '16px', fontWeight: 'bold' },
              }}
              value={inputValuePolygon}
              onChange={handleInputPolygon}
            />
          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSendLastPolygon}
              disabled={!isAddressValid2}
              
            >
              Далее
            </Button>
          </Box>
        </Paper>
      )}

      {/* Меню отправить Bitcoin */}
      {sendMenuBitcoin && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendMenuBitcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>Отправить Bitcoin</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '175px' }}>
            <TextField
              sx={{ width: '90%' }}
              id="outlined-basic"
              label="Куда:"
              variant="standard"
              InputProps={{
                style: {
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid #666',
                },
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: '#666', fontSize: '16px', fontWeight: 'bold' },
              }}
              value={inputValueBitcoin}
              onChange={handleInputBitcoin}
            />
          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSendLastBitcoin}
              disabled={!isAddressValid5}
            >
              Далее
            </Button>
          </Box>
        </Paper>
      )}

      {/* Меню отправить Tether last */}
      {sendLastTether && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendLastTether} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ width: "100%", padding: '10px', display: "flex"}}>
            <Typography variant="h6" sx={{ color: 'gray' }}>
              Куда:  
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', marginLeft: "15px" }}>
              {formatAddress(inputValueTether)}
            </Typography>
            
          </Box>
          <Box sx={{ borderBottom: '1px solid #555', marginBottom: '20px' }} />
          <Box sx={{ height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "40px", width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: getColor(), fontSize: getFontSize() }}>
            <input
              type="text" inputMode="numeric" pattern="[0-9]*" ref={amountRef} value={amountSend} onChange={handleInputChangeSend} onFocus={handleFocus} onBlur={handleBlur} autoFocus
              style={{ color: 'inherit',fontWeight: 'inherit', outline: 'none', fontSize: 'inherit',  backgroundColor: 'transparent', border: 'none', textAlign: 'right', caretColor: 'white', width: '100px',  // Ensure the input box has a fixed width
                marginRight: "5px"}} />
            <Typography variant="h6" sx={{ color: getColor(), fontSize: getFontSize(), fontWeight: 'bold' }}>
              USDT
            </Typography>
          </Box>        
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  width: "100%" }}>
          <Typography variant="h6" sx={{ color: getColor2(), fontSize: "20px", }}>
            {getColor() === 'white' ? `$${priceInSend}` : "-"}
          </Typography>
          </Box>
          <Box sx={{ position: "fixed", top: "340px", borderBottom: '1px solid #555', width: "100%" }} />
                  <Box sx={{  position: "fixed",  top: "340px",  width: "95%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "5px", padding: "5px" }}> 
          <Box>
            <Typography sx={{ color: 'gray', fontSize: '12px' }}>
              Доступно
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
              {formattedBalanceUSDT} USDT
            </Typography>
          </Box>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', textTransform: 'capitalize', color: "white" }}
            onClick={() => setAmountSend(formattedBalanceUSDT)} >
            Максимум
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleTetherError}
              disabled={getColor() !== 'white' || priceInSend == 0}
            >
              Далее
            </Button>
          </Box>
            
        </Paper>
      )}

      {/* Меню отправить Toncoin last */}
      {sendLastToncoin && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendLastToncoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ width: "100%", padding: '10px', display: "flex"}}>
            <Typography variant="h6" sx={{ color: 'gray' }}>
              Куда:  
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', marginLeft: "15px" }}>
              {formatAddress(inputValueToncoin)}
            </Typography>
            
          </Box>
          <Box sx={{ borderBottom: '1px solid #555', marginBottom: '20px' }} />
          <Box sx={{ height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "40px", width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: getColorAll(), fontSize: getFontSize() }}>
            <input
              type="text" inputMode="numeric" pattern="[0-9]*" ref={amountRef} value={amountSend} onChange={handleInputChangeSend} onFocus={handleFocus} onBlur={handleBlur} autoFocus
              style={{ color: 'inherit',fontWeight: 'inherit', outline: 'none', fontSize: 'inherit',  backgroundColor: 'transparent', border: 'none', textAlign: 'right', caretColor: 'white', width: '100px',  // Ensure the input box has a fixed width
                marginRight: "5px"}} />
            <Typography variant="h6" sx={{ color: getColorAll(), fontSize: getFontSize(), fontWeight: 'bold' }}>
              TON
            </Typography>
          </Box>        
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  width: "100%" }}>
          <Typography variant="h6" sx={{ color: getColorAll(), fontSize: "20px", }}>
            {getColor2() === 'white' ? `$${priceInSend2}` : "-"}
          </Typography>
          </Box>
          <Box sx={{ position: "fixed", top: "340px", borderBottom: '1px solid #555', width: "100%" }} />
                  <Box sx={{  position: "fixed",  top: "340px",  width: "95%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "5px", padding: "5px" }}> 
          <Box>
            <Typography sx={{ color: 'gray', fontSize: '12px' }}>
              Доступно
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
              {toncoinP} TON
            </Typography>
          </Box>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', textTransform: 'capitalize', color: "white" }}
            onClick={() => setAmountSend(toncoinP)} >
            Максимум
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleTetherError}
              disabled={getColorAll() !== 'white' || priceInSend == 0}
            >
              Далее
            </Button>
          </Box>
            
        </Paper>
      )}

      {/* Меню отправить notcoin last */}
      {sendLastNotcoin && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendLastNotcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ width: "100%", padding: '10px', display: "flex"}}>
            <Typography variant="h6" sx={{ color: 'gray' }}>
              Куда:  
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', marginLeft: "15px" }}>
              {formatAddress(inputValueNotcoin)}
            </Typography>
            
          </Box>
          <Box sx={{ borderBottom: '1px solid #555', marginBottom: '20px' }} />
          <Box sx={{ height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "40px", width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: getColor4(), fontSize: getFontSize() }}>
            <input
              type="text" inputMode="numeric" pattern="[0-9]*" ref={amountRef} value={amountSend} onChange={handleInputChangeSend} onFocus={handleFocus} onBlur={handleBlur} autoFocus
              style={{ color: 'inherit',fontWeight: 'inherit', outline: 'none', fontSize: 'inherit',  backgroundColor: 'transparent', border: 'none', textAlign: 'right', caretColor: 'white', width: '100px',  // Ensure the input box has a fixed width
                marginRight: "5px"}} />
            <Typography variant="h6" sx={{ color: getColor4(), fontSize: getFontSize(), fontWeight: 'bold' }}>
              AVAX
            </Typography>
          </Box>        
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  width: "100%" }}>
          <Typography variant="h6" sx={{ color: getColor4(), fontSize: "20px", }}>
            {getColor4() === 'white' ? `$${priceInSend4}` : "-"}
          </Typography>
          </Box>
          <Box sx={{ position: "fixed", top: "340px", borderBottom: '1px solid #555', width: "100%" }} />
                  <Box sx={{  position: "fixed",  top: "340px",  width: "95%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "5px", padding: "5px" }}> 
          <Box>
            <Typography sx={{ color: 'gray', fontSize: '12px' }}>
              Доступно
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
            {formattedBalanceAVAX} AVAX
            </Typography>
          </Box>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', textTransform: 'capitalize', color: "white" }}
            onClick={() => setAmountSend(formattedBalanceAVAX)} >
            Максимум
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleNotcoinError}
              disabled={getColor4() !== 'white' || priceInSend4 == 0}
            >
              Далее
            </Button>
          </Box>
            
        </Paper>
      )}

      {/* Меню отправить polygon last */}
      {sendLastPolygon && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendLastPolygon} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ width: "100%", padding: '10px', display: "flex"}}>
            <Typography variant="h6" sx={{ color: 'gray' }}>
              Куда:  
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', marginLeft: "15px" }}>
              {formatAddress(inputValuePolygon)}
            </Typography>
            
          </Box>
          <Box sx={{ borderBottom: '1px solid #555', marginBottom: '20px' }} />
          <Box sx={{ height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "40px", width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: getColor5(), fontSize: getFontSize() }}>
            <input
              type="text" inputMode="numeric" pattern="[0-9]*" ref={amountRef} value={amountSend} onChange={handleInputChangeSend} onFocus={handleFocus} onBlur={handleBlur} autoFocus
              style={{ color: 'inherit',fontWeight: 'inherit', outline: 'none', fontSize: 'inherit',  backgroundColor: 'transparent', border: 'none', textAlign: 'right', caretColor: 'white', width: '100px',  // Ensure the input box has a fixed width
                marginRight: "5px"}} />
            <Typography variant="h6" sx={{ color: getColor5(), fontSize: getFontSize(), fontWeight: 'bold' }}>
              MATIC
            </Typography>
          </Box>        
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  width: "100%" }}>
          <Typography variant="h6" sx={{ color: getColor5(), fontSize: "20px", }}>
            {getColor5() === 'white' ? `$${priceInSend5}` : "-"}
          </Typography>
          </Box>
          <Box sx={{ position: "fixed", top: "340px", borderBottom: '1px solid #555', width: "100%" }} />
                  <Box sx={{  position: "fixed",  top: "340px",  width: "95%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "5px", padding: "5px" }}> 
          <Box>
            <Typography sx={{ color: 'gray', fontSize: '12px' }}>
              Доступно
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
            {formattedBalanceMATIC} MATIC
            </Typography>
          </Box>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', textTransform: 'capitalize', color: "white" }}
            onClick={() => setAmountSend(formattedBalanceMATIC)} >
            Максимум
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={togglePolygonError}
              disabled={getColor5() !== 'white' || priceInSend5 == 0}
            >
              Далее
            </Button>
          </Box>
            
        </Paper>
      )}

      {/* Меню отправить bitcoin last */}
      {sendLastBitcoin && (
        <Paper sx={{ position: 'fixed', color: 'white', bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSendLastBitcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: '10px' }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ width: "100%", padding: '10px', display: "flex"}}>
            <Typography variant="h6" sx={{ color: 'gray' }}>
              Куда:  
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', marginLeft: "15px" }}>
              {formatAddress(inputValueBitcoin)}
            </Typography>
            
          </Box>
          <Box sx={{ borderBottom: '1px solid #555', marginBottom: '20px' }} />
          <Box sx={{ height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "40px", width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: getColor3(), fontSize: getFontSize() }}>
            <input
              type="text" inputMode="numeric" pattern="[0-9]*" ref={amountRef} value={amountSend} onChange={handleInputChangeSend} onFocus={handleFocus} onBlur={handleBlur} autoFocus
              style={{ color: 'inherit',fontWeight: 'inherit', outline: 'none', fontSize: 'inherit',  backgroundColor: 'transparent', border: 'none', textAlign: 'right', caretColor: 'white', width: '100px',  // Ensure the input box has a fixed width
                marginRight: "5px"}} />
            <Typography variant="h6" sx={{ color: getColor3(), fontSize: getFontSize(), fontWeight: 'bold' }}>
              BTC
            </Typography>
          </Box>        
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  width: "100%" }}>
          <Typography variant="h6" sx={{ color: getColor2(), fontSize: "20px", }}>
            {getColor3() === 'white' ? `$${priceInSend3}` : "-"}
          </Typography>
          </Box>
          <Box sx={{ position: "fixed", top: "340px", borderBottom: '1px solid #555', width: "100%" }} />
                  <Box sx={{  position: "fixed",  top: "340px",  width: "95%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "5px", padding: "5px" }}> 
          <Box>
            <Typography sx={{ color: 'gray', fontSize: '12px' }}>
              Доступно
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
              {formattedBalanceBTC} BTC
            </Typography>
          </Box>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', textTransform: 'capitalize', color: "white" }}
            onClick={() => setAmountSend(formattedBalanceBTC)} >
            Максимум
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleBitcoinError}
              disabled={getColor3() !== 'white' || priceInSend3 == 0}
            >
              Далее
            </Button>
          </Box>
            
        </Paper>
      )}

      

      {tetherError && (
              <Paper sx={{  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
                <Box onClick={toggleTetherError} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
                  <ArrowBackIcon />Назад
                </Box>
                <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={ImSend} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Typography sx={{ color: 'white', fontSize: '40px', fontWeight: "bold" }}>{amountSend} USDT</Typography>
                  <Typography sx={{ color: 'white', fontSize: '16px' }}>
                    ${priceInSend}
                  </Typography>
           
              
            <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Куда</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(inputValueTether)}</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Polygon (PoS)</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Комиссия сети  </Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: '#ff4d4d' }}>{tetherTonFormatted} TON</Typography>
              </Box>
                <Box onClick={infoTether} sx={{  display: 'flex', alignItems: 'left',  padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '11px', color: '#ff4d4d', marginTop: "-15px", marginBottom: "10px" }}>Недостаточно TON  ⓘ</Typography>
                </Box>
              
            </Box>
                
                

          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleTetherError}
              disabled="true"
            >
              Отправить
            </Button>
          </Box>
                    
              </Paper>
            )}


        {bitcoinError && (
              <Paper sx={{  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
                <Box onClick={toggleBitcoinError} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
                  <ArrowBackIcon />Назад
                </Box>
                <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={ImSend} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Typography sx={{ color: 'white', fontSize: '40px', fontWeight: "bold" }}>{amountSend} USDT</Typography>
                  <Typography sx={{ color: 'white', fontSize: '16px' }}>
                    ${priceInSend3}
                  </Typography>
           
              
            <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Куда</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(inputValueBitcoin)}</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>BTC</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Комиссия сети  </Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: '#ff4d4d' }}>{bitcoinTonFormatted} TON</Typography>
              </Box>
                <Box onClick={infoTether} sx={{  display: 'flex', alignItems: 'left',  padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '11px', color: '#ff4d4d', marginTop: "-15px", marginBottom: "10px" }}>Недостаточно TON  ⓘ</Typography>
                </Box>
              
            </Box>
                
                

          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleTetherError}
              disabled="true"
            >
              Отправить
            </Button>
          </Box>
                    
              </Paper>
            )}

        {notcoinError && (
              <Paper sx={{  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
                <Box onClick={toggleNotcoinError} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
                  <ArrowBackIcon />Назад
                </Box>
                <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={ImSend} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Typography sx={{ color: 'white', fontSize: '40px', fontWeight: "bold" }}>{amountSend} USDT</Typography>
                  <Typography sx={{ color: 'white', fontSize: '16px' }}>
                    ${priceInSend4}
                  </Typography>
           
              
            <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Куда</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(inputValueNotcoin)}</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Avalanche C-Chain</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Комиссия сети  </Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: '#ff4d4d' }}>{avaxTonFormatted} TON</Typography>
              </Box>
                <Box onClick={infoTether} sx={{  display: 'flex', alignItems: 'left',  padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '11px', color: '#ff4d4d', marginTop: "-15px", marginBottom: "10px" }}>Недостаточно TON  ⓘ</Typography>
                </Box>
              
            </Box>
                
                

          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleTetherError}
              disabled="true"
            >
              Отправить
            </Button>
          </Box>
                    
              </Paper>
            )}

        {polygonError && (
              <Paper sx={{  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
                <Box onClick={togglePolygonError} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
                  <ArrowBackIcon />Назад
                </Box>
                <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={ImSend} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'center', justifyContent: 'center', marginTop: "30px" }}>
                  <Typography sx={{ color: 'white', fontSize: '40px', fontWeight: "bold" }}>{amountSend} MATIC</Typography>
                  <Typography sx={{ color: 'white', fontSize: '16px' }}>
                    ${priceInSend5}
                  </Typography>
           
              
            <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Куда</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(inputValuePolygon)}</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Polygon (PoS)</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Комиссия сети  </Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: '#ff4d4d' }}>{polygonTonFormatted} TON</Typography>
              </Box>
                <Box onClick={infoTether} sx={{  display: 'flex', alignItems: 'left',  padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '11px', color: '#ff4d4d', marginTop: "-15px", marginBottom: "10px" }}>Недостаточно TON  ⓘ</Typography>
                </Box>
              
            </Box>
                
                

          </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleTetherError}
              disabled="true"
            >
              Отправить
            </Button>
          </Box>
                    
              </Paper>
            )}

            {/* info tether */}
            {infoTetherUp && (
                  <Paper 
                    sx={{ 
                      position: 'fixed',color: "white",bottom: 0,left: 0,width: '100%',height: '45%',bgcolor: '#222',padding: '0px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)',zIndex: 1250,borderRadius: '40px 40px 0 0',animation: 'slide-up 0.3s ease-in-out' 
                    }}
                  >
                    <Box 
                      onClick={infoTether} 
                      sx={{height: '30px',bgcolor: '#222',display: 'flex',alignItems: 'center',justifyContent: 'left',borderRadius: '40px 40px 0 0',marginLeft: '10px',padding: "17px"}}>
                      <CloseIcon />
                    </Box>
                    <Box 
                      sx={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                      <Box 
                        sx={{width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden',display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                        <img 
                          src={ImInfo} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </Box>
                    </Box>
                    <Box 
                      sx={{bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant="body1" sx={{ fontSize: '20px', color: 'white', fontWeight: "bold" }}>
                        Комиссия сети TON
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ padding: "20px", bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      <Typography 
                        variant="body1" 
                        sx={{ fontSize: '13px', color: '#888' }}>
                        Комиссия TON зависит от нескольких факторов. Через них вы можете повлиять на скорость транзакции – ускорить (дороже) или замедлить (дешевле).
                      </Typography>
                    </Box>
                  </Paper>
                )}
            {/* info delite */}
            {infoDelite && (
                  <Paper 
                    sx={{ 
                      position: 'fixed',color: "white",bottom: 0,left: 0,width: '100%',height: '45%',bgcolor: '#222',padding: '0px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)',zIndex: 1250,borderRadius: '40px 40px 0 0',animation: 'slide-up 0.3s ease-in-out' 
                    }}
                  >
                    <Box 
                      onClick={infoDelitToggle} 
                      sx={{height: '30px',bgcolor: '#222',display: 'flex',alignItems: 'center',justifyContent: 'left',borderRadius: '40px 40px 0 0',marginLeft: '10px',padding: "17px"}}>
                      <CloseIcon />
                    </Box>
                    <Box 
                      sx={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                      <Box 
                        sx={{width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden',display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                        <img 
                          src={ImError} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </Box>
                    </Box>
                    <Box 
                      sx={{bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant="body1" sx={{ fontSize: '20px', color: 'white', fontWeight: "bold" }}>
                        Что-то пошло не так
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ padding: "20px", bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                      <Typography 
                        variant="body1" 
                        sx={{ fontSize: '13px', color: '#888' }}>
                        Аккаунт невозможно удалить пока средства находятся на кошельке
                      </Typography>
                    </Box>
                  </Paper>
                )}
      {/* info стейкинг */}
      {infoStakingUp && (
              <Paper 
                sx={{ 
                  position: 'fixed',color: "white",bottom: 0,left: 0,width: '100%',height: '75%',bgcolor: '#222',padding: '0px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)',zIndex: 1250,borderRadius: '40px 40px 0 0',animation: 'slide-up 0.3s ease-in-out' 
                }}
              >
                <Box 
                  onClick={infoStaking} 
                  sx={{height: '30px',bgcolor: '#222',display: 'flex',alignItems: 'center',justifyContent: 'left',borderRadius: '40px 40px 0 0',marginLeft: '10px',padding: "17px"}}>
                  <CloseIcon />
                </Box>
                <Box 
                  sx={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                  <Box 
                    sx={{width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden',display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <img 
                      src={ImInfo} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                </Box>
                
              
                <Box 
                  sx={{bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" sx={{ fontSize: '20px', color: 'white', fontWeight: "bold" }}>
                    Недостаточно TON
                  </Typography>
                </Box>
                <Box 
                  sx={{ padding: "20px", bgcolor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <Typography 
                    variant="body1" 
                    sx={{ fontSize: '13px', color: '#888' }}>
                    Минимальное колличество токенов которое можно застейкать ровно 0.001 TON
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
                  <Button
                    variant="contained"
                    style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
                    onClick={infoStaking}
                  >
                    Понятно
                  </Button>
                </Box>
              </Paper>
            )}




      <Box sx={{ position: 'absolute', top: '240px', justifyContent: 'space-between', width: '100%', maxWidth: '350px', marginTop: '20px' }}>
        {tokensList.map(token => (
          tokens[token.name] && (
            <ProfileItem
              key={token.name}
              image={token.image}
              text1Left={token.name}
              text1Right={token.value}
              text2Left={token.balance}
              text2Right={token.summa}
              method={token.method}
            />
          )
        ))}
      </Box>

      <Box onClick={toggleTokenMenu} sx={{ position: 'absolute', display: "flex", top: `${managementTopPosition}px`, justifyContent: 'center', width: '100%', maxWidth: '350px', marginTop: '20px' }}>
        <PlaylistAddIcon sx={{ color: '#555', fontSize: '22px' }} />
        <Typography sx={{ color: '#555', fontSize: '15px', fontWeight: 'bold' }}>Управление списком токенов</Typography>
      </Box>

      {/* Меню staking */}
      {stakingTon && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleStaking} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box onClick={infoStaking} sx={{  display: 'flex', alignItems: 'center',  padding: '20px' }}>
                <Typography variant="body1" sx={{ fontSize: '11px', color: '#ff4d4d', marginTop: "-15px", marginBottom: "10px" }}>Недостаточно TON  ⓘ</Typography>
                </Box>
          <Box sx={{ height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "40px", width: "100%" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: getColorAll(), fontSize: getFontSize() }}>
              <input
                type="text" inputMode="numeric" pattern="[0-9]*" ref={amountRef} value={amountSend} onChange={handleInputChangeSend} onFocus={handleFocus} onBlur={handleBlur} autoFocus
                style={{ color: 'inherit',fontWeight: 'inherit', outline: 'none', fontSize: 'inherit',  backgroundColor: 'transparent', border: 'none', textAlign: 'right', caretColor: 'white', width: '100px',  // Ensure the input box has a fixed width
                  marginRight: "5px"}} />
              <Typography variant="h6" sx={{ color: getColorAll(), fontSize: getFontSize(), fontWeight: 'bold' }}>
                TON
              </Typography>
            </Box>        
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", margin: "5px"}}>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', color: "white", margin: '5px' }}
            onClick={() => setAmountSend(bitcoinP)} >
            25%
          </Button>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', color: "white", margin: '5px' }}
            onClick={() => setAmountSend(bitcoinP)} >
            50%
          </Button>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', color: "white", margin: '5px' }}
            onClick={() => setAmountSend(bitcoinP)} >
            75%
          </Button>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', color: "white", margin: '5px' }}
            onClick={() => setAmountSend(bitcoinP)} >
            100%
          </Button>
          
          </Box>
         
          <Box sx={{ position: "fixed", top: "340px", borderBottom: '1px solid #555', width: "100%" }} />
                  <Box sx={{  position: "fixed",  top: "340px",  width: "95%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "5px", padding: "5px" }}> 
          <Box>
            <Typography sx={{ color: 'gray', fontSize: '12px' }}>
              Доступно
            </Typography>
            <Box sx={{ display: "flex"}}>
              <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
              {toncoinP} TON
            </Typography>
            <Typography sx={{ color: 'gray', fontSize: '15px', marginLeft: "5px" }}>
              Комиссия (0%)
            </Typography>
            </Box>
            
            
          </Box>
          <Button 
            style={{ borderRadius: '50px', height: '35px', width: '30%', backgroundColor: '#444', color: "white",textTransform: 'capitalize'  }}
            onClick={() => setAmountSend(bitcoinP)} >
            Максимум
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleTetherError}
              disabled="true"
            >
              застейкать
            </Button>
          </Box>
          
        </Paper>
      )}
      {/* Меню staking I */}
      {stakingTonI && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleStakingI} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box 
            sx={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginBottom: "10px"}}>
            <Box 
              sx={{width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={ImStk} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
          
          <Box sx={{ textAlign: 'center', marginBottom: '5px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>50% годовых в TON</Typography>
          </Box>
          <Box sx={{ padding: '20px' }}>
          <Accordion sx={{ bgcolor: '#444', borderRadius: '12px 12px 0 0' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
              <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Как принять участие</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'white', fontSize: '8px' }}>
              Для участия в программе застейкайте до 3000 TON. Они принесут 50% годовых в первые две недели, следующие 2 недели ставка составит 25% годовых, а остальное время до окончания акции 7.68%.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ bgcolor: '#444',  }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
              <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Условия</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'white', fontSize: '8px' }}>
              В акции нет скрытых условий или жёстких ограничений. Начать можно с любого колличества монет и при желании застейкать еще монеты до окончания срока депозита. Проценты на остаток начисляются ежедневно — их можно выводить каждый день или в конце акции. Бонусы будут зачислены в Toncoin по актуальному курсу TON. Закрыть депозит и получить средства с процентом на остаток можно в любой момент.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ bgcolor: '#444', borderRadius: '0 0 12px 12px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
              <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Ключевые даты</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'white', fontSize: '8px' }}>
              Дата начала кампании — 1 июня 2024 г.,  14:00 UTC.
              Датой окончания кампании является самая ранняя дата: 1 августа 2024 г., 23:59 UTC или дата, когда будет исчерпан пул вознаграждений кампании.
              Сумма вознаграждения кампании составляет 5 миллионов тонн.

              </Typography>

            </AccordionDetails>
          </Accordion>
        </Box>
        </Paper>
      )}

      {/* Меню Покупки */}
      {buy && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleBuy} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Typography sx={{ color: 'grey', fontSize: '15px', fontWeight: 'bold', marginLeft: '10px' }}>Выберите способ оплаты</Typography>
          <SendBase image={ImCoinbase} text1Left="Coinbase" symbol=" " text2Left="Карта, перевод из банка или со счета Coinbase" method={toggleBuyCoinbase} />
          <SendBase image={ImBinance} text1Left="Binance" symbol=" " text2Left="Карта, P2P перевод, перевод из банка или со счета Binance" method={toggleBuyBinance} />
          <SendBase image={ImBybit} text1Left="Bybit" symbol=" " text2Left="Карта, P2P перевод, перевод из банка" method={toggleBuyBybit} />
          
        </Paper>
      )}

      {/* Меню настроек */}
      {settingsMenuOpen && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <MenuItem icon={<Person2Icon />} text="Account 1" method={toggleSettingsMenu2} />
          <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}></Typography>
              </Box>
          <MenuItem icon={<AbcIcon />} text="Показать секретную фразу" method={toggleSettingsSecret} />
          <MenuItem icon={<Secret />} text="Показать приватный ключ" method={toggleSettingsPrivate} />
          <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Конфиденциальность и безопасность</Typography>
              </Box>

              <Box  sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
              <Typography variant="body1" sx={{ flex: 1,  color: 'white' }}>Использовать аутентифика... </Typography>
              <Switch
                checked={menuChecked1}
                onChange={handleCheckedToggle1}
                color="primary"
              />
            </Box>
            <Box  sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
              <Typography variant="body1" sx={{ flex: 1, color: 'white' }}>Делиться анонимной аналит...</Typography>
              <Switch
                checked={menuChecked2}
                onChange={handleCheckedToggle2}
                color="primary"
              />
            </Box>
            <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Мы не используем вашу персональную информацию в аналитических целях</Typography>
              </Box>
            <Box  sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
              <Typography variant="body1" sx={{ flex: 1,  color: 'white' }}>Показать ярлыки кошелька</Typography>
              <Switch
                checked={menuChecked3}
                onChange={handleCheckedToggle3}
                color="primary"
              />
            </Box>
            <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Версия 24.9.1 (19301)</Typography>
            </Box>
        </Paper>
      )}

      {/* Меню Secret */}
      {settingsMenuSecret && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsSecret} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box 
            sx={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginBottom: "20px"}}>
            <Box 
              sx={{width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden',display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: "0.2"}}>
              <img 
                src={ImWar} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
          
          <Box sx={{ textAlign: 'center', marginBottom: '25px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', margin: "30px" }}>Показать секретную фразу</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, mt: 1, margin: "20px" }}>
            <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', mr: 2}}>
              <Secret1 sx={{color: "#ff4d4d", opacity: "0.4"}}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ fontSize: '14px', color: 'white' }}>секретная фраза – единственный способ восстановить ваш кошелек</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, mt: 1, margin: "20px" }}>
            <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
            <Secret2 sx={{color: "#ff4d4d", opacity: "0.4"}}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ fontSize: '14px', color: 'white' }}>секретная фраза – это ваша тайна, не позволяйте никому ее узнать</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, mt: 1, margin: "20px" }}>
            <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
            <Secret3 sx={{color: "#ff4d4d", opacity: "0.4"}}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ fontSize: '14px', color: 'white'  }}>секретная фраза – ваша тайна, не делитесь ею ни с кем</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, margin: "20px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                sx={{ color: 'white' }}
              />
            }
            label={<Typography sx={{ color: 'grey', fontSize: "13px" }}>секретная фраза – моя тайна, и я не буду ей делиться ни с кем.</Typography>}
          />
        </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsSecretPage}
              disabled={!isChecked}
            >
              Показать
            </Button>
          </Box>
          
        </Paper>
      )}

      {/* Secret page */}
      {settingsMenuSecretPage && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsSecretPage} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ bgcolor: 'rgba(255, 77, 77, 0.1)', borderRadius: '12px', p: 2, mb: 2, textAlign: 'center', margin: "20px",  }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#ff4d4d', fontSize: "15px" }}>секретная фраза – это ваша тайна, не делитесь ею ни с кем!</Typography>
          <Typography sx={{ color: '#ff4d4d', fontSize: "13px" }}>секретная фраза дает полный контроль над вашим кошельком – эти данные не должны попасть в чужие руки.</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', px: 2 }}>
          {secretPhraseAnswer.map((word, index) => (
            <Box key={index} sx={{ width: '42%', bgcolor: '#222', borderRadius: '50px', p: 1, mb: 1, textAlign: 'center', color: 'white' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{index + 1}. {word}</Typography>
            </Box>
          ))}
        </Box>
        <Box onClick={() => copyToClipboard(secretPhraseText)}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px'}}>
       {!copiedSecret && <CircleIcon sx={{ color: 'white', fontSize: '22px' }} />}
      <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>{copiedSecret ? "Скопировано" : "Копирование в буфер обмена"}</Typography>
    </Box>
    <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsClose}
            >
              Готово
            </Button>
          </Box>
        </Paper>
      )}

      {/* Меню Private */}
      {settingsMenuPrivate && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsPrivate} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box 
            sx={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginBottom: "20px"}}>
            <Box 
              sx={{width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden',display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: "0.2"}}>
              <img 
                src={ImWar} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
          
          <Box sx={{ textAlign: 'center', marginBottom: '25px' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', margin: "30px" }}>Показать приватный ключ</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, mt: 1, margin: "20px" }}>
            <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', mr: 2}}>
              <Secret1 sx={{color: "#ff4d4d", opacity: "0.4"}}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ fontSize: '14px', color: 'white' }}>приватный ключ – единственный способ восстановить ваш кошелек</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, mt: 1, margin: "20px" }}>
            <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
            <Secret2 sx={{color: "#ff4d4d", opacity: "0.4"}}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ fontSize: '14px', color: 'white' }}>приватный ключ – это ваша тайна, не позволяйте никому ее узнать</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, mt: 1, margin: "20px" }}>
            <Box sx={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
            <Secret3 sx={{color: "#ff4d4d", opacity: "0.4"}}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" sx={{ fontSize: '14px', color: 'white'  }}>приватный ключ – ваша тайна, не делитесь ею ни с кем</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, margin: "20px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isCheckedP}
                onChange={handleCheckboxChangeP}
                sx={{ color: 'white' }}
              />
            }
            label={<Typography sx={{ color: 'grey', fontSize: "13px" }}>приватный ключ – моя тайна, и я не буду ей делиться ни с кем.</Typography>}
          />
        </Box>
          <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsPrivatePage}
              disabled={!isCheckedP}
            >
              Продолжить
            </Button>
          </Box>
          
        </Paper>
      )}

      {/* Privat page */}
      {settingsMenuPrivatePage && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsPrivatePage} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ bgcolor: 'rgba(255, 77, 77, 0.1)', borderRadius: '12px', p: 2, mb: 2, textAlign: 'center', margin: "20px",  }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#ff4d4d', fontSize: "15px" }}>приватный ключ – это ваша тайна, не делитесь ею ни с кем!</Typography>
          <Typography sx={{ color: '#ff4d4d', fontSize: "13px" }}>приватный ключ дает полный контроль над вашим кошельком – эти данные не должны попасть в чужие руки.</Typography>
        </Box>
        <Box sx={{ textAlign: 'left', justifyContent: 'left', marginLeft: "15px" }}>
                <Typography  sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "white", fontWeight: "bold", fontSize: "15px"}}>
                  Выбирите аккаунт
                </Typography>
                </Box>
        <PrivateToken image={ImUsd}
              text1Left="Tether(Polygon)"
              text2Left={tetherTextGet}
              method={toggleSettingsPrivateTether} />
           <PrivateToken image={ImTon}
              text1Left="Toncoin"
              text2Left={toncoinTextGet}
              method={toggleSettingsPrivateToncoin} />
             <PrivateToken image={ImMat}
              text1Left="Polygon"
              text2Left={polygonTextGet}
              method={toggleSettingsPrivatePolygon} />
           <PrivateToken image={ImBtc}
              text1Left="Bitcoin"
              text2Left={bitcoinTextGet}
              method={toggleSettingsPrivateBitcoin} />
           <PrivateToken image={ImNot}
              text1Left="Avax"
              text2Left={notcoinTextGet}
              method={toggleSettingsPrivateNotcoin} />
    
        </Paper>
      )}

      {/* Private key tether */}
      {settingsMenuPrivateTether && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsPrivateTether} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ bgcolor: 'rgba(255, 77, 77, 0.1)', borderRadius: '12px', p: 2, mb: 2, textAlign: 'center', margin: "20px",  }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#ff4d4d', fontSize: "15px" }}>приватный ключ – это ваша тайна, не делитесь ею ни с кем!</Typography>
          <Typography sx={{ color: '#ff4d4d', fontSize: "13px" }}>приватный ключ дает полный контроль над вашим кошельком – эти данные не должны попасть в чужие руки.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
            borderRadius: '12px',
            p: 2,
            textAlign: 'center',
            color: 'white',
            border: "1px solid grey"
          }}
        >
          <Typography sx={{ wordBreak: 'break-all' }}>{privatePhraseTether}</Typography>
        </Box>
        
         <Box onClick={() => copyToClipboardTether(privatePhraseTether)}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px'}}>
      {!copiedTether && <CircleIcon sx={{ color: 'white', fontSize: '22px' }} />}
      <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>{copiedTether ? "Скопировано" : "Копирование в буфер обмена"}</Typography>
    </Box>
    <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsCloseTether}
            >
              Готово
            </Button>
          </Box>
          
        </Paper>
      )}
      {/* Private key toncoin */}
      {settingsMenuPrivateToncoin && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsPrivateToncoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ bgcolor: 'rgba(255, 77, 77, 0.1)', borderRadius: '12px', p: 2, mb: 2, textAlign: 'center', margin: "20px",  }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#ff4d4d', fontSize: "15px" }}>приватный ключ – это ваша тайна, не делитесь ею ни с кем!</Typography>
          <Typography sx={{ color: '#ff4d4d', fontSize: "13px" }}>приватный ключ дает полный контроль над вашим кошельком – эти данные не должны попасть в чужие руки.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
            borderRadius: '12px',
            p: 2,
            textAlign: 'center',
            color: 'white',
            border: "1px solid grey"
          }}
        >
          <Typography sx={{ wordBreak: 'break-all' }}>{privatePhraseToncoin}</Typography>
        </Box>
        
         <Box onClick={() => copyToClipboardToncoin(privatePhraseToncoin)}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px'}}>
      {!copiedToncoin && <CircleIcon sx={{ color: 'white', fontSize: '22px' }} />}
      <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>{copiedToncoin ? "Скопировано" : "Копирование в буфер обмена"}</Typography>
    </Box>
    <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsCloseToncoin}
            >
              Готово
            </Button>
          </Box>
          
        </Paper>
      )}
      {/* Private key Notcoin */}
      {settingsMenuPrivateNotcoin && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsPrivateNotcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ bgcolor: 'rgba(255, 77, 77, 0.1)', borderRadius: '12px', p: 2, mb: 2, textAlign: 'center', margin: "20px",  }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#ff4d4d', fontSize: "15px" }}>приватный ключ – это ваша тайна, не делитесь ею ни с кем!</Typography>
          <Typography sx={{ color: '#ff4d4d', fontSize: "13px" }}>приватный ключ дает полный контроль над вашим кошельком – эти данные не должны попасть в чужие руки.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
            borderRadius: '12px',
            p: 2,
            textAlign: 'center',
            color: 'white',
            border: "1px solid grey"
          }}
        >
          <Typography sx={{ wordBreak: 'break-all' }}>{privatePhraseNotcoin}</Typography>
        </Box>
        
         <Box onClick={() => copyToClipboardNotcoin(privatePhraseNotcoin)}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px'}}>
      {!copiedNotcoin && <CircleIcon sx={{ color: 'white', fontSize: '22px' }} />}
      <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>{copiedNotcoin ? "Скопировано" : "Копирование в буфер обмена"}</Typography>
    </Box>
    <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsCloseNotcoin}
            >
              Готово
            </Button>
          </Box>
          
        </Paper>
      )}
      {/* Private key Polygon */}
      {settingsMenuPrivatePolygon && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsPrivatePolygon} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ bgcolor: 'rgba(255, 77, 77, 0.1)', borderRadius: '12px', p: 2, mb: 2, textAlign: 'center', margin: "20px",  }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#ff4d4d', fontSize: "15px" }}>приватный ключ – это ваша тайна, не делитесь ею ни с кем!</Typography>
          <Typography sx={{ color: '#ff4d4d', fontSize: "13px" }}>приватный ключ дает полный контроль над вашим кошельком – эти данные не должны попасть в чужие руки.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
            borderRadius: '12px',
            p: 2,
            textAlign: 'center',
            color: 'white',
            border: "1px solid grey"
          }}
        >
          <Typography sx={{ wordBreak: 'break-all' }}>{privatePhrasePolygon}</Typography>
        </Box>
        
         <Box onClick={() => copyToClipboardPolygon(privatePhrasePolygon)}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px'}}>
      {!copiedPolygon && <CircleIcon sx={{ color: 'white', fontSize: '22px' }} />}
      <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>{copiedPolygon ? "Скопировано" : "Копирование в буфер обмена"}</Typography>
    </Box>
    <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsClosePolygon}
            >
              Готово
            </Button>
          </Box>
          
        </Paper>
      )}
      {/* Private key Bitcoin */}
      {settingsMenuPrivateBitcoin && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsPrivateBitcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ bgcolor: 'rgba(255, 77, 77, 0.1)', borderRadius: '12px', p: 2, mb: 2, textAlign: 'center', margin: "20px",  }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#ff4d4d', fontSize: "15px" }}>приватный ключ – это ваша тайна, не делитесь ею ни с кем!</Typography>
          <Typography sx={{ color: '#ff4d4d', fontSize: "13px" }}>приватный ключ дает полный контроль над вашим кошельком – эти данные не должны попасть в чужие руки.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
            borderRadius: '12px',
            p: 2,
            textAlign: 'center',
            color: 'white',
            border: "1px solid grey"
          }}
        >
          <Typography sx={{ wordBreak: 'break-all' }}>{privatePhraseBitcoin}</Typography>
        </Box>
        
         <Box onClick={() => copyToClipboardBitcoin(privatePhraseBitcoin)}
      sx={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10px'}}>
      {!copiedBitcoin && <CircleIcon sx={{ color: 'white', fontSize: '22px' }} />}
      <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>{copiedBitcoin ? "Скопировано" : "Копирование в буфер обмена"}</Typography>
    </Box>
    <Box sx={{ textAlign: 'center', position: 'fixed', bottom: '50px', width: '100%', left: 0 }}>
            <Button
              variant="contained"
              style={{ borderRadius: '50px', height: '50px', width: '90%', backgroundColor: '#D5A9D9', textTransform: 'capitalize', fontWeight: 'bold' }}
              onClick={toggleSettingsCloseBitcoin}
            >
              Готово
            </Button>
          </Box>
          
        </Paper>
      )}

     

      {settingsMenuOpen2 && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleSettingsMenu2} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box 
            sx={{display: 'flex',alignItems: 'center',justifyContent: 'center', marginBottom: "10px"}}>
            <Box 
              sx={{width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={ImPurple} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
          <Typography sx={{ color: 'grey', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Account 1</Typography>
          <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Имя</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{webUserFirst ? webUserFirst : "Отсутствует"} </Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>ID</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{webUserId}</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Username</Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{webUserUser ? webUserUser : "Отсутствует"}</Typography>
              </Box>
            </Box>
            <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Данные предоставлены telegram.org</Typography>
              </Box>
              <Box sx={{ width: '90%', height: '50px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box onClick={infoDelitToggle} sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "15px 0" }}>
                <Typography variant="body1" sx={{ fontSize: '15px', color: '#ff4d4d' }}>Удалить аккаунт</Typography>
              </Box>
              </Box>
        </Paper>
      )}

      {/* Меню QR кода */}
      {qrCodeMenuOpen && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleQrCodeMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <SendBase image={ImUsd} text1Left="Tether" symbol="USDT" text2Left="(Polygon)" method={toggleQrTether} />
          <SendBase image={ImTon} text1Left="Toncoin" symbol="TON" text2Left=" "  method={toggleQrToncoin} />
          <SendBase image={ImNot} text1Left="Avax" symbol="AVAX" text2Left=" " method={toggleQrNotcoin} />
          <SendBase image={ImMat} text1Left="Polygon" symbol="MATIC" text2Left=" " method={toggleQrPolygon} />
          <SendBase image={ImBtc} text1Left="Bitcoin" symbol="BTC" text2Left=" " method={toggleQrBitcoin} />
        </Paper>
      )}

      {/* QR thether */}
      {qrTether && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleQrTether} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
            <Box sx={{ width: '155px', height: '155px', bgcolor: 'white', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "15px" }}>
              <QRCode value={adressTether} />
            </Box>
          </Box>
      <Typography sx={{ color: 'grey', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Отсканируйте QR Code</Typography>
      <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Название токена</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Tether</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Polygon (PoS)</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Адрес</Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(adressTether)}</Typography>
              </Box>
                
              
            </Box>
        </Paper>
      )}

      {/* QR toncoin */}
      {qrToncoin && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleQrToncoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
            <Box sx={{ width: '155px', height: '155px', bgcolor: 'white', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "15px" }}>
              <QRCode value={adressToncoin} />
            </Box>
          </Box>
      <Typography sx={{ color: 'grey', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Отсканируйте QR Code</Typography>
      <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Название токена</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Toncoin</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>TON</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Адрес</Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(adressToncoin)}</Typography>
              </Box>
                
              
            </Box>
        </Paper>
      )}

      {/* QR Notcoin */}
      {qrNotcoin && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleQrNotcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
            <Box sx={{ width: '155px', height: '155px', bgcolor: 'white', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "15px" }}>
              <QRCode value={adressNotcoin} />
            </Box>
          </Box>
      <Typography sx={{ color: 'grey', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Отсканируйте QR Code</Typography>
      <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Название токена</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Avax</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Avalanche C-Chain</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Адрес</Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(adressNotcoin)}</Typography>
              </Box>
                
              
            </Box>
        </Paper>
      )}

      {/* QR polygon */}
      {qrPolygon && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleQrPolygon} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
            <Box sx={{ width: '155px', height: '155px', bgcolor: 'white', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "15px" }}>
              <QRCode value={adressPolygon} />
            </Box>
          </Box>
      <Typography sx={{ color: 'grey', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Отсканируйте QR Code</Typography>
      <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Название токена</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Polygon</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>MATIC</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Адрес</Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(adressPolygon)}</Typography>
              </Box>
                
              
            </Box>
        </Paper>
      )}

      {/* QR bitcoin */}
      {qrBitcoin && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleQrBitcoin} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30%' }}>
            <Box sx={{ width: '155px', height: '155px', bgcolor: 'white', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "15px" }}>
              <QRCode value={adressBitcoin} />
            </Box>
          </Box>
      <Typography sx={{ color: 'grey', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Отсканируйте QR Code</Typography>
      <Box sx={{ width: '90%', height: '152px', bgcolor: '#444', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777'  }}>Название токена</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>Bitcoin</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Сеть</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>BTC</Typography>
              </Box>
              <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777' }}>Адрес</Typography>
                

                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white' }}>{formatAddress(adressBitcoin)}</Typography>
              </Box>
                
              
            </Box>
        </Paper>
      )}

      {/* Меню аккаунта */}
      {accountMenuOpen && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleAccountMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <MenuItem icon={<SettingsIcon />} text="Настройки" />
          <MenuItem icon={<QrCodeIcon />} text="QR код" />
          <MenuItem icon={<ArrowForwardIcon />} text="Выйти" />
        </Paper>
      )}

      {/* Управление токенами */}
      {tokenMenuOpen && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleTokenMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box
      sx={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '20px'
      }}
    >
      <PlaylistAddIcon sx={{ color: '#555', fontSize: '22px' }} />
      <Typography sx={{ color: '#777', fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>Управляй своим списком токенов</Typography>
    </Box>
          {tokensList.map(token => (
            <Box key={token.name} sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
              <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
                <img src={token.image} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Typography variant="body1" sx={{ flex: 1, fontSize: '12px', color: 'white', fontWeight: "bold" }}>{token.name}</Typography>
              <Switch
                checked={tokens[token.name]}
                onChange={() => handleTokenToggle(token.name)}
                color="primary"
              />
            </Box>
          ))}
        </Paper>
      )}
      {/* Меню Получения */}
      {getToken && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleGetToken} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
              <GettingToken image={ImUsd}
              text1Left="Tether(Polygon)"
              text2Left={tetherTextGet}
              method={CopyTether}
              copied={copied} />
           <GettingToken image={ImTon}
              text1Left="Toncoin"
              text2Left={toncoinTextGet}
              method={CopyToncoin}
              copied={copied2} />
             <GettingToken image={ImMat}
              text1Left="Polygon"
              text2Left={polygonTextGet}
              method={CopyPolygon}
              copied={copied3} />
           <GettingToken image={ImBtc}
              text1Left="Bitcoin"
              text2Left={bitcoinTextGet}
              method={CopyBitcoin}
              copied={copied4} />
           <GettingToken image={ImNot}
              text1Left="Avax"
              text2Left={notcoinTextGet}
              method={CopyNotcoin}
              copied={copied5} />    
        </Paper>
      )}
      {/* Меню tether */}
     {/* Меню tether */}
{tetherBase && (
  <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
    <Box onClick={tetherBaseMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
      <ArrowBackIcon />Назад
    </Box>
    <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
      <Typography sx={{ color: 'white', fontSize: '40px' }}>{formattedBalanceUSDT} USDT</Typography>
      <Typography sx={{ color: 'white', fontSize: '16px' }}>
        {formatPrice(totalSum)}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px', gap: '30px' }}>
        <InfoBox onClick={toggleGetTetherMenu} icon={<AddIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Получить" />
        <InfoBox onClick={toggleSendMenuTether} icon={<TelegramIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Отправить" />
        <InfoBox onClick={toggleStakingTether} icon={<SwapHorizontalCircleIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Стейкинг" />
      </Box>
      <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
        <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
          Стейкинг
        </Typography>
      </Box>
      <Box>
        <Staking method={toggleStakingTetherI}/>
      </Box>
      <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
        <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
          О Tether
        </Typography>
      </Box>
      <CustomRectangle tokenname="Tether(USDT)"  netname="Polygon (Pos)"   pricenumber={formatPrice(priceUsd)}/>

      
    </Box>
  </Paper>
)}


      {sendInfo && (
              <Paper sx={{  position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
                <Box onClick={toggleSendInfo} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
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
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold"   }}>Дата</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white', fontWeight: "bold"  }}>Jun 19, 2024 в 10:51 am</Typography>
              </Box>
              <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold"  }}>Статус</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'lightgreen', fontWeight: "bold"  }}>Успешно</Typography>
              </Box>
              <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold"  }}>Откуда</Typography>
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white', fontWeight: "bold"  }}>0xA6...d1dV</Typography>
              </Box>
              <Box sx={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
                <Typography variant="body1" sx={{ fontSize: '13px', color: '#777', fontWeight: "bold"  }}>Сеть</Typography>                
                <Typography variant="body1" sx={{ fontSize: '13px', color: 'white', fontWeight: "bold"  }}>Polygon (Pos)</Typography>
              </Box>                            
            </Box>
                
                

          </Box>
          
                    
              </Paper>
            )}

      {/* Меню toncoin */}
      {toncoinBase && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toncoinBaseMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white', fontSize: '40px' }}>0 TON</Typography>
            <Typography sx={{ color: 'white', fontSize: '16px' }}>
              $0.00 
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px', gap: '30px' }}>
              <InfoBox onClick={toggleGetToncoinMenu} icon={<AddIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Получить" />
              <InfoBox onClick={toggleSendMenuToncoin}icon={<TelegramIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Отправить" />
              <InfoBox onClick={toggleStakingToncoin} icon={<SwapHorizontalCircleIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Стейкинг" />
              </Box>
              <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  Стейкинг
                </Typography>
                </Box>
                <Box>
                    <Staking method={toggleStakingToncoinI}/>
                </Box>
                <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  О Toncoin
                </Typography>
                </Box>
                <CustomRectangle tokenname="Toncoin"  netname="TON"   pricenumber={formatPrice(priceTon)}/>
          </Box>
        </Paper>
      )}

      {/* Меню notcoin */}
      {notcoinBase && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={notcoinBaseMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white', fontSize: '40px' }}>0 AVAX</Typography>
            <Typography sx={{ color: 'white', fontSize: '16px' }}>
            {formatPrice(totalSum5)} 
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px', gap: '30px' }}>
              <InfoBox onClick={toggleGetNotcoinMenu} icon={<AddIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Получить" />
              <InfoBox onClick={toggleSendMenuNotcoin}icon={<TelegramIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Отправить" />
              <InfoBox onClick={toggleStakingNotcoin} icon={<SwapHorizontalCircleIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Стейкинг" />
              </Box>
              <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  Стейкинг
                </Typography>
                </Box>
                <Box>
                    <Staking method={toggleStakingNotcoinI}/>
                </Box>
                <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  О Avax
                </Typography>
                </Box>
                <CustomRectangle tokenname="Avax"  netname="Avalanche C-Chain"   pricenumber={formatPrice(priceNot)}/>
          </Box>
        </Paper>
      )}

      {/* Меню polygon */}
      {polygonBase && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={polygonBaseMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white', fontSize: '40px' }}>0 MATIC</Typography>
            <Typography sx={{ color: 'white', fontSize: '16px' }}>
            {formatPrice(totalSum6)} 
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px', gap: '30px' }}>
              <InfoBox onClick={toggleGetPolygonMenu} icon={<AddIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Получить" />
              <InfoBox onClick={toggleSendMenuPolygon}icon={<TelegramIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Отправить" />
              <InfoBox onClick={toggleStakingPolygon} icon={<SwapHorizontalCircleIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Стейкинг" />
              </Box>
              <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  Стейкинг
                </Typography>
                </Box>
                <Box>
                    <Staking method={toggleStakingPolygonI}/>
                </Box>
                <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  О Polygon
                </Typography>
                </Box>
                <CustomRectangle tokenname="Polygon"  netname="MATIC"   pricenumber={formatPrice(priceMat)}/>
          </Box>
        </Paper>
      )}

      {/* Меню bitcoin */}
      {bitcoinBase && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={bitcoinBaseMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white', fontSize: '40px' }}>{formattedBalanceBTC} BTC</Typography>
            <Typography sx={{ color: 'white', fontSize: '16px' }}>
            {formatPrice(totalSum3)}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px', gap: '30px' }}>
              <InfoBox onClick={toggleGetBitcoinMenu} icon={<AddIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Получить" />
              <InfoBox onClick={toggleSendMenuBitcoin}icon={<TelegramIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Отправить" />
              <InfoBox onClick={toggleStakingBitcoin} icon={<SwapHorizontalCircleIcon sx={{ color: '#BE98C2B5', fontSize: '40px' }} />} text="Стейкинг" />
              </Box>
              <Box  sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  Стейкинг
                </Typography>
                </Box>
                <Box>
                    <Staking method={toggleStakingBitcoinI} />
                </Box>
                <Box sx={{ textAlign: 'left', justifyContent: 'left', margin: "15px" }}>
                <Typography variant="h7" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666", fontWeight: "bold"}}>
                  О Bitcoin
                </Typography>
                </Box>
                <CustomRectangle tokenname="Bitcoin"  netname="BTC"   pricenumber={formatPrice(priceBtc)}/>
          </Box>
        </Paper>
      )}

      {/* Меню Получения tether */}
      {getTetherMenu && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleGetTetherMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <GettingToken image={ImUsd}
              text1Left=" Tether (Polygon)"
              text2Left={tetherTextGet}
              method={CopyTether}
              copied={copied} />
              
        </Paper>
      )}
      {/* Меню Получения toncoin */}
      {getToncoinMenu && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleGetToncoinMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant="body1" sx={{ fontSize: '16px', color: 'grey', }}>
                        Tag/Memo не требуется
                      </Typography>
                    </Box>
          <GettingToken image={ImTon}
              text1Left="Toncoin"
              text2Left={toncoinTextGet}
              method={CopyToncoin}
              copied={copied2} />
              
        </Paper>
      )}
      {/* Меню Получения notcion */}
      {getNotcoinMenu && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleGetNotcoinMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <GettingToken image={ImNot}
              text1Left="Avax"
              text2Left={notcoinTextGet}
              method={CopyNotcoin}
              copied={copied3} />
              
        </Paper>
      )}
      {/* Меню Получения polygon */}
      {getPolygonMenu && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleGetPolygonMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <GettingToken image={ImMat}
              text1Left="Polygon"
              text2Left={polygonTextGet}
              method={CopyPolygon}
              copied={copied4} />
              
        </Paper>
      )}
      {/* Меню Получения bitcoin */}
      {getBitcoinMenu && (
        <Paper sx={{ position: 'fixed', color: "white", bottom: 0, left: 0, width: '100%', height: '96%', bgcolor: '#333', padding: '0px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: 1200, borderRadius: '12px 12px 0 0', animation: 'slide-up 0.3s ease-in-out' }}>
          <Box onClick={toggleGetBitcoinMenu} sx={{ height: '30px', bgcolor: '#444', display: 'flex', alignItems: 'center', justifyContent: 'left', borderRadius: '12px 12px 0 0', marginBottom: '10px', padding: "10px" }}>
            <ArrowBackIcon />Назад
          </Box>
          <GettingToken image={ImBtc}
              text1Left="Bitcoin"
              text2Left={bitcoinTextGet}
              method={CopyBitcoin}
              copied={copied5} />
              
        </Paper>
      )}

    </Box>
  );
};

const MenuItem = ({ icon, text, method }) => (
  <Box onClick={method} sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
    {icon}
    <Typography variant="body1" sx={{ ml: 2 }}>{text}</Typography>
    <Box sx={{ flex: 1 }} />
    <IconButton color="inherit">
      <ArrowForwardIcon />
    </IconButton>
  </Box>
);

const InfoBox = ({ icon, text, onClick }) => (
  <Box onClick={onClick} sx={{ width: '62px', height: '62px', bgcolor: '#444', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 1, textAlign: 'center' }}>
    {icon}
    <Typography variant="caption" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "#666" }}>
      {text}
    </Typography>
  </Box>
);

const ProfileItem = ({ image, text1Left, text1Right, text2Left, text2Right, method }) => (
  <Box onClick={method} sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, marginBottom: "5px" }}>
    <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
      <img src={image} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ fontSize: '12px', color: 'white', fontWeight: "bold" }}>{text1Left}</Typography>
        <Typography variant="body1" sx={{ fontSize: '12px', color: 'white', fontWeight: "bold" }}>{text1Right}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ fontSize: '10px', color: 'gray' }}>{text2Left}</Typography>
        <Typography variant="body2" sx={{ fontSize: '10px', color: 'gray' }}>{text2Right}</Typography>
      </Box>
    </Box>
  </Box>
);

const SendBase = ({ image, text1Left, text2Left, method, symbol }) => (
  <Box onClick={method} sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
    <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', mr: 2 }}>
      <img src={image} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ fontSize: '14px', color: 'white', fontWeight: "bold" }}>{text1Left}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ fontSize: '14px', color: 'gray' }}>{text2Left} {symbol}</Typography>
      </Box>
    </Box>
  </Box>
);

const Staking = ({method}) => (
  <Box onClick={method}sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "20px" }}>
    <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', marginRight: 2, bgcolor: "lightyellow" }}>
      <img src={ImStk} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
    <Box sx={{ flex: 1 }}>
      <Typography variant="body1" sx={{ fontSize: '14px', color: 'white', fontWeight: "bold" }}>Заробатывайте TON</Typography>
      <Typography variant="body2" sx={{ fontSize: '14px', color: '#666' }}>Стейкайте токены и получи...</Typography>
    </Box>
  </Box>
);

const CustomRectangle = ({ tokenname, netname, pricenumber}) => (
  <Box sx={{ width: '90%', height: '112px', bgcolor: '#444', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '0 auto', mt: '20px' }}>
    <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <Typography variant="body1" sx={{ fontSize: '14px', color: '#777', fontWeight: 'bold' }}>Имя токена</Typography>
      <Typography variant="body1" sx={{ fontSize: '14px', color: 'white', fontWeight: 'bold' }}>{tokenname}</Typography>
    </Box>
    <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
      <Typography variant="body1" sx={{ fontSize: '14px', color: '#777' }}>Сеть</Typography>
      <Typography variant="body1" sx={{ fontSize: '14px', color: 'white' }}>{netname}</Typography>
    </Box>
    <Box sx={{ height: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderTop: '1px solid #222' }}>
      <Typography variant="body1" sx={{ fontSize: '14px', color: '#777' }}>Цена</Typography>
      <Typography variant="body1" sx={{ fontSize: '14px', color: 'white' }}>{pricenumber}</Typography>
    </Box>
  </Box>
);

const GettingToken = ({ image, text1Left, text2Left, method, copied }) => (
  <Box onClick={method} sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
    <Box sx={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', marginRight: 2 }}>
      <img src={image} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
    <Box sx={{ flex: 1 }}>
      <Typography variant="body1" sx={{ fontSize: '18px', color: 'white', fontWeight: "bold" }}>{text1Left}</Typography>
      <Typography variant="body2" sx={{ fontSize: '18px', color: 'gray' }}>{text2Left}</Typography>
    </Box>
    <Box sx={{ width: '48px', height: '48px', borderRadius: '50%', bgcolor: copied ? '#777' : '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircleIcon sx={{ fontSize: 18, color: 'white' }} />
    </Box>
  </Box>
);

const PrivateToken = ({ image, text1Left, text2Left, method }) => (
  <Box onClick={method} sx={{ display: 'flex', alignItems: 'center', py: 1, px: 2, bgcolor: '#444', borderRadius: '12px', mt: 1, margin: "10px" }}>
    <Box sx={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', marginRight: 2 }}>
      <img src={image} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Box>
    <Box sx={{ flex: 1 }}>
      <Typography variant="body1" sx={{ fontSize: '12px', color: 'white', fontWeight: "bold" }}>{text1Left}</Typography>
      <Typography variant="body2" sx={{ fontSize: '12px', color: 'gray' }}>{text2Left}</Typography>
    </Box>
   
  </Box>
);

export default DollarPage;