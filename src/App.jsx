import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AOS from "aos";
import 'aos/dist/aos.css';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App