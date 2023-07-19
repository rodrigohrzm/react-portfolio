import { Flex, Text, Center } from "@chakra-ui/react"
import DBcard from "./elements/DBcard.js"
import { Separator } from "./elements/Separator.js"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DBbillingStats = ({ icon, title, description, amount }) => {
  return (
    <DBcard p="16px" display="flex" align="center" justify="center">
      <DBcard>
        <Flex direction="column" align="center" w="100%" py="14px">
          <Center h={"60px"} w={"60px"} bg="messenger.400" borderRadius="8">
            <FontAwesomeIcon color="white" size="2xl" icon={icon} />
          </Center>
          <Flex
            direction="column"
            m="14px"
            justify="center"
            textAlign="center"
            align="center"
            w="100%"
          >
            <Text fontSize="md" color="#2c5282" fontWeight="bold">
              {title}
            </Text>
            <Text mb="24px" fontSize="xs" color="gray.500" fontWeight="normal">
              {description}
            </Text>
            <Separator />
          </Flex>
          <Text fontSize="lg" color="green.400" fontWeight="bold">
            {`${amount}€`}
          </Text>
        </Flex>
      </DBcard>
    </DBcard>
  )
}

export default DBbillingStats
