import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Solutions from './Pages/Solutions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
