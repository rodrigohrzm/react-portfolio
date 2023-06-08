import React from "react";
import { Tr, Td, Flex, Text, Progress, Icon, Button, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function RowProjects(props) {
  const { name, car, parts, progression, due } = props;
  return (
    <Tr>
      <Td minWidth={{ sm: "16rem" }} px='3rem' >
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <FontAwesomeIcon h='1.5rem' w='1.5rem' me="1rem" icon={faWrench} />
          <Text
            fontSize="md"
            color='#444444'
            fontWeight="600"
            minWidth="100%"
            pl='1rem'
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color='#444444' fontWeight="600" pb=".5rem">
          {car}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color='#444444' fontWeight="600" pb=".5rem">
          {parts}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color='#444444' fontWeight="600" pb=".5rem">
          {due}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color='#2b6cb0'
            fontWeight="600"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme={progression === 100 ? "yellow" : "messenger"}
            size="xs"
            value={progression}
            borderRadius="1rem"
          />
        </Flex>
      </Td>
      <Td>
        <Button color="gray.500" p="0" bg="transparent">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </Button>
      </Td>
    </Tr>
  );
}

export default RowProjects;