import Home from './components/homepage/home';
import Login from './components/loginpage/login';
import Signup from './components/signup/signup';
import Admin from './components/adminpage/admin';
import Cart from './components/cart/cart'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin"  element={<Admin/>}/>
          <Route path="/cart"  element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
