import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Box, Center, FormControl, FormLabel, Text, Heading, SimpleGrid, Flex, Container,
	Input, InputGroup, Textarea, Button, InputRightElement } from '@chakra-ui/react'

function WebNewsletter() {
    const [ShowForm, setShowForm] = useState (true);
    const [ name , setName ] = useState ("");
    const [ email , setEmail ] = useState ("");
    const [ phone , setPhone ] = useState ("");
	const [ company , setCompany ] = useState ("");
    const [ message , setMessage ] = useState ("");

    const form = useRef();
    const handleSubmit = (e) => {
	    e.preventDefault();
	    let formData = [name, email, phone, company, message];
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
	  	<Heading marginTop="4rem" marginX='2rem' paddingBottom="1.5rem" align="center" as='h2' size='2xl'>How can we help you?</Heading>
	  	<Text marginX='2rem' align="center" fontSize='xl'>If you have any other inquiry please let us know here.</Text>
	  	<Center>
	  	<Flex borderRadius="8" boxShadow='2xl' backgroundColor="#ffffff" maxWidth="1200px" marginX={{ base: '1.5rem', sm: '2rem', md: '3rem', lg: '5rem' }} marginY={{ base: '2rem', lg: '4rem' }}>
			{ShowForm ? (<form ref={form} onSubmit={handleSubmit}> <FormControl as='fieldset'>
				<SimpleGrid paddingX={{ base: '1rem', sm: '2rem', pre: '3rem' }} paddingTop={{ base: '1rem', sm: '2rem', pre: '3rem' }} spacingX={{ base: '', pre: "2rem" }} columns={{ base: 1, pre: 2 }} borderRadius="4px">
					<FormLabel marginEnd='0' marginBottom="2rem"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Your full name</Heading>
						<InputGroup borderColor="#99b3d7" >
							<InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faUser} color='#5e646e' />}/>
							<Input required placeholder='name' minLength="3" type="text" id="name" value={name} onChange={(e => setName(e.target.value))}/>
						</InputGroup>
					</FormLabel>
					<FormLabel marginEnd='0' marginBottom="2rem"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Contact email</Heading>
						<InputGroup borderColor="#99b3d7">
							<InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faAt} color='#5e646e' />}/>
							<Input required type="email" placeholder='email' id="email" value={email} onChange={(e => setEmail(e.target.value))}/>
						</InputGroup>
					</FormLabel>
					<FormLabel marginEnd='0' marginBottom="2rem"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Your company</Heading>
						<InputGroup borderColor="#99b3d7" >
							<InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faBriefcase} color='#5e646e' />}/>
							<Input required placeholder='company' minLength="3" type="text" id="company" value={company} onChange={(e => setCompany(e.target.value))}/>
						</InputGroup>
					</FormLabel>
					<FormLabel marginEnd='0' marginBottom="2rem"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Phone number</Heading>
						<InputGroup borderColor="#99b3d7">
							<InputRightElement pointerEvents='none' children={<FontAwesomeIcon icon={faPhone} color='#5e646e' />}/>
							<Input required type="tel" placeholder='phone' id="phone" value={phone} onChange={(e => setPhone(e.target.value))}/>
						</InputGroup>
					</FormLabel>
				</SimpleGrid>
				<SimpleGrid paddingX={{ base: '1rem', sm: '2rem', pre: '3rem' }} spacingX={{ base: '', pre: "2rem" }} columns='1'>
					<FormLabel marginEnd='0' marginBottom="2rem"><Heading paddingLeft='0.25rem' marginBottom="0.5em" color='#444444' fontWeight='600' as='h4' size='sm'>Write your message</Heading>
						<Textarea borderColor="#99b3d7" required resize="none" placeholder='message' id="message" value={message} onChange={(e => setMessage(e.target.value))}/>
					</FormLabel>
				</SimpleGrid>
				<Center><Button marginTop='1rem' marginBottom='3rem' width="250px" colorScheme='messenger' size='lg' type="submit">Send message</Button></Center>
			</FormControl></form>) : (<Box bg="f2f2f2" maxWidth="600px" padding="3rem"><Container className="showAlert">Message sent! We'll get back to you shortly.</Container></Box>)}
		</Flex>
		</Center>
      </>
    )};

  export { WebNewsletter };