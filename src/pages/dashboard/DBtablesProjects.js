// Chakra imports
import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "./elements/DBcard.js";
  import RowProjects from "./elements/RowProjects";
  import React from "react";

  const Projects = ({ title, captions, data }) => {
    const textColor = useColorModeValue("gray.700", "white");
    return (
      <Card borderRadius='8px' bg='white' mx='2rem' overflowX={{ sm: "scroll", xl: "hidden" }}>
        <Card p='0.5rem 0 1.5rem 0'>
          <Flex direction='column'>
            <Text m='1.5rem 0 0 2rem' fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {title}
            </Text>
          </Flex>
        </Card>
        <Card>
          <Table variant='simple' color={textColor}>
            <Thead>
              <Tr my='.8rem'>
                {captions.map((caption, idx) => {
                  return (
                    <Th color='gray.400' key={idx} ps={idx === 0 ? "5rem" : null}>
                      {caption}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row) => {
                return (
                  <RowProjects
                    key={row.name}
                    name={row.name}
                    car={row.car}
                    parts={row.parts}
                    progression={row.progression}
                    due={row.due}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Card>
      </Card>
    );
  };
  
  export default Projects;