import {ReactComponent as Logo} from '../../assets/images/Logo.svg';
import { Link } from "react-router-dom"

function Nav() {
    return (
      <div class="navBar">
      <Logo />
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/"}>About</Link></li>
          <li><Link to={"/"}>Menu</Link></li>
          <li><Link to={"/service/booking"}>Reservations</Link></li>
          <li><Link to={"/"}>Order Online</Link></li>
          <li><Link to={"/"}>Login</Link></li>
        </ul>
      </nav>
      </div>
    )};
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
  export default Nav;