import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"

function RowTransaction(props) {
  const { name, date, price } = props

  return (
    <Flex my="1rem" justifyContent="space-between">
      <Flex alignItems="center">
        <Box
          me="12px"
          borderRadius="8"
          color="white"
          backgroundColor={
            price[0] === "+"
              ? "green.200"
              : price[0] === "-"
              ? "red.300"
              : "gray.500"
          }
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="35px"
          h="35px"
        >
          <FontAwesomeIcon icon={faMoneyBillTransfer} />
        </Box>
        <Flex direction="column">
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color="#444444"
            fontWeight="600"
          >
            {name}
          </Text>
          <Text
            fontSize={{ sm: "xs", md: "sm", lg: "xs" }}
            color="gray.500"
            fontWeight="semibold"
          >
            {date}
          </Text>
        </Flex>
      </Flex>
      <Box
        color={
          price[0] === "+"
            ? "green.400"
            : price[0] === "-"
            ? "red.500"
            : "gray.500"
        }
      >
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
          {price}
        </Text>
      </Box>
    </Flex>
  )
}

export default RowTransaction
