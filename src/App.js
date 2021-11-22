import './App.css';
import Portfolio from './components/Portfolio';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <div className="App bgBlack">
     <Header />
     <Portfolio />
     <Footer />
    </div>
  );
}

export default App;
