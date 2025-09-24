// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Fabricas from './pages/Fabricas';
import Produtos from './pages/Produtos';
import Carrinho from './pages/Carrinho';
import Header from './pages/Header';
import Footer from './pages/Footer';

import "./styles/global.css";


function App() {
  return (
    <BrowserRouter basename="/dorica_sales">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/fabricas" replace />} />
        <Route path="/fabricas" element={<Fabricas />} />
        <Route path="/produtos/:id" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

