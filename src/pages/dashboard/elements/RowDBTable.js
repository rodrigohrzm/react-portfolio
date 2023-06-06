import {
    Avatar,
    AvatarGroup,
    Flex,
    Icon,
    Progress,
    Td,
    Text,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  
  function RowDBTable(props) {
    const { name, car, parts, progression, due } = props;
    const textColor = useColorModeValue("gray.700", "white");
    return (
      <Tr>
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
{/*             <Icon as={logo} h={"24px"} w={"24px"} pe="5px" /> */}
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Flex>
        </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {car}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {parts}
        </Text>
      </Td>
        <Td>
          <Flex direction="column">
            <Text
              fontSize="md"
              color="teal.300"
              fontWeight="bold"
              pb=".2rem"
            >{`${progression}%`}</Text>
            <Progress
              colorScheme={progression === 100 ? "teal" : "cyan"}
              size="xs"
              value={progression}
              borderRadius="15px"
            />
          </Flex>
        </Td>
      </Tr>
    );
  }
  
  export default RowDBTable;