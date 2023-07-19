// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
// Custom components
import DBcard from "./elements/DBcard.js"
import React from "react"
// react icons
//  import { BsArrowRight } from "react-icons/bs";

const DBdashBanner = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "white")

  return (
    <DBcard minHeight="290.5px" p="1.2rem">
      <DBcard w="100%">
        <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
          <Flex
            flexDirection="column"
            h="100%"
            lineHeight="1.6"
            width={{ lg: "45%" }}
          >
            <Text fontSize="sm" color="gray.400" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {description}
            </Text>
            <Spacer />
            <Flex align="center">
              <Button
                p="0px"
                variant="no-hover"
                bg="transparent"
                my={{ sm: "1.5rem", lg: "0px" }}
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="bold"
                  cursor="pointer"
                  transition="all .5s ease"
                  my={{ sm: "1.5rem", lg: "0px" }}
                  _hover={{ me: "4px" }}
                >
                  Read more
                </Text>
              </Button>
            </Flex>
          </Flex>
          <Spacer />
          <Flex
            bg="teal.300"
            align="center"
            justify="center"
            borderRadius="15px"
            width={{ lg: "40%" }}
            minHeight={{ sm: "250px" }}
          >
            {image}
          </Flex>
        </Flex>
      </DBcard>
    </DBcard>
  )
}

export default DBdashBanner
