// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DBcard from "./elements/DBcard.js";
import RowTimeline from "./elements/RowTimeline";
import React from "react";

const DBdashOrders = ({ title, amount, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <DBcard maxH='100%'>
      <DBcard p='22px 0px 35px 14px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
          <Text fontSize='sm' color='gray.400' fontWeight='normal'>
            <Text fontWeight='bold' as='span' color='teal.300'>
              {`${amount}%`}
            </Text>{" "}
            this month.
          </Text>
        </Flex>
      </DBcard>
      <DBcard ps='20px' pe='0px' mb='31px' position='relative'>
        <Flex direction='column'>
          {data.map((row, index, arr) => {
            return (
              <RowTimeline
                key={row.title}
                logo={row.logo}
                title={row.title}
                date={row.date}
                color={row.color}
                index={index}
                arrLength={arr.length}
              />
            );
          })}
        </Flex>
      </DBcard>
    </DBcard>
  );
};

export default DBdashOrders;