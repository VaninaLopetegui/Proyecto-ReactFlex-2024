import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './components/home/home'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { Contact } from './components/contact/Contact'
import { Error } from './components/Error'
import { CartWidget } from './components/cartWidget/CartWidget'
import { NavBar } from './components/navBar/NavBar'
import { DetailItem } from './components/detailItem/DetailItem'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar cartWidget={CartWidget}/>}>
            <Route index element={<Home />}/>
            <Route path='inicio' element={<Home />}/>
            <Route path='productos' element={<ItemListContainer />}/>
            <Route path='productos/:id' element={<DetailItem/>}/>
            <Route path='category/:id' element={<ItemListContainer/>}/>
            <Route path='contacto' element={<Contact />}/>
            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
