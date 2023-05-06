import React, { useState, useRef, useReducer } from 'react';
import { fetchAPI } from "../../services/FetchAPI";
import emailjs from '@emailjs/browser';
import RepairSupport from '../../data/RepairSupport.json';

import { Box, Flex, Spacer, VStack, HStack, Center, Grid, SimpleGrid,
         Button, Image,
         Collapse, Container, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
         FormControl, FormLabel, Input } from '@chakra-ui/react'

// https://cdn.filestackcontent.com/OPOFvvyQI674E5F5K4lX

function WebBookingForm() {
   const [ ShowForm, setShowForm ] = useState (true);
   const [ date , setDate ] = useState ("");
   const [ time , setTime ] = useState ("");
   const [ selectedBrand, setSelectedBrand ] = useState ("");
   const [ selectedModel, setSelectedModel ] = useState ("");
   const [ repair , setRepair ] = useState ({mechanical: false, electrical: false, bodywork: false, interior: false});
   const [ description , setDescription ] = useState ("");
   const [ fullname , setFullname ] = useState ("");
   const [ email , setEmail ] = useState ("");
   const [ phone , setPhone ] = useState ("");

   const [ availabletimes , dispatch ] = useReducer(updateTimes, ["select a date first"]);

   function updateTimes(availabletimes, userInput) {
     return fetchAPI(userInput)
   }

   function checkInput(date) {
     dispatch(date);
   }

   function auxchild(event) {
      const dateSend = new Date(event.target.value);
      const dateShow = event.target.value;
      setDate(dateShow);
      checkInput(dateSend);
   }

   const brandOptions = Object.keys(RepairSupport);
   const modelOptions = selectedBrand ? RepairSupport[selectedBrand] : [];

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
      <Center bg="#dee1e7" backgroundSize="50%">
      <Flex maxWidth="1000px" margin={{ base: '1.5rem', sm: '2rem', md: '3rem', lg: '5rem' }}>
         <Image display={{ base: 'none', xl: 'yes' }} maxWidth="400px" align="right top" fit="scale-down" src={require("../../assets/images/bookingpic.jpg")} />
         {ShowForm ? (<form ref={form} onSubmit={handleSubmit}>
         <SimpleGrid columns={{ base: 1, md: 2 }} maxWidth="600px">
            <Box bg="green">
                  <fieldset>
                     <label className="labelText" htmlFor="occasion">Car brand</label>
                        <select required id="brand" placeholder="select" value={selectedBrand} onChange={(e => {setSelectedBrand(e.target.value);setSelectedModel('');})}>
                           <option defaultValue disabled hidden value="">choose your brand</option>
                           {brandOptions.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
                        </select>

                     <label className="labelText" htmlFor="occasion">Car model</label>
                        <select required id="brand" placeholder="select" value={selectedModel} onChange={(e => {setSelectedModel(e.target.value);})}>
                           <option defaultValue disabled hidden value="">choose your model</option>
                           {modelOptions.map((model) => (<option key={model} value={model}>{model}</option>))}
                        </select>

                     <label className="labelText" >Types of repair</label>
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

                  </fieldset>
            </Box>
            <Box bg="cyan" >
                  <fieldset>
                     <label className="labelText" htmlFor="res-date">Choose date</label>
                        <input required type="date" id="res-date" value={date} onChange={auxchild}/>

                     <label className="labelText" htmlFor="res-time">Choose time</label>
                        <select required id="res-time" placeholder="time" value={time} onChange={(e => setTime(e.target.value))}>
                           {availabletimes.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                        </select>

                     <label className="labelText" htmlFor="fullname">Your full name</label>
                        <input required placeholder='name' minLength="3" type="text" id="fullname" value={fullname} onChange={(e => setFullname(e.target.value))}/>

                     <label className="labelText" htmlFor="email">Contact email</label>
                        <input required type="email" placeholder='email' id="email" value={email} onChange={(e => setEmail(e.target.value))}/>

                     <label className="labelText" htmlFor="phone">Phone number</label>
                        <input required type="tel" placeholder='phone' id="phone" value={phone} onChange={(e => setPhone(e.target.value))}/>
                  </fieldset>
            </Box>
         </SimpleGrid>
         <Center><button type="submit">Submit reservation</button></Center>
         </form>) : (<Box bg="orange" maxWidth="600px" padding="3rem"><Container className="showAlert">Thank you for choosing us, we'll be ready when you arrive.</Container></Box>)}
      </Flex>
      </Center>
      </>
    )};

  export { WebBookingForm } ;