import React from "react"
import { WebCallToAction } from "./WebCallToAction"
import { WebBrands } from "./WebBrands"
import { WebShowcase } from "./WebShowcase"
import { WebRepairs } from "./WebRepairs"
import { WebNewRentals } from "./WebNewRentals"
import { WebNewsletter } from "./WebNewsletter"

import {
  Box,
  Flex,
  Center,
  Grid,
  GridItem,
  Text,
  Heading,
  Spacer,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react"

// https://das-nano.com/
// {{ base: '1.5rem', sm: '2rem', md: '3rem', lg: '5rem' }}
// animacion de las marcas solo arranca a la segunda

function Webdemo() {
  return (
    <>
      <WebCallToAction />
      <Box
        paddingTop="5rem"
        paddingBottom="10rem"
        background="linear-gradient(177deg, #f0f0f0 80%, #011968 80.2%)"
      >
        <Box background="#f0f0f0">
          <WebBrands />
        </Box>
      </Box>
      <Box background="#011968">
        <WebShowcase />
        <WebRepairs />
      </Box>
      <Box
        paddingTop="10rem"
        background="linear-gradient(183deg, #011968 40%, #f0f0f0 40.5%)"
      ></Box>
      <Box background="linear-gradient(135deg, #f0f0f0 60%, #fdcd3b 60%)">
        <WebNewRentals />
        <WebNewsletter />
      </Box>
    </>
  )
}

export { Webdemo }
