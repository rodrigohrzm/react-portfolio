import React from "react"
import RentalInventory from "../../data/RentalInventory.json"
import { WebCard } from "./WebCard"

import { Center, Text, Heading } from "@chakra-ui/react"

function WebNewRentals() {
  const newestCars = RentalInventory.rentals
    .filter((car) => car.booked_status === false)
    .sort((a, b) => b.year - a.year)
    .slice(0, 3)
    .sort((a, b) => b.model.localeCompare(a.model))
    .map((car) => <WebCard key={car.make + car.model} car={car} />)

  return (
    <>
      <Heading
        marginX="2rem"
        paddingBottom="1.5rem"
        align="center"
        as="h2"
        size="2xl"
      >
        Newest rentals
      </Heading>
      <Text marginX="2rem" align="center" fontSize="xl">
        Our fleet gets updated constantly
      </Text>
      <Center marginTop={{ base: "0", lg: "2rem" }} flexWrap="wrap">
        {newestCars}
      </Center>
    </>
  )
}

export { WebNewRentals }
