// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DBcard from "./elements/DBcard.js";
import IconBox from "./elements/IconBox.js";
import { Separator } from "./elements/Separator.js";
import React from "react";

const DBbillingStats = ({ icon, title, description, amount }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <DBcard p='16px' display='flex' align='center' justify='center'>
      <DBcard>
        <Flex direction='column' align='center' w='100%' py='14px'>
          <IconBox as='box' h={"60px"} w={"60px"} bg={iconTeal}>
            {icon}
          </IconBox>
          <Flex
            direction='column'
            m='14px'
            justify='center'
            textAlign='center'
            align='center'
            w='100%'>
            <Text fontSize='md' color={textColor} fontWeight='bold'>
              {title}
            </Text>
            <Text
              mb='24px'
              fontSize='xs'
              color='gray.400'
              fontWeight='semibold'>
              {description}
            </Text>
            <Separator />
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {`%${amount}`}
          </Text>
        </Flex>
      </DBcard>
    </DBcard>
  );
};

export default DBbillingStats;