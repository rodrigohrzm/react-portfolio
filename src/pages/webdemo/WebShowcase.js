import { NavLink } from "react-router-dom"

function WebShowcase() {
    return (
      <>
        <h2>We repair everything</h2>
        <p>We pride ourselves on our expertise in both mechanical and bodywork repairs. Our skilled technicians are trained to diagnose and repair any mechanical issues your vehicle may have, from engine problems to transmission repairs. In addition, we also specialize in bodywork repairs, including dent removal, painting, and panel replacement. Whether you need a tune-up, brake service, or a complete engine overhaul, we have the knowledge and equipment to get the job done right.</p>
        <p>With over 30 years of experience in the industry, our car workshop has built a loyal customer base and a reputation for providing top-quality service and expert repairs. We take pride in our long-standing history and are committed to upholding our high standards for many years to come.</p>
        <button><NavLink to={"about-us"}>Our success stories</NavLink></button>
        {/*<video />*/}
      </>
    )};

  export { WebShowcase };