import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
function App() {
  return (
    <>
      <Header title='#' />
      <div className='pt-16'> {/* 設定 Header 的 padding-top 讓內容不會被 Header 蓋住 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
