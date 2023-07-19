import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"

function InvoicesRow(props) {
  const { date, code, price, format, logo } = props

  return (
    <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center">
      <Flex direction="column">
        <Text fontSize="md" color="#444444" fontWeight="600">
          {date}
        </Text>
        <Text fontSize="sm" color="gray.500" fontWeight="normal" me="16px">
          {code}
        </Text>
      </Flex>
      <Spacer />
      <Box me="12px">
        <Text fontSize="md" color="gray.500" fontWeight="normal">
          {price}
        </Text>
      </Box>
      <Button p="0" bg="transparent" variant="no-hover">
        <Flex alignItems="center" p="12px">
          <Text fontSize="md" color="red.500" fontWeight="bold">
            {format}
          </Text>
        </Flex>
      </Button>
    </Flex>
  )
}

export default InvoicesRow
