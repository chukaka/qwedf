import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClaimPage from './pages/ClaimPage';
import Boost from './pages/Boost';
import Task from './pages/Task';
import Desktop from './pages/Desktop';
import { UserProvider, useUserContext } from './context/UserContext'; // Импортируем хук useUserContext
import Stars from './pages/Stars';
import Swap from './pages/Swap';
import CryptoReceive from './pages/CryptoReceive';
import Web3 from './pages/Web3';

function App() {
  const { contextData } = useUserContext(); // Получаем контекст

  if (!contextData.pageLoaded) { // Если страница не загружена
    return <Desktop />; // Отображаем компонент Desktop
  }

  return (
    <div className="App">
      <Stars />
      <Router basename="/qwedf">
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={Swap} path="/claim" exact />
          <Route component={Boost} path="/boost" exact />
          <Route component={Task} path="/task" exact />
          <Route component={CryptoReceive} path="/qr" exact />
          <Route component={Web3} path="/web3" />
        </Switch>
      </Router>
    </div>
  );
}

function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default AppWrapper;
