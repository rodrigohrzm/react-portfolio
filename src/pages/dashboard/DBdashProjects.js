import { Flex, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react"
import DBcard from "./elements/DBcard.js"
import RowDBTable from "./elements/RowDBTable"
import React from "react"
import { NavLink } from "react-router-dom"

const DBdashProjects = ({ title, amount, captions, data }) => {
  return (
    <NavLink to={"/dashboard/projects"}>
      <DBcard
        w={{ sm: "", xl: "150%" }}
        boxShadow="lg"
        borderRadius="8"
        bg="white"
        p="2.5rem 2rem 1.75rem 2rem"
        overflowX={{ base: "scroll", xl: "hidden" }}
      >
        <Flex direction="row" mb="2rem">
          <Text
            textTransform="uppercase"
            fontSize="lg"
            color="#2c5282"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Flex mx="1rem" mt="0.25rem" align="center">
            <Text fontSize="sm" color="gray.500" fontWeight="normal">
              <Text fontWeight="600" as="span">
                {amount} done
              </Text>{" "}
              this month.
            </Text>
          </Flex>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr my=".8rem" ps="0">
              {captions.map((caption, idx) => {
                return (
                  <Th
                    key={idx}
                    ps={idx === 0 ? "2rem" : null}
                    fontSize="sm"
                    color="#2b6cb0"
                  >
                    {caption}
                  </Th>
                )
              })}
            </Tr>
          </Thead>
          <Tbody color="#444444">
            {data.slice(0, 6).map((row) => {
              return (
                <RowDBTable
                  key={row.name}
                  name={row.name}
                  car={row.car}
                  parts={row.parts}
                  progression={row.progression}
                />
              )
            })}
          </Tbody>
        </Table>
      </DBcard>
    </NavLink>
  )
}

export default DBdashProjects
