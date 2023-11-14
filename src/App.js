import HomePage from './pages/homePage/homePage';
import DetailsPage from './pages/detailsPage/detailsPage';
import RegisterPage from './pages/registerPage/registerPage';
import AddGamesPage from './pages/addGamesPage/addGamesPage';
import LoginPage from './pages/loginPage/loginPage';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/homePage"  element={<HomePage />} />
        <Route path="/registerPage"  element={<RegisterPage/>} />
        <Route path="/detailsPage"  element={<DetailsPage/>} />
        <Route path="/addGamesPage"  element={<AddGamesPage/>} />
      </Routes>
      </Router>
  );
}

export default App;
