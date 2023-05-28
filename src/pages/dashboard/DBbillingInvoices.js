// Chakra imports
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DBcard from "./elements/DBcard.js";
import RowInvoices from "./elements/RowInvoices.js";
import React from "react";

const DBbillingInvoices = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <DBcard
      p='22px'
      my={{ sm: "24px", lg: "0px" }}
      ms={{ sm: "0px", lg: "24px" }}>
      <DBcard>
        <Flex justify='space-between' align='center' mb='1rem' w='100%'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {title}
          </Text>
          <Button
            colorScheme='teal'
            borderColor='teal.300'
            color='teal.300'
            variant='outline'
            fontSize='xs'
            p='8px 32px'>
            VIEW ALL
          </Button>
        </Flex>
      </DBcard>
      <DBcard>
        <Flex direction='column' w='100%'>
          {data.map((row) => {
            return (
              <RowInvoices
                date={row.date}
                code={row.code}
                price={row.price}
                logo={row.logo}
                format={row.format}
              />
            );
          })}
        </Flex>
      </DBcard>
    </DBcard>
  );
};

export default DBbillingInvoices;