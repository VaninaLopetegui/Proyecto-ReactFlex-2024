import "./cartWidget.css"
import { Link } from "react-router-dom";

export const CartWidget = () =>{
    return (
        <div>
            <Link to="/detalleCarrito">
                    <img className="cartWidget" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjNzUyQ0VDIiBkPSJNMTQgMTMuMVYxMkg0LjZsLjYtMS4xbDkuMi0uOUwxNiA0SDMuN0wzIDFIMHYxaDIuMmwyLjEgOC40TDMgMTN2MS41YzAgLjguNyAxLjUgMS41IDEuNVM2IDE1LjMgNiAxNC41UzUuMyAxMyA0LjUgMTNIMTJ2MS41YzAgLjguNyAxLjUgMS41IDEuNXMxLjUtLjcgMS41LTEuNWMwLS43LS40LTEuMi0xLTEuNCIvPjwvc3ZnPg=="></img>
            </Link>
        </div>
    )
} 