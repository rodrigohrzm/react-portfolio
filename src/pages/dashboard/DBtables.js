// Chakra imports
import { Flex } from "@chakra-ui/react"
import React from "react"
import DBtablesProjects from "./DBtablesProjects"
import { dashboardTableData } from "../../data/general"

function DBtables() {
  return (
    <Flex w="100%" direction="column" pt="2.5rem">
      <DBtablesProjects
        title={"Projects Table"}
        captions={["Task", "Car", "Parts cost", "Due date", "Completion"]}
        data={dashboardTableData}
      />
    </Flex>
  )
}

export { DBtables }
