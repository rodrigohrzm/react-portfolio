// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DBcard from "./elements/DBcard.js";
import RowTransaction from "./elements/RowTransaction.js";
import React from "react";
//import { FaRegCalendarAlt } from "react-icons/fa";

const DBbillingTrasnactions = ({
  title,
  date,
  newestTransactions,
  olderTransactions,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <DBcard my='24px' ms={{ lg: "24px" }}>
      <DBcard mb='12px'>
        <Flex direction='column' w='100%'>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            justify={{ sm: "center", lg: "space-between" }}
            align={{ sm: "center" }}
            w='100%'
            my={{ md: "12px" }}>
            <Text
              color={textColor}
              fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
              fontWeight='bold'>
              {title}
            </Text>
            <Flex align='center'>
              <Icon
                //as={FaRegCalendarAlt}
                color='gray.400'
                fontSize='md'
                me='6px'></Icon>
              <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </DBcard>
      <DBcard>
        <Flex direction='column' w='100%'>
          <Text
            color='gray.400'
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight='semibold'
            my='12px'>
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
            );
          })}
          <Text
            color='gray.400'
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight='semibold'
            my='12px'>
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
            );
          })}
        </Flex>
      </DBcard>
    </DBcard>
  );
};

export default DBbillingTrasnactions;