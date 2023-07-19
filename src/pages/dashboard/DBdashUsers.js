// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import DBcard from "./elements/DBcard"
import React from "react"
import DBdashStats from "./DBdashStats"
import {
  faCalendar,
  faUser,
  faMoneyBillWave,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons"

const DBdashUsers = ({ title, percentage, chart }) => {
  return (
    <DBcard
      boxShadow="lg"
      borderRadius="8"
      bg="white"
      p="2rem"
      overflowX={{ base: "scroll", xl: "hidden" }}
    >
      <Flex direction="column" w="100%">
        {chart}
        <Flex direction="row" alignSelf="flex-start" my="2rem">
          <Text
            textTransform="uppercase"
            fontSize="lg"
            color="#2c5282"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Flex mx="1rem" mt="0.25rem">
            <Text fontSize="sm" color="gray.500" fontWeight="normal">
              <Text
                as="span"
                color={percentage > 0 ? "green.400" : "red.600"}
                fontWeight="bold"
              >
                {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
              </Text>{" "}
              than last week
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid gap={{ sm: "12px" }} columns={4}>
          <DBdashStats
            title={"Visitors"}
            amount={"8,714"}
            percentage={14}
            icon={faUser}
          />
          <DBdashStats
            title={"Appointments"}
            amount={"54"}
            percentage={80}
            icon={faCalendar}
          />
          <DBdashStats
            title={"Rentals"}
            amount={"2,400€"}
            percentage={30}
            icon={faMoneyBillWave}
          />
          <DBdashStats
            title={"Ads revenue"}
            amount={"890€"}
            percentage={40}
            icon={faArrowPointer}
          />
        </SimpleGrid>
      </Flex>
    </DBcard>
  )
}

export default DBdashUsers
