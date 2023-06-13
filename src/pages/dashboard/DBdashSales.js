import { Box, Flex, Text } from "@chakra-ui/react";
import DBcard from "./elements/DBcard.js";
import React from "react";
import { NavLink } from 'react-router-dom';

const DBdashSales = ({ title, percentage, chart }) => {
  return (
    <NavLink to={"/dashboard/billing"}>
    <DBcard boxShadow={{base: 'lg', xl: 'none'}} borderRadius='8' bg={{base: 'white', xl: 'none'}} p='2rem' overflowX={{ base: "scroll", xl: "hidden" }}>
        <Flex direction='row' alignSelf='flex-start'>
          <Text textTransform='uppercase' fontSize='lg' color='#2c5282' fontWeight='bold'>
            {title}
          </Text>
          <Flex mx='1rem' mt='0.15rem' align='center'>
            <Text fontSize='sm' fontWeight='normal' color='gray.500'>
              <Text as='span' color={percentage > 0 ? "green.400" : "red.400"} fontWeight='bold'>{`${percentage}%`} more</Text>{" "} year over year.
            </Text>
          </Flex>
        </Flex>
      <Box w='100%' h="20rem">
        {chart}
      </Box>
    </DBcard>
    </NavLink>
  );
};

export default DBdashSales;