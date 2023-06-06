// Chakra imports
import {
    Flex,
    Icon,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import DBcard from "./elements/DBcard.js";
  import RowDBTable from "./elements/RowDBTable";
  import React from "react";
  //import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
  
  const DBdashProjects = ({ title, amount, captions, data }) => {
    const textColor = useColorModeValue("gray.700", "white");
  
    return (
      <DBcard p='16px' overflowX={{ sm: "scroll", xl: "hidden" }}>
        <DBcard p='12px 0px 28px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {title}
            </Text>
            <Flex align='center'>
{/*               <Icon
                as={IoCheckmarkDoneCircleSharp}
                color='teal.300'
                w={4}
                h={4}
                pe='3px'
              /> */}
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                <Text fontWeight='bold' as='span'>
                  {amount} done
                </Text>{" "}
                this month.
              </Text>
            </Flex>
          </Flex>
        </DBcard>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' ps='0px'>
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
                <RowDBTable
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
  
  export default DBdashProjects;