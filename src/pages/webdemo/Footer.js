import { Link } from "react-router-dom"

function Footer() {
    return (
      <footer className="serviceFooter">
        <img src={require("../../assets/images/restaurantchefB.jpg")}/>
        <div className="footerLinks">
          <text>NAVIGATION</text>
          <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/"}>About</Link></li>
          <li><Link to={"/"}>Menu</Link></li>
          <li><Link to={"/booking"}>Reservations</Link></li>
          <li><Link to={"/"}>Order Online</Link></li>
          <li><Link to={"/"}>Login</Link></li>
          </ul>
        </div>
        <div className="footerLinks">
          <text>CONTACT INFO</text>
          <ul>
          <li><Link to={"/"}>Address</Link></li>
          <li><Link to={"/"}>Telephone</Link></li>
          <li><Link to={"/"}>Email</Link></li>
        </ul>
        </div>
        <div className="footerLinks">
          <text>SOCIAL MEDIA</text>
          <ul>
          <li><Link to={"/"}>Facebook</Link></li>
          <li><Link to={"/"}>LinkedIn</Link></li>
          <li><Link to={"/"}>Telegram</Link></li>
          </ul>
          </div>
      </footer>
    )};

  export default Footer;