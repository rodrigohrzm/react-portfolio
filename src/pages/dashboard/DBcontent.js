  import ChartBar from "./elements/ChartBar";
  import ChartLine from "./elements/ChartLine";
  // Custom icons
/*   import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
  } from "../dashboard/elements/Icons.js"; */
  import { dashboardTableData, timelineData } from "../../data/general";
  import DBdashUsers from "./DBdashUsers";
  import DBdashMinistats from "./DBdashMinistats";
  import DBdashOrders from "./DBdashOrders";
  import DBdashProjects from "./DBdashProjects";
  import DBdashSales from "./DBdashSales";

import React from 'react';

import { Flex, Grid, Box, SimpleGrid } from "@chakra-ui/react";

function DBcontent() {

return(
<Flex direction='column' pt={{ base: "7.5rem", md: "4.5rem" }}>
    <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} spacing='24px'>
    <DBdashMinistats
        title={"Weekly earnings"}
        amount={"$53,000"}
        percentage={55}
        //icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    <DBdashMinistats
        title={"Weekly customers"}
        amount={"2,300"}
        percentage={5}
        //icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    <DBdashMinistats
        title={"Weekly web visits"}
        amount={"+3,020"}
        percentage={-14}
        //icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    <DBdashMinistats
        title={"Weekly phonecalls"}
        amount={"$173,000"}
        percentage={8}
        //icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    </SimpleGrid>
    <Grid
    templateColumns={{ sm: "1fr", xl: "1.3fr 1.7fr" }}
    templateRows={{ sm: "repeat(2, 1fr)", xl: "1fr" }}
    gap='24px'
    mb={{ lg: "26px" }}>
    <DBdashUsers
        title={"Active Users"}
        percentage={23}
        chart={<ChartBar />}
    />
    <DBdashSales
        title={"Sales Overview"}
        percentage={5}
        chart={<ChartLine />}
    />
    </Grid>
    <Grid
    templateColumns={{ sm: "1fr", xl: "2fr 1fr" }}
    templateRows={{ sm: "1fr auto", xl: "1fr" }}
    gap='24px'>
    <DBdashProjects
        title={"Projects due"}
        amount={30}
        captions={["Task", "Car", "Parts cost", "Completion"]}
        data={dashboardTableData}
    />
    <Box align='left' ><DBdashOrders
        title={"Rental Bookings"}
        amount={30}
        data={timelineData}
    /></Box>
    </Grid>
</Flex>
);
};

export { DBcontent };