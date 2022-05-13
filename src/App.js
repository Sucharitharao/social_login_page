import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Google from './Pages/Google';
import UserDetails from './Pages/UserDetails';
import Facebook from './Pages/Facebook';

function App  ()  {
  const user = "";
  return (
    <BrowserRouter>
    <Navbar user={user}/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={user ? <Navigate to="/" /> : <Login/>}/>
      <Route path="/google" element={<Google/>}/>
      <Route path="/facebook" element={<Facebook/>}/>
      <Route path="/UserDetails" element={<UserDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
