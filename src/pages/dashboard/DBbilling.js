// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "../../assets/images/BackgroundCard1.png";
//import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
//import { FaPaypal, FaWallet } from "react-icons/fa";
//import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "../../data/general";
import DBbillingInfo from "./DBbillingInfo";
import DBbillingCC from "./DBbillingCC";
import DBbillingInvoices from "./DBbillingInvoices";
import DBbillingMethod from "./DBbillingMethod";
import DBbillingStats from "./DBbillingStats";
import DBbillingTrasnactions from "./DBbillingTrasnactions";

function DBbilling() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap='26px'>
            <DBbillingCC
              backgroundImage={BackgroundCard1}
              title={"Purity UI"}
              number={"7812 2139 0823 XXXX"}
              validity={{
                name: "VALID THRU",
                data: "05/24",
              }}
              cvv={{
                name: "CVV",
                code: "09x",
              }}
              icon={
                <Icon
                  /* as={RiMastercardFill} */
                  w='48px'
                  h='auto'
                  color='gray.400'
                />
              }
            />
            <DBbillingStats
              icon={<Icon h={"24px"} w={"24px"} color='white' /* as={FaWallet} */ />}
              title={"Salary"}
              description={"Belong interactive"}
              amount={2000}
            />
            <DBbillingStats
              icon={<Icon h={"24px"} w={"24px"} color='white' /* as={FaPaypal} */ />}
              title={"Paypal"}
              description={"Freelance Payment"}
              amount={4550}
            />
          </Grid>
          <DBbillingMethod
            title={"Payment Method"}
            mastercard={{
              //icon: <MastercardIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
            visa={{
              //icon: <VisaIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
          />
        </Box>
        <DBbillingInvoices title={"Invoices"} data={invoicesData} />
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}>
        <DBbillingInfo title={"Billing Information"} data={billingData} />
        <DBbillingTrasnactions
          title={"Your Transactions"}
          date={"23 - 30 March"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />
      </Grid>
    </Flex>
  );
}

export { DBbilling };