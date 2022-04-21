import Login from './pages/Login/Login';
import HomeAnalistas from './pages/HomeAnalistas/HomeAnalistas';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home-analistas" element={<HomeAnalistas />} />
      </Routes>
    </Router>
  );
}

export default App;
