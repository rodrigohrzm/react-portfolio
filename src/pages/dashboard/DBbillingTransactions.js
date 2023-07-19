// Chakra imports
import { Flex, Text } from "@chakra-ui/react"
import DBcard from "./elements/DBcard.js"
import RowTransaction from "./elements/RowTransaction.js"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"

const DBbillingTransactions = ({
  title,
  date,
  newestTransactions,
  olderTransactions,
}) => {
  return (
    <DBcard
      w="100%"
      boxShadow="lg"
      borderRadius="8"
      bg="white"
      p="2.5rem 2rem 1.75rem 2rem"
      overflowX={{ base: "scroll", xl: "hidden" }}
    >
      <Flex direction="column" w="100%">
        <Flex
          direction={{ sm: "column", lg: "row" }}
          justify={{ sm: "center", lg: "space-between" }}
          align={{ sm: "center" }}
          w="100%"
          my={{ md: "12px" }}
        >
          <Text
            textTransform="uppercase"
            fontSize="lg"
            color="#2c5282"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Flex align="center">
            <FontAwesomeIcon color="#718096" size="md" icon={faCalendarDays} />
            <Text marginX="6px" fontSize="sm" color="gray.500" fontWeight="600">
              {date}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" w="100%">
        <Text
          color="#2b6cb0"
          fontSize={{ sm: "sm", md: "md" }}
          fontWeight="600"
          my="12px"
        >
          NEWEST
        </Text>
        {newestTransactions.map((row) => {
          return (
            <RowTransaction
              name={row.name}
              logo={row.logo}
              date={row.date}
              price={row.price}
            />
          )
        })}
        <Text
          color="#2b6cb0"
          fontSize={{ sm: "sm", md: "md" }}
          fontWeight="600"
          my="12px"
        >
          OLDER
        </Text>
        {olderTransactions.map((row) => {
          return (
            <RowTransaction
              name={row.name}
              logo={row.logo}
              date={row.date}
              price={row.price}
            />
          )
        })}
      </Flex>
    </DBcard>
  )
}

export default DBbillingTransactions
