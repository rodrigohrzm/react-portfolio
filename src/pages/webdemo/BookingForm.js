import React, { useState } from 'react';
import { submitAPI } from "./FetchAPI";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom"
import {ReactComponent as Arrow} from '../../assets/images/Arrow.svg';

function BookingForm({availabletimes, settimes}) {

   let goBackStyle = {
      textDecoration: "none",
      color:"#333333",
      fontSize:"16px",
      fontWeight: "bold",
   };

   const [ date , setDate ] = useState ("");
   const [ time , setTime ] = useState ("");
   const [ guests , setGuests ] = useState ("");
   const [ occasion , setOccasion ] = useState ("");
   const [ location , setLocation ] = useState ("");
   const [ fullname , setFullname ] = useState ("");
   const [ email , setEmail ] = useState ("");

   function auxchild(event) {
      const dateSend = new Date(event.target.value);
      const dateShow = event.target.value;
      setDate(dateShow);
      settimes(dateSend);
   }
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      let formData = [date, time, guests, occasion, location, fullname, email];
      if (submitAPI(formData) === true) {navigate("/confirmation");
          } else { return null}
      }

    return (
      <form class="bookingForm" onSubmit={handleSubmit}>
         <Link style={goBackStyle} to={".."}><Arrow class="cardIco" /> Go back</Link>
         <fieldset>
            <label class="labelText" htmlFor="res-date">Choose date</label>
               <input required type="date" id="res-date" value={date} onChange={auxchild}/>
            <label class="labelText" htmlFor="res-time">Choose time</label>
               <select required id="res-time" placeholder="time" value={time} onChange={(e => setTime(e.target.value))}>
                  {availabletimes.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
               </select>
            <label class="labelText" htmlFor="guests">Number of guests</label>
               <input required type="number" placeholder="number" min="1" max="10" id="guests" value={guests} onChange={(e => setGuests(e.target.value))} />
            <label class="labelText" htmlFor="occasion">Type of occasion</label>
               <select id="occasion" placeholder="select" value={occasion} onChange={(e => setOccasion(e.target.value))}>
                  <option key="none" value="none" selected >None</option>
                  <option key="birthday" value="birthday" >Birthday</option>
                  <option key="company" value="company" >Company event</option>
                  <option key="other" value="other" >Other</option>
               </select>
            <label class="labelText" >Location</label>
               <div required class="locationText"><input type="radio" id="outdoors" name="outdoors" value="outdoors" checked={location === "outdoors"} onChange={(e => setLocation(e.target.value))}/>
                  <label htmlFor="outdoors">Outdoors</label>
               <input type="radio" id="indoors" name="indoors" value="indoors" checked={location === "indoors"} onChange={(e => setLocation(e.target.value))}/>
                  <label class="locationText" htmlFor="indoors">Indoors</label></div>
            <label class="labelText" htmlFor="fullname">Your full name</label>
               <input required placeholder='name' minlength="3" type="text" id="fullname" value={fullname} onChange={(e => setFullname(e.target.value))}/>
            <label class="labelText" htmlFor="email">Contact email</label>
               <input required type="email" placeholder='email' id="email" value={email} onChange={(e => setEmail(e.target.value))}/>
         </fieldset>
        <button type="submit">Submit reservation</button>
        </form>
    )};

  export default BookingForm;


