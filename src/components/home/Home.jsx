import "./home.css"
import { Button } from "../button/Button"

export const Home = () => {
  return (
    <div className="contenedorHome">
        <h1>
            Encuentra tu alfombra soñada aquí
        </h1>
        <Button direccionUrl="/productos" texto="Ver productos"/>
    </div>
  )
}
