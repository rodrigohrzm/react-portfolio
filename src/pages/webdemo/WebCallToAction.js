import { NavLink } from "react-router-dom"

function WebCallToAction() {
    return (
      <>
        <h1>The one-stop-shop for all your automotive needs</h1>
        <p>Whether you need a routine maintenance check or a major repair, our experienced mechanics will take care of your vehicle and get you back on the road quickly and safely. Additionally, we offer a range of high-quality rental cars for those times when you need a temporary ride. With competitive pricing and exceptional customer service, we're committed to making sure you have the best experience possible.</p>
        <button><NavLink to={"booking"}>Book an appointment</NavLink></button>
        <img />
      </>
    )};

  export { WebCallToAction };