
import './App.css';
import { Address } from './Components/Address';
import { Footer } from './Components/Footer';
import { Homepage } from './Components/Homepage';
import { Routes, Route } from 'react-router-dom'
import { Login } from './Components/Login';
import { Registration } from './Components/Ragistration';
import ConnectUsPage from './Components/ConnectUs';
import { Navbar } from './Components/Navbar';
import Chat from './Components/Chat';
import { Women } from './Components/Women';
import { Kids } from './Components/Kids';
import { New } from './Components/New';
import Sidebar from './Components/Sidebar';
import { Men } from './Components/Men';
import { ProductPage, SinglePage } from './Components/SinglePage';
import CartPage, { AddToCartPage, Cart } from './Components/AddToCartPage';
import { BuyNowPage } from './Components/BuyNowPage';






function App() {
  return (
    <>
      <Routes>
        <Route excat path='/' element={<Homepage />} />
        <Route excat path='address' element={<Address />} />
        <Route excat path='footer' element={<Footer />} />
        <Route excat path='login' element={<Login />} />
        <Route excat path='register' element={<Registration />} />
        <Route excat path='conectus' element={<ConnectUsPage />} />
        <Route excat path='nav' element={<Navbar />} />
        <Route excat path='chat' element={<Chat/>} />
        <Route excat path='women' element={<Women/>} />
        <Route excat path='kids' element={<Kids/>} />
        <Route excat path='new' element={<New/>} />
        <Route excat path='sidebar' element={<Sidebar/>} />
        <Route excat path='men' element={<Men/>} />
        <Route excat path='singlepage' element={<ProductPage/>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route excat path='cart' element={<Cart/>} />
        <Route excat path='buynow' element={<BuyNowPage/>} />
        <Route path="/" element={<Kids />} />
        <Route path="/cart/:id" element={<Cart />} />
        
       
     
        
        
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
