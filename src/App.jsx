import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route exact path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )

};

export default App