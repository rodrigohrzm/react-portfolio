import { Flex, Progress, Td, Text, Tr, useColorModeValue, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from '@fortawesome/free-solid-svg-icons'

  import React from "react";
  function RowDBTable(props) {
    const { name, car, parts, progression } = props;
    return (
      <Tr>
        <Td minWidth={{ sm: "15.5rem" }} pl="0">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <FontAwesomeIcon color='#2c5282' h='1.5rem' w='1.5rem' me="1rem" icon={faWrench} />
            <Text
              fontSize="md"
              fontWeight="600"
              minWidth="100%"
              pl='1rem'
            >
              {name}
            </Text>
          </Flex>
        </Td>
      <Td>
        <Text fontSize="md" fontWeight="600" pb=".5rem">
          {car}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" fontWeight="600" pb=".5rem">
          {parts}
        </Text>
      </Td>
        <Td>
          <Flex direction="column">
            <Text
              fontSize="md"
              color="#2b6cb0"
              fontWeight="bold"
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
      </Tr>
    );
  }

export default RowDBTable;