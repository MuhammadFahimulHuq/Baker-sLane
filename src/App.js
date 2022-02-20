
import './App.css';
import { ContactNav } from './components/ContactNav';
import { Greeting } from './components/Greeting';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

function App() {
  return (
    <div className="App">
   <Home />
   <Menu />
   <Contact/>
    </div>
  );
}

export default App;
