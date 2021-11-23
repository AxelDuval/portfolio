import './App.css';
import { Routes, Route} from "react-router-dom";

import Portfolio from './components/Portfolio';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Bio from './components/Bio';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App bgBlack">
      <Header />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="Bio" element={<Bio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
