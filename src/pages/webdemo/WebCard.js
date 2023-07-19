import { Link } from "react-router-dom"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRoad,
  faHorseHead,
  faGaugeHigh,
  faGasPump,
  faLock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"

import {
  Image,
  Heading,
  Stack,
  HStack,
  Text,
  Divider,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListIcon,
  Card,
  CardBody,
  CardFooter,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react"

function WebCard(props) {
  let {
    make,
    model,
    year,
    mileage,
    booked_status,
    horsepower,
    automatic,
    MPG,
    price,
    picture,
  } = props.car
  let availability = booked_status ? "Booked" : "Available"

  return (
    <Card margin="2rem" boxShadow="xl" maxW="sm">
      <CardBody>
        <Image
          fit="cover"
          w="17rem"
          h="11rem"
          src={require(`../../assets/images/rentalmedia/${picture}`)}
          fallbackSrc={require("../../assets/images/fallbackimg.png")}
          alt=""
          borderRadius="8"
        />
        <Stack marginTop="6" spacing="3">
          <HStack justify="space-between">
            <Heading color="blue.700" size="md">
              {make} {model}
            </Heading>
            <Tag
              size="md"
              key={model}
              borderRadius="6"
              variant="solid"
              borderWidth="1px"
              borderColor={booked_status ? "red.600" : "green.400"}
              backgroundColor={booked_status ? "red.300" : "green.200"}
              color={booked_status ? "red.900" : "green.700"}
              fontWeight="600"
              marginBottom="1rem"
            >
              <TagLeftIcon display={booked_status ? "" : "none"}>
                <FontAwesomeIcon icon={faLock} />
              </TagLeftIcon>
              <TagLeftIcon display={booked_status ? "none" : ""}>
                <FontAwesomeIcon icon={faCheck} />
              </TagLeftIcon>
              <TagLabel>{availability}</TagLabel>
            </Tag>
          </HStack>
          <List spacing={3}>
            <ListItem>
              <ListIcon color="blue.700">
                <FontAwesomeIcon icon={faRoad} />
              </ListIcon>
              {mileage} miles
            </ListItem>
            <ListItem>
              <ListIcon color="blue.700">
                <FontAwesomeIcon icon={faHorseHead} />
              </ListIcon>
              {horsepower} HP
            </ListItem>
            <ListItem>
              <ListIcon color="blue.700">
                <FontAwesomeIcon icon={faGaugeHigh} />
              </ListIcon>
              {automatic ? "Automatic" : "Manual"} transmission
            </ListItem>
            <ListItem>
              <ListIcon color="blue.700">
                <FontAwesomeIcon icon={faGasPump} />
              </ListIcon>
              {MPG.city}/{MPG.highway} MPG (City/Highway)
            </ListItem>
          </List>
          <Text color="blue.600" fontSize="2xl">
            {price}€ per day
          </Text>
        </Stack>
      </CardBody>
      <Divider color="#d0e6ff" />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            isDisabled={booked_status}
            variant="solid"
            colorScheme="messenger"
          >
            {booked_status ? (
              "Book now"
            ) : (
              <Link to="/react-portfolio">Book now</Link>
            )}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export { WebCard }
