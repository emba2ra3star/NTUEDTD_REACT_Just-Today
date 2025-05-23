import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FishGame from './pages/FishGame';
import Pomodoro from './pages/Pomodoro';
import TodoList from './pages/TodoList';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header title="#" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fishgame" element={<FishGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/Pomodoro" element={<Pomodoro />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
