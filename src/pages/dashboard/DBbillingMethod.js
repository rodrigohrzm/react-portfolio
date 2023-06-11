// Chakra imports
import { Button, Flex, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
  import DBcard from "./elements/DBcard.js";
  import IconBox from "./elements/IconBox.js";
  import React from "react";

  const DBbillingMethod = ({ title, mastercard, visa }) => {
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("#dee2e6", "gray.500");
    return (
      <DBcard p='16px' mt='24px' pr='2rem'>
        <DBcard>
          <Flex justify='space-between' align='center' minHeight='60px' w='100%'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              {title}
            </Text>
            <Button colorScheme='messenger'>
              Add new card
            </Button>
          </Flex>
        </DBcard>
        <DBcard>
          <Flex
            direction={{ sm: "column", md: "row" }}
            align='center'
            w='100%'
            justify='center'
            py='1rem'>
            <Flex
              p='1rem'
              bg='transparent'
              borderRadius='15px'
              width='100%'
              border='1px solid'
              borderColor={borderColor}
              align='center'
              mb={{ sm: "24px", md: "0px" }}
              me={{ sm: "0px", md: "24px" }}>
              <IconBox me='10px' w='25px' h='22px'>
                {mastercard.icon}
              </IconBox>
              <Text color='gray.400' fontSize='md' fontWeight='semibold'>
                {mastercard.number}
              </Text>
              <Spacer />
            </Flex>
            <Flex
              p='16px'
              bg='transparent'
              borderRadius='15px'
              width='100%'
              border='1px solid'
              borderColor={borderColor}
              align='center'>
              <IconBox me='10px' w='25px' h='25px'>
                {visa.icon}
              </IconBox>
              <Text color='gray.400' fontSize='md' fontWeight='semibold'>
                {visa.number}
              </Text>
              <Spacer />
            </Flex>
          </Flex>
        </DBcard>
      </DBcard>
    );
  };
  
  export default DBbillingMethod;