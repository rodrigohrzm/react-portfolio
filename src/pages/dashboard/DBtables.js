// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import DBtablesAuthors from "./DBtablesAuthors";
import DBtablesProjects from "./DBtablesProjects";
import { tablesTableData, dashboardTableData } from "../../data/general";

function DBtables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <DBtablesAuthors
        title={"Authors Table"}
        captions={["Author", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      />
      <DBtablesProjects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export { DBtables };