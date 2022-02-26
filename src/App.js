
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import "swiper/css/bundle";
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';


function App() {
  return (
    <BrowserRouter>
    <Routes>
  
  
      <Route path="/" exact element={ <Home />} />
   <Route path="/menu" element={  <Menu/>}/>
 <Route path="/contact" element={<Contact />} />

   


  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
