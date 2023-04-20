import Title from './Title';
import { Link } from "react-router-dom"

function ConfirmedBooking() {
    return (
      <div class="confirmationpage">
        <h2>Your reservation has been confirmed</h2>
        <h3>Thank you for choosing the Little Lemon Restaurant</h3>
        <button><Link to={"/"}>See the Menu</Link></button>
      </div>
    );
  }

  export default ConfirmedBooking;