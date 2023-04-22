import { NavLink, Outlet } from "react-router-dom"

function WebNav() {
    return (
      <>
      <image className="weblogo" src="" />
      <nav>
        <ul style={{display: "flex", display: "flex", flexWrap: "wrap", marginRight: "auto", marginLeft: "auto", position: "relative", justifyContent: "center"}}>
          <li><NavLink to={"help"}>Emergencies</NavLink></li>
          <li><NavLink to={"booking"}>Appointments</NavLink></li>
          <li><NavLink to={"renting"}>Renta-a-car</NavLink></li>
          <li><NavLink to={"about-us"}>About</NavLink></li>
          <li><NavLink to={"contact"}>About</NavLink></li>
          <li><NavLink to={"login"}>Login</NavLink></li>
        </ul>
      </nav>
      <Outlet />
      </>
    )};

  export { WebNav };