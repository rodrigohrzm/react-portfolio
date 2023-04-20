import Title from './Title';
import { Link } from "react-router-dom"

function ConfirmedBooking() {
    return (
      <div className="confirmationpage">
        <h2>Your reservation has been confirmed</h2>
        <h3>Thank you for choosing the Little Lemon Restaurant</h3>
        <button><Link to={"/webdemo1"} replace>See the Menu</Link></button>
      </div>
    );
  }

  export default ConfirmedBooking;