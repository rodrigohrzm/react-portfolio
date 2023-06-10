import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import DBcard from "./elements/DBcard.js";
import RowBilling from "./elements/RowBilling.js";
import React from "react";

const DBbillingInfo = ({ title, data }) => {
  return (
    <DBcard w='100%' boxShadow='lg' borderRadius='8' bg='white' p='2.5rem 2rem 1.75rem 2rem' overflowX={{ base: "scroll", xl: "hidden" }}>
      <Flex direction='column'>
          <Text textTransform='uppercase' fontSize='lg' color='#2c5282' fontWeight='bold'>
            {title}
          </Text>
          <Flex direction='column' w='100%'>
            {data.map((row) => {
              return (
                <RowBilling
                  name={row.name}
                  company={row.company}
                  email={row.email}
                  number={row.number}
                />
              );
            })}
          </Flex>
      </Flex>
    </DBcard>
  );
};

export default DBbillingInfo;