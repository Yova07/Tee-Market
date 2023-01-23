import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import Categories from './pages/Categories';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Categories />} />
          <Route path='/about' element={<About />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product/:product' element={<SingleProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
