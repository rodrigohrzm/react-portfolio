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

import { Flex, Grid, Box, SimpleGrid } from "@chakra-ui/react";

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
        percentage={8}
        icon={faPhoneVolume}
    />
    </SimpleGrid>
    <Grid
    templateColumns={{ sm: "1fr", xl: "1.3fr 1.7fr" }}
    templateRows={{ sm: "repeat(2, 1fr)", xl: "1fr" }}
    gap='1.5rem'
    mb={{ lg: "1.5rem" }}>
    <DBdashSales
        title={"Sales Overview"}
        percentage={5}
        chart={<ChartLine />}
    />
    <DBdashUsers
        title={"Active Users"}
        percentage={23}
        chart={<ChartBar />}
    />
    </Grid>
    <Grid
    templateColumns={{ sm: "1fr", xl: "2fr 1fr" }}
    templateRows={{ sm: "1fr auto", xl: "1fr" }}
    gap='1.5rem'>
    <DBdashProjects
        title={"Projects due"}
        amount={30}
        captions={["Task", "Car", "Parts cost", "Completion"]}
        data={dashboardTableData}
    />
    <Box align='left' w='100%'>
    <DBdashOrders
        title={"Rental Return Dates"}
        amount={30}
        data={timelineData}
    /></Box>
    </Grid>
</Flex>
);
};

export { DBcontent };