import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FishGame from './pages/FishGame';

function App() {
  return (
    <BrowserRouter>
      <Header title="#" />
      <div className="pt-16 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fishgame" element={<FishGame />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
