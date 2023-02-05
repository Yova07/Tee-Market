import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import Categories from './pages/Categories';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Basket from './pages/Basket';
import { basketContext } from './context/BasketContext';
import { useState } from 'react';


function App() {

  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <div>
        <basketContext.Provider value={{ basket, setBasket }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:category' element={<Categories />} />
            <Route path='/about' element={<About />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product/:product' element={<SingleProduct />} />
            <Route path='/basket' element={<Basket />} />
          </Routes>
        </basketContext.Provider>
      </div>
    </div >
  );
}

export default App;
