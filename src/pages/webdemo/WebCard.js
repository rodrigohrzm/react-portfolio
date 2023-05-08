import { Link } from "react-router-dom"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faHorseHead, faGaugeHigh, faGasPump } from '@fortawesome/free-solid-svg-icons'

import { Image, Heading, Stack, Text, Divider, Button, ButtonGroup,
         List, ListItem, ListIcon,
         Card, CardBody, CardFooter, Tag, TagLabel } from '@chakra-ui/react'

function WebCard(props) {
    let { make, model, year, mileage, booked_status, horsepower, automatic, MPG, price } = props.car;
    let availability = booked_status ? "Booked" : "Available";
    let cardClass = booked_status ? "booked" : "";
    return(
        <Card maxW='sm'>
        <CardBody>
          <Tag
              size={{ base:'sm', xl: 'md'}}
              key={model}
              borderRadius='full'
              variant='solid'
              colorScheme={booked_status ? "red" : "green"}
          >
              <TagLabel>{availability}</TagLabel>
          </Tag>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt=''
            borderRadius='8'
          />
          <Stack marginTop='6' spacing='3'>
            <Heading size='md'>{make} {model}</Heading>
            <List spacing={3}>
                <ListItem>
                    <ListIcon color='green.500'><FontAwesomeIcon icon={faRoad} /></ListIcon>
                    {mileage} miles
                </ListItem>
                <ListItem>
                    <ListIcon color='green.500'><FontAwesomeIcon icon={faHorseHead} /></ListIcon>
                    {horsepower} HP
                </ListItem>
                <ListItem>
                    <ListIcon color='green.500'><FontAwesomeIcon icon={faGaugeHigh} /></ListIcon>
                    {automatic ? "Automatic" : "Manual"} transmission
                </ListItem>
                <ListItem>
                    <ListIcon color='green.500'><FontAwesomeIcon icon={faGasPump} /></ListIcon>
                    {MPG.city}/{MPG.highway} MPG (City/Highway)
                </ListItem>
            </List>
            <Text color='blue.600' fontSize='2xl'>
              ${price} per day
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='messenger'>
              Book now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
}

export { WebCard };