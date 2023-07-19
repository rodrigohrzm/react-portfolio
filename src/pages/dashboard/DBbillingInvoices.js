// Chakra imports
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import DBcard from "./elements/DBcard.js"
import RowInvoices from "./elements/RowInvoices.js"
import React from "react"

const DBbillingInvoices = ({ title, data }) => {
  return (
    <DBcard
      w="100%"
      boxShadow="lg"
      borderRadius="8"
      bg="white"
      p="2.5rem 2rem 1.75rem 2rem"
      overflowX={{ base: "scroll", xl: "hidden" }}
    >
      <DBcard>
        <Flex justify="space-between" align="center" mb="1rem" w="100%">
          <Text
            textTransform="uppercase"
            fontSize="lg"
            color="#2c5282"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Button colorScheme="messenger" p="8px 32px">
            View all
          </Button>
        </Flex>
      </DBcard>
      <DBcard>
        <Flex direction="column" w="100%">
          {data.map((row) => {
            return (
              <RowInvoices
                date={row.date}
                code={row.code}
                price={row.price}
                logo={row.logo}
                format={row.format}
              />
            )
          })}
        </Flex>
      </DBcard>
    </DBcard>
  )
}

export default DBbillingInvoices
