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
  import DBdashBanner from "./DBdashBanner";
  import DBdashMinistats from "./DBdashMinistats";
  import DBdashOrders from "./DBdashOrders";
  import DBdashProjects from "./DBdashProjects";
  import DBdashSales from "./DBdashSales";
  import DBdashAd from "./DBdashAd";

import React from 'react';
import peopleImage from "../../assets/images/people-image.png";
import logoChakra from "../../assets/images/svg/logo-white.svg";

import { Flex, Grid, Image, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

function DBcontent() {

const iconBoxInside = useColorModeValue("white", "white");

return(
<Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
    <DBdashMinistats
        title={"Today's Moneys"}
        amount={"$53,000"}
        percentage={55}
        //icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    <DBdashMinistats
        title={"Today's Users"}
        amount={"2,300"}
        percentage={5}
        //icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    <DBdashMinistats
        title={"New Clients"}
        amount={"+3,020"}
        percentage={-14}
        //icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    <DBdashMinistats
        title={"Total Sales"}
        amount={"$173,000"}
        percentage={8}
        //icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
    />
    </SimpleGrid>
    <Grid
    templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
    templateRows={{ md: "1fr auto", lg: "1fr" }}
    my='26px'
    gap='24px'>
    <DBdashBanner
        title={"Built by Developers"}
        name={"Purity UI Dashboard"}
        description={
        "From colors, cards, typography to complex elements, you will find the full documentation."
        }
        image={
        <Image
            src={logoChakra}
            alt='chakra image'
            minWidth={{ md: "300px", lg: "auto" }}
        />
        }
    />
    <DBdashAd
        backgroundImage={peopleImage}
        title={"Work with the rockets"}
        description={
        "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
        }
    />
    </Grid>
    <Grid
    templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
    templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
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
    templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
    templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
    gap='24px'>
    <DBdashProjects
        title={"DBdashProjects"}
        amount={30}
        captions={["Companies", "Members", "Budget", "Completion"]}
        data={dashboardTableData}
    />
    <DBdashOrders
        title={"Orders Overview"}
        amount={30}
        data={timelineData}
    />
    </Grid>
</Flex>
);
};

export { DBcontent };