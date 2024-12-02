import './App.css'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { CartWidget } from './components/cartWidget/CartWidget'
import { NavBar } from './components/navBar/NavBar'

function App() {
  return (
    <>
      <NavBar cartWidget={CartWidget}/>
      <ItemListContainer texto="💫Bienvenidos a mi Ecommerce!💫"/>
    </>
  )
}

export default App
