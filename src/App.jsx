import './App.css'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './components/home/Home'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { Contact } from './components/contact/Contact'
import { Error } from './components/error/Error'
import { CartWidget } from './components/cartWidget/CartWidget'
import { NavBar } from './components/navBar/NavBar'
import { DetailItem } from './components/detailItem/DetailItem'
import { CartContext } from './context/CartContext'
import { DetailCartWidget } from './components/detailCardWidget/DetailCardWidget'

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <CartContext.Provider value={{carrito, setCarrito}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar cartWidget={CartWidget}/>}>
              <Route index element={<Home />}/>
              <Route path='inicio' element={<Home />}/>
              <Route path='productos' element={<ItemListContainer />}/>
              <Route path='productos/:id' element={<DetailItem/>}/>
              <Route path='category/:id' element={<ItemListContainer/>}/>
              <Route path='contacto' element={<Contact />}/>
              <Route path='detalleCarrito' element={<DetailCartWidget />}/>
              <Route path='*' element={<Error />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App
