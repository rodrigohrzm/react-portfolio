import React from "react";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from '@fortawesome/free-solid-svg-icons'

function RowTimeline(props) {
  const { title, date, color, index, arrLength } = props;

  return (
    <Flex alignItems="center" minH="5rem" justifyContent="start" >
      <Flex direction="column" h="100%" mt={index === arrLength - 1 ? "-1.5rem" : "0"}>
        <Center
            bg="white"
            h="2rem"
            w="2rem"
            zIndex="1"
            marginLeft='-1rem'
            border='2px'
            borderRadius='8'
            borderColor={color}
        >
          <FontAwesomeIcon icon={faCar} color='#444444' />
        </Center>
        <Box
          w="2px"
          bg={{base: 'gray.200', xl: 'gray.400'}}
          h={index === arrLength - 1 ? "1.5rem" : "3rem"}
        ></Box>
      </Flex>
      <Flex
          w='10rem'
          ml='1.5rem'
          mt='-3rem'
          direction="column"
          justifyContent="flex-start"
          h="100%"
        >
        <Text fontSize="md" color='#2b6cb0' fontWeight="600" textDecoration='uppercase'>
          {date}
        </Text>
        <Text fontSize="sm" color="#444444" fontWeight="600">
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}

export default RowTimeline;