// Chakra imports
import {
    Flex,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from "@chakra-ui/react";
  import DBcard from "./elements/DBcard";
  import IconBox from "./elements/IconBox";
  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCar } from '@fortawesome/free-solid-svg-icons'

  const DBdashMinistats = ({ title, amount, percentage, icon }) => {
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const textColor = useColorModeValue("gray.700", "white");

    return (
      <DBcard boxShadow='lg' borderRadius='8' bg='white' p='1.25rem 2rem' minH='83px'>
          <Flex flexDirection='row' align='center' justify='center' w='100%'>
            <Stat me='auto'>
              <StatLabel
                fontSize='sm'
                color='#2c5282'
                textTransform='uppercase'
                fontWeight='bold'
                pb='.1rem'>
                {title}
              </StatLabel>
              <Flex>
                <StatNumber fontSize='lg' color={textColor}>
                  {amount}
                </StatNumber>
                <StatHelpText
                  alignSelf='flex-end'
                  justifySelf='flex-end'
                  m='0px'
                  color={percentage > 0 ? "green.400" : "red.400"}
                  fontWeight='bold'
                  ps='3px'
                  fontSize='md'>
                  {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
                </StatHelpText>
              </Flex>
            </Stat>
            <IconBox as='box' h={"45px"} w={"45px"} bg={iconTeal}>
              {icon}
            </IconBox>
          </Flex>
      </DBcard>
    );
  };

export default DBdashMinistats;