  import ChartBar from "./elements/ChartBar";
  import ChartLine from "./elements/ChartLine";
  import { dashboardTableData, timelineData } from "../../data/general";
  import DBdashUsers from "./DBdashUsers";
  import DBdashMinistats from "./DBdashMinistats";
  import DBdashOrders from "./DBdashOrders";
  import DBdashProjects from "./DBdashProjects";
  import DBdashSales from "./DBdashSales";
  import { faCoins, faUser, faMagnifyingGlass, faPhoneVolume  } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

import { Flex, Grid, SimpleGrid } from "@chakra-ui/react";

function DBcontent() {

return(
<Flex direction='column' pt="3rem">
    <SimpleGrid columns={{ base: 1, kid: 2, xl: 4 }} spacing='1.5rem'>
    <DBdashMinistats
        title={"Weekly earnings"}
        amount={"42.500€"}
        percentage={55}
        icon={faCoins}
    />
    <DBdashMinistats
        title={"Weekly customers"}
        amount={"33"}
        percentage={10}
        icon={faUser}
    />
    <DBdashMinistats
        title={"Weekly web visits"}
        amount={"+1.220"}
        percentage={-14}
        icon={faMagnifyingGlass}
    />
    <DBdashMinistats
        title={"Weekly phonecalls"}
        amount={"9"}
        percentage={12.5}
        icon={faPhoneVolume}
    />
    </SimpleGrid>
    <Grid
    templateColumns={{ sm: "1fr", xl: "1.3fr 1.7fr" }}
    templateRows={{ sm: "repeat(2, 1fr)", xl: "1fr" }}
    gap='2rem'
    my={{ base: '2rem', xl: "3rem" }}>
    <DBdashSales
        title={"Sales Overview"}
        percentage={10}
        chart={<ChartLine />}
    />
    <DBdashUsers
        title={"Activity"}
        percentage={23}
        chart={<ChartBar />}
    />
    </Grid>
    <SimpleGrid
    columns={{ base: 1, xl: 2 }}
    spacing='2rem'>
    <DBdashProjects
        title={"Projects due"}
        amount={30}
        captions={["Task", "Car", "Parts cost", "Completion"]}
        data={dashboardTableData}
    />

    <DBdashOrders
        title={"Rental Return Dates"}
        amount={30}
        data={timelineData}
    />
    </SimpleGrid>
</Flex>
);
};

export { DBcontent };