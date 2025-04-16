import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FishGame from './pages/FishGame';
import Pomodoro from './pages/Pomodoro';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header title="#" />
        <div className="pt-16 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fishgame" element={<FishGame />} />
            <Route path="/about" element={<About />} />
            <Route path="/Pomodoro" element={<Pomodoro />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
