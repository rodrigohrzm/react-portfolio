import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import DBcard from "./elements/DBcard.js";
import RowTimeline from "./elements/RowTimeline";
import { NavLink } from 'react-router-dom';

const DBdashOrders = ({ title, data }) => {

  return (
    <NavLink to={"/dashboard/bookings"}>
    <DBcard ml={{ sm: "", xl: '50%' }} boxShadow={{base: 'lg', xl: 'none'}} borderRadius={{base: '8', xl: 'none'}} bg={{base: 'white', xl: 'none'}} p='2.5rem 2rem 1.75rem 2rem' overflowX={{ base: "scroll", xl: "hidden" }} >
        <Flex direction='column' w='100%'>
          <Text textTransform='uppercase' fontSize='lg' color='#2c5282' fontWeight='bold' pb='2.5rem'>
            {title}
          </Text>
        </Flex>
        <Flex ps='1.25rem' position='relative' direction='column'>
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
  </NavLink>
  );
};

export default DBdashOrders;