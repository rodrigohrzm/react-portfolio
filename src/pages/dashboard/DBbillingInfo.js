// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DBcard from "./elements/DBcard.js";
import RowBilling from "./elements/RowBilling.js";
import React from "react";

const DBbillingInfo = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <DBcard my={{ lg: "24px" }} me={{ lg: "24px" }}>
      <Flex direction='column'>
        <DBcard py='12px'>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
        </DBcard>
        <DBcard>
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
        </DBcard>
      </Flex>
    </DBcard>
  );
};

export default DBbillingInfo;