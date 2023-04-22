import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// QUE LA LISTA DE MARCAS AFECTE LA LISTA DE MODELOS Y QUE TODA LA INFO VENGA DESDE UNA BASE DE DATOS EN LA CARPETA SERVICES

function WebBookingForm({availabletimes, settimes}) {
   const [ShowForm, setShowForm] = useState (true);
   const [ date , setDate ] = useState ("");
   const [ time , setTime ] = useState ("");
   const [ brand , setBrand ] = useState ("");
   const [ repair , setRepair ] = useState ({mechanical: false, electrical: false, bodywork: false, interior: false});
   const [ description , setDescription ] = useState ("");
   const [ fullname , setFullname ] = useState ("");
   const [ email , setEmail ] = useState ("");
   const [ phone , setPhone ] = useState ("");

   function auxchild(event) {
      const dateSend = new Date(event.target.value);
      const dateShow = event.target.value;
      setDate(dateShow);
      settimes(dateSend);
   }

   function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setRepair({ ...repair, [name]: checked });
  }

   const form = useRef();
   const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_tihk3c6', 'template_ax1fnkl', form.current, 'CXTj3yKjPUKyka9vT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	setShowForm(false);
	return null
      }

    return (
      <>
      <div className={ShowForm === true ? "hiddenAlert" : "showAlert"}>
      Thank you for choosing us, we'll be ready when you arrive.
      </div>
      <form className={ShowForm === true ? "bookingForm" : "hiddenForm"} onSubmit={handleSubmit}>
         <fieldset>
            <label className="labelText" htmlFor="res-date">Choose date</label>
               <input required type="date" id="res-date" value={date} onChange={auxchild}/>

            <label className="labelText" htmlFor="res-time">Choose time</label>
               <select required id="res-time" placeholder="time" value={time} onChange={(e => setTime(e.target.value))}>
                  {availabletimes.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
               </select>

            <label className="labelText" htmlFor="occasion">Car brand</label>
               <select id="brand" placeholder="select" value={brand} onChange={(e => setBrand(e.target.value))}>
                  <option key="none" value="none" defaultValue >None</option>
                  <option key="birthday" value="birthday" >Birthday</option>
                  <option key="company" value="company" >Company event</option>
                  <option key="other" value="other" >Other</option>
               </select>

            <label className="labelText" >Type of repair</label>
               <div required>
                <input type="checkbox" id="mechanical" name="mechanical" value="mechanical" onChange={handleCheckboxChange}/>
                  <label htmlFor="mechanical">Mechanical</label>
                <input type="checkbox" id="electrical" name="electrical" value="electrical" onChange={handleCheckboxChange}/>
                  <label htmlFor="electrical">Electrical</label>
                <input type="checkbox" id="bodywork" name="bodywork" value="bodywork" onChange={handleCheckboxChange}/>
                  <label htmlFor="bodywork">Bodywork</label>
                <input type="checkbox" id="interior" name="interior" value="interior" onChange={handleCheckboxChange}/>
                  <label htmlFor="interior">Interior</label>
               </div>

            <label className="labelText" htmlFor="description">Describe your car's issue</label>
               <input required placeholder='description' minLength="10" type="textarea" id="description" value={description} onChange={(e => setDescription(e.target.value))}/>

            <label className="labelText" htmlFor="fullname">Your full name</label>
               <input required placeholder='name' minLength="3" type="text" id="fullname" value={fullname} onChange={(e => setFullname(e.target.value))}/>

            <label className="labelText" htmlFor="email">Contact email</label>
               <input required type="email" placeholder='email' id="email" value={email} onChange={(e => setEmail(e.target.value))}/>

            <label className="labelText" htmlFor="phone">Phone number</label>
               <input required type="tel" placeholder='phone' id="phone" value={phone} onChange={(e => setPhone(e.target.value))}/>
         </fieldset>
        <button type="submit">Submit reservation</button>
        </form>
        </>
    )};

  export { WebBookingForm } ;