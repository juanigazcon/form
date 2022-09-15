import './App.css';
import './estilos.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import  ItemsProvider  from './components/CartContext';
import { Cart } from './components/Cart';


function App() {

  return (
    <ItemsProvider>
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/product/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ItemsProvider>

  );
}

export default App;
