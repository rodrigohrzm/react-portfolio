import React, { useState, useRef, useReducer } from 'react';
import { fetchAPI } from "../../services/FetchAPI";
import emailjs from '@emailjs/browser';
import RepairSupport from '../../data/RepairSupport.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Box, Flex, Center,  SimpleGrid,
         Button, Image, Heading, Container,
         FormControl, FormLabel, InputGroup, Input, InputRightElement, Select, Textarea, CheckboxGroup, Checkbox } from '@chakra-ui/react'

// If you need to do some maintenance on your car, you can book our mechanics here.
// And if your car is not feeling ok, not working properly, or you need any repairs,
// be sure to let us know.


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

   function hourDropdown(event) {
      const dateSend = new Date(event.target.value);
      const dateShow = event.target.value;
      setDate(dateShow);
      dispatch(dateSend)
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
      <Flex borderLeftRadius="8" borderRightRadius="8" boxShadow='2xl' backgroundColor="#ffffff" maxWidth="1200px" margin={{ base: '1.5rem', sm: '2rem', md: '3rem', lg: '5rem' }}>
         <Image borderLeftRadius="8" display={{ base: 'none', xl: 'yes' }} align="right top" maxWidth='450px' fit="scale-down" src={require("../../assets/images/bookingpic.jpg")} />
         {ShowForm ? (<form ref={form} onSubmit={handleSubmit}> <FormControl as='fieldset'>
         <SimpleGrid padding={{ base: '1rem', sm: '2rem', pre: '3rem' }} spacing="2rem" columns={{ base: 1, pre: 2 }} borderRadius="4px">
            <Box>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Car brand</Heading>
                  <Select borderColor="#99b3d7" required id="brand" value={selectedBrand} onChange={(e => {setSelectedBrand(e.target.value);setSelectedModel('');})}>
                     <option defaultValue disabled hidden value="">choose your brand</option>
                     {brandOptions.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
                  </Select>
               </FormLabel>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Car model</Heading>
                  <Select borderColor="#99b3d7" required id="model" value={selectedModel} onChange={(e => {setSelectedModel(e.target.value);})}>
                     <option defaultValue disabled hidden value="">choose your model</option>
                     {modelOptions.map((model) => (<option key={model} value={model}>{model}</option>))}
                  </Select>
               </FormLabel>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.8em" color='#444444' fontWeight='600' as='h4' size='sm'>Types of repair</Heading>
                  <CheckboxGroup required><SimpleGrid columns="2" spacing="1rem">
                     <Checkbox borderColor="#99b3d7" id="mechanical" name="mechanical" value="mechanical" onChange={handleCheckboxChange}>Mechanical</Checkbox>
                     <Checkbox borderColor="#99b3d7" id="electrical" name="electrical" value="electrical" onChange={handleCheckboxChange}>Electrical</Checkbox>
                     <Checkbox borderColor="#99b3d7" id="bodywork" name="bodywork" value="bodywork" onChange={handleCheckboxChange}>Bodywork</Checkbox>
                     <Checkbox borderColor="#99b3d7" id="interior" name="interior" value="interior" onChange={handleCheckboxChange}>Interior</Checkbox>
                     <Checkbox borderColor="#99b3d7" id="maintenance" name="maintenance" value="maintenance" onChange={handleCheckboxChange}>Maintenance</Checkbox>
                  </SimpleGrid></CheckboxGroup>
               </FormLabel>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Describe your car's issue</Heading>
                  <Textarea borderColor="#99b3d7" required resize="none" placeholder='description' minLength="10" id="description" value={description} onChange={(e => setDescription(e.target.value))}/>
               </FormLabel>
            </Box>
            <Box>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Choose date</Heading>
                  <Input borderColor="#99b3d7" required type="date" id="res-date" value={date} onChange={hourDropdown}/>
               </FormLabel>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Choose time</Heading>
                  <Select borderColor="#99b3d7" required id="res-time" value={time} onChange={(e => setTime(e.target.value))}>
                     {availabletimes.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                  </Select>
               </FormLabel>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Your full name</Heading>
                  <InputGroup borderColor="#99b3d7" >
                     <InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faUser} color='#5e646e' />}/>
                     <Input required placeholder='name' minLength="3" type="text" id="fullname" value={fullname} onChange={(e => setFullname(e.target.value))}/>
                  </InputGroup>
               </FormLabel>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Contact email</Heading>
                  <InputGroup borderColor="#99b3d7">
                     <InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faAt} color='#5e646e' />}/>
                     <Input required type="email" placeholder='email' id="email" value={email} onChange={(e => setEmail(e.target.value))}/>
                  </InputGroup>
               </FormLabel>
               <FormLabel marginBottom="2em"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Phone number</Heading>
                  <InputGroup borderColor="#99b3d7">
                     <InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faPhone} color='#5e646e' />}/>
                     <Input required type="tel" placeholder='phone' id="phone" value={phone} onChange={(e => setPhone(e.target.value))}/>
                  </InputGroup>
               </FormLabel>
            </Box>
         </SimpleGrid>
         <Center><Button marginTop={{ base: '0', sm: '-1.5rem', lg: '-2rem' }} marginBottom={{ base: '3rem', xl: '0' }} width="250px" colorScheme='messenger' size='lg' type="submit">Confirm booking</Button></Center>
         </FormControl></form>) : (<Box bg="f2f2f2" maxWidth="600px" padding="3rem"><Container className="showAlert">Thank you for choosing us, we'll be ready when you arrive.</Container></Box>)}
      </Flex>
    )};

  export { WebBookingForm } ;