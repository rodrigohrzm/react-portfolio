// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DBcard from "./elements/DBcard";
// Custom icons
/* import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "./elements/Icons.js"; */
import React from "react";
import DBdashStats from "./DBdashStats";

const DBdashUsers = ({ title, percentage, chart }) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <DBcard p='16px'>
      <DBcard>
        <Flex direction='column' w='100%'>
          {chart}
          <Flex direction='column' mt='24px' mb='36px' alignSelf='flex-start'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
              {title}
            </Text>
            <Text fontSize='md' fontWeight='medium' color='gray.400'>
              <Text
                as='span'
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
              </Text>{" "}
              than last week
            </Text>
          </Flex>
          <SimpleGrid gap={{ sm: "12px" }} columns={4}>
            <DBdashStats
              title={"Users"}
              amount={"32,984"}
              percentage={20}
              //icon={<WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <DBdashStats
              title={"Clicks"}
              amount={"2.42m"}
              percentage={80}
              //icon={<RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <DBdashStats
              title={"Sales"}
              amount={"2,400$"}
              percentage={30}
              //icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <DBdashStats
              title={"Items"}
              amount={"320"}
              percentage={40}
              //icon={<StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
          </SimpleGrid>
        </Flex>
      </DBcard>
    </DBcard>
  );
};

export default DBdashUsers;