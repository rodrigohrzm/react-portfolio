// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import DBtablesAuthors from "./DBtablesAuthors";
import DBtablesProjects from "./DBtablesProjects";
import { tablesTableData, dashboardTableData } from "../../data/general";

function DBtables() {
  return (
    <Flex w='100%' direction='column' pt="2.5rem">
      <DBtablesProjects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export { DBtables };