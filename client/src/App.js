import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import Categories from './pages/Categories';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Basket from './pages/Basket';
import UserPannel from './pages/UserPannel';
import UserProfil from './components/UserProfil';
import UserFavorites from './components/UserFavorites';
import { useAuthContext } from './context/UserContext';
import Help from './pages/Help';
import Navbar from './components/Navbar';

function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Categories />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product/:product' element={<SingleProduct />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/user' element={<UserPannel />} >
            <Route path='profil' element={<UserProfil />} />
            <Route path='favorites' element={<UserFavorites />} />
          </Route>
          <Route path='/help' element={<Help />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
