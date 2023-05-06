import React, { useState, useRef, useReducer } from 'react';
import { fetchAPI } from "../../services/FetchAPI";
import emailjs from '@emailjs/browser';
import RepairSupport from '../../data/RepairSupport.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Box, Flex, Spacer, VStack, HStack, Center, Grid, SimpleGrid,
         Button, Image,
         Collapse, Container,
         FormControl, FormLabel, InputGroup, Input, InputRightElement, Select, Textarea, CheckboxGroup, Checkbox } from '@chakra-ui/react'

// https://cdn.filestackcontent.com/OPOFvvyQI674E5F5K4lX
// mobile view excessive border padding causes out of bounds
// border color too light
// Styled input labels
// success message styling

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
      <>
      <Center bg="#dee1e7" backgroundSize="50%">
      <Flex backgroundColor="#f2f2f2" maxWidth="1200px" margin={{ base: '1.5rem', sm: '2rem', md: '3rem', lg: '5rem' }}>
         <Image display={{ base: 'none', xl: 'yes' }} w="450px" align="right top" fit="scale-down" src={require("../../assets/images/bookingpic.jpg")} />
         {!ShowForm ? (<form ref={form} onSubmit={handleSubmit}> <FormControl>
         <SimpleGrid padding="3rem" spacing="2rem" columns={{ base: 1, md: 2 }} borderRadius="4px">
            <Box>
               <fieldset>
                  <FormLabel>Car brand
                     <Select required id="brand" value={selectedBrand} onChange={(e => {setSelectedBrand(e.target.value);setSelectedModel('');})}>
                        <option defaultValue disabled hidden value="">choose your brand</option>
                        {brandOptions.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
                     </Select>
                  </FormLabel>
                  <FormLabel>Car model
                     <Select required id="model" value={selectedModel} onChange={(e => {setSelectedModel(e.target.value);})}>
                        <option defaultValue disabled hidden value="">choose your model</option>
                        {modelOptions.map((model) => (<option key={model} value={model}>{model}</option>))}
                     </Select>
                  </FormLabel>
                  <FormLabel>Types of repair
                     <CheckboxGroup required><SimpleGrid columns="2" spacing="1rem">
                        <Checkbox id="mechanical" name="mechanical" value="mechanical" onChange={handleCheckboxChange}>Mechanical</Checkbox>
                        <Checkbox id="electrical" name="electrical" value="electrical" onChange={handleCheckboxChange}>Electrical</Checkbox>
                        <Checkbox id="bodywork" name="bodywork" value="bodywork" onChange={handleCheckboxChange}>Bodywork</Checkbox>
                        <Checkbox id="interior" name="interior" value="interior" onChange={handleCheckboxChange}>Interior</Checkbox>
                        <Checkbox id="maintenance" name="maintenance" value="maintenance" onChange={handleCheckboxChange}>Maintenance</Checkbox>
                     </SimpleGrid></CheckboxGroup>
                  </FormLabel>
                  <FormLabel>Describe your car's issue
                     <Textarea required resize="none" placeholder='description' minLength="10" id="description" value={description} onChange={(e => setDescription(e.target.value))}/>
                  </FormLabel>
               </fieldset>
            </Box>
            <Box>
               <fieldset>
                  <FormLabel>Choose date
                     <Input required type="date" id="res-date" value={date} onChange={hourDropdown}/>
                  </FormLabel>
                  <FormLabel>Choose time
                     <Select required id="res-time" value={time} onChange={(e => setTime(e.target.value))}>
                        {availabletimes.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                     </Select>
                  </FormLabel>
                  <FormLabel>Your full name
                     <InputGroup>
                        <InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faUser} color='#5e646e' />}/>
                        <Input required placeholder='name' minLength="3" type="text" id="fullname" value={fullname} onChange={(e => setFullname(e.target.value))}/>
                     </InputGroup>
                  </FormLabel>
                  <FormLabel>Contact email
                     <InputGroup>
                        <InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faAt} color='#5e646e' />}/>
                        <Input required type="email" placeholder='email' id="email" value={email} onChange={(e => setEmail(e.target.value))}/>
                     </InputGroup>
                  </FormLabel>
                  <FormLabel>Phone number
                     <InputGroup>
                        <InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faPhone} color='#5e646e' />}/>
                        <Input required type="tel" placeholder='phone' id="phone" value={phone} onChange={(e => setPhone(e.target.value))}/>
                     </InputGroup>
                  </FormLabel>
               </fieldset>
            </Box>
         </SimpleGrid>
         <Center><Button width="300px" margin="3rem" colorScheme='messenger' size='lg' type="submit">Confirm booking</Button></Center>
         </FormControl></form>) : (<Box bg="orange" maxWidth="600px" padding="3rem"><Container className="showAlert">Thank you for choosing us, we'll be ready when you arrive.</Container></Box>)}
      </Flex>
      </Center>
      </>
    )};

  export { WebBookingForm } ;