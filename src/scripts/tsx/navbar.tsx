import cartIcon from "../../svg/cart.svg"
import "../css/navbar.css"


export default function Navbar() {

    return (
        <nav id="navbar">
            <img style={{position: "relative", maxHeight: "100%", right: "0px"}} src={cartIcon} alt="Cart img" />
        </nav>
    )
  }