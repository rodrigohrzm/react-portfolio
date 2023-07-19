import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Center,
} from "@chakra-ui/react"
import DBcard from "./elements/DBcard"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DBdashMinistats = ({ title, amount, percentage, icon }) => {
  return (
    <DBcard
      boxShadow="md"
      borderRadius="8"
      bg="white"
      p="1.25rem 2rem"
      minH="83px"
    >
      <Flex flexDirection="row" align="center" justify="center" w="100%">
        <Stat me="auto">
          <StatLabel
            fontSize="sm"
            color="#2b6cb0"
            textTransform="uppercase"
            fontWeight="bold"
            pb=".1rem"
          >
            {title}
          </StatLabel>
          <Flex>
            <StatNumber fontSize="lg" color="#444444">
              {amount}
            </StatNumber>
            <StatHelpText
              alignSelf="flex-end"
              justifySelf="flex-end"
              m="0px"
              color={percentage > 0 ? "green.400" : "red.600"}
              fontWeight="bold"
              ps="3px"
              fontSize="md"
            >
              {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
            </StatHelpText>
          </Flex>
        </Stat>
        <Center h="3rem" w="3rem" background="messenger.400" borderRadius="8">
          <FontAwesomeIcon color="white" size="xl" icon={icon} />
        </Center>
      </Flex>
    </DBcard>
  )
}

export default DBdashMinistats
