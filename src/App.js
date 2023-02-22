import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Serach from './Components/Serach/Serach';
import Dashboeard from './Components/Dashboard/Dashboeard';
import Win from './Components/Win/Win';
import Login from './Components/Login/Login';
import Navlogin from './Components/Login/Navlogin';
import Register from './Components/Register/Register';
import Resetpassword from './Components/Resetpassword/Resetpassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';  
import Mine from './Components/mine/Mine';
import Recharge from './Components/Recharge/Recharge';
import Recharge_Record from './Components/Recharge/Recharge_Record';
import TendParity from './Components/TendParity/TendParity';
import Orders from './Components/Orders/Orders';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/serach" element={<Serach />}/>
          <Route path="/dashboard" element={<Dashboeard />}/>
          <Route path="/win" element={<Win />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/login-nav" element={<Navlogin />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/resetpassword" element={<Resetpassword />}/>
          <Route path="/mine" element={<Mine />}/>
          <Route path="/recharge" element={<Recharge />}/>
          <Route path="/Recharge_Record" element={<Recharge_Record />}/>
          <Route path="/TendParity" element={<TendParity />}/>
          <Route path="/Orders" element={<Orders />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
