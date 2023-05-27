// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DBcard from "./elements/DBcard.js";
import React from "react";

const DBdashSales = ({ title, percentage, chart }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <DBcard p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
      <DBcard mb='20px' pl='22px'>
        <Flex direction='column' alignSelf='flex-start'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            {title}
          </Text>
          <Text fontSize='md' fontWeight='medium' color='gray.400'>
            <Text
              as='span'
              color={percentage > 0 ? "green.400" : "red.400"}
              fontWeight='bold'>
              {`${percentage}%`} more
            </Text>{" "}
            in 2021
          </Text>
        </Flex>
      </DBcard>
      <Box w='100%' h={{ sm: "300px" }} ps='8px'>
        {chart}
      </Box>
    </DBcard>
  );
};

export default DBdashSales;