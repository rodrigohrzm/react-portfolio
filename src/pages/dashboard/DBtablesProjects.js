import { Flex, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import DBcard from "./elements/DBcard.js";
import RowProjects from "./elements/RowProjects";
import React from "react";

  const DBtablesProjects = ({ title, captions, data }) => {
    return (
      <DBcard p='0.5rem 0 1.5rem 0' boxShadow='lg' borderRadius='8' bg='white' mx='2rem' overflowX={{ sm: "scroll", xl: "hidden" }}>
          <Flex direction='column'>
            <Text textTransform='uppercase' m='1.5rem 0 0 2rem' fontSize='xl' color='#2c5282' fontWeight='bold' pb='.5rem'>
              {title}
            </Text>
          </Flex>
          <Table marginTop='1.5rem' variant='simple' color='#2c5282'>
            <Thead>
              <Tr my='.8rem'>
                {captions.map((caption, idx) => {
                  return (
                    <Th color='#2b6cb0' key={idx} ps={idx === 0 ? "5rem" : null} fontSize='md' >
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
      </DBcard>
    );
  };
export default DBtablesProjects;