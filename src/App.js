import './App.css';
import Login from './components/pages/Login';
import Inicio from './components/pages/Inicio';
import Registro from './components/pages/Registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={
            <Registro/>
          }/>
          <Route path="/" element={
            <Login/>
          }/>
          <Route path='/inicio/*' element={
            <Inicio/>
          }/>
        </Routes>      
      </BrowserRouter>

    </div>
  );
}

export default App;
