import { Center, Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DBdashStats = ({ title, amount, icon, percentage }) => {
  return (
    <Flex direction='column'>
      <Flex alignItems='center'>
        <Center h="2rem" w="2rem" background='messenger.400' borderRadius='8' me='0.4rem'>
            <FontAwesomeIcon color='white' size='md' icon={icon} />
        </Center>
        <Text textTransform='uppercase' fontSize='sm' color='#2b6cb0' fontWeight='bold'>
          {title}
        </Text>
      </Flex>
      <Text fontSize='md' color='#444444' fontWeight='600' my='0.4rem'>
        {amount}
      </Text>
      <Progress
        colorScheme='messenger'
        borderRadius='8'
        h='0.3rem'
        value={percentage}
      />
    </Flex>
  );
};

export default DBdashStats;