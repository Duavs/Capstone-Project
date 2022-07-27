import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Play from "./pages/Play/Play";
import Practice from "./pages/Practice/Practice";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Admin from "./pages/Admin/Admin";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import Fingerspell from "./pages/Admin/Fingerspell/Fingerspell";
import SpellHandSign from "./pages/Admin/SpellHandSign/SpellHandSign";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/play-game" element={<Play />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/administrator" element={<Admin />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/administrator/finger-spell" element={<Fingerspell />} />
        <Route path="/administrator/spell-hand-sign" element={<SpellHandSign />} />
      </Routes>
      <ToastContainer
        autoClose={1500}
        pauseOnFocusLoss={false}
      />
    </div>
  );
}

export default App;
