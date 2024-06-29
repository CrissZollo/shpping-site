import { Style } from "util";
import cartIcon from "../../svg/cart.svg"
import "../css/navbar.css"

let cartAmount = 0;

export default function Navbar() {

    return (
        <nav id="navbar">
            <div id="cartContainer">
                <img  src={cartIcon} alt="Cart img" />
                <div id="cartAmount">{cartAmount}</div>    
            </div>
        </nav>
    )
  }