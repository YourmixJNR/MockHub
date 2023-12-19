import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Solutions from './Pages/Solutions';

function App() {
  return (
    <BrowserRouter>
    {/* <Router> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
    {/* </Router> */}
    
      {/* <Home /> */}
    
    </BrowserRouter>
  );
}

export default App;
