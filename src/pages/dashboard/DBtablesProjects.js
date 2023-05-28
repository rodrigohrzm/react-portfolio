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
      <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
        <Card p='6px 0px 22px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {title}
            </Text>
          </Flex>
        </Card>
        <Card>
          <Table variant='simple' color={textColor}>
            <Thead>
              <Tr my='.8rem' pl='0px'>
                {captions.map((caption, idx) => {
                  return (
                    <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
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
                    logo={row.logo}
                    status={row.status}
                    budget={row.budget}
                    progression={row.progression}
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