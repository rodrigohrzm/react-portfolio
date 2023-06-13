// Chakra imports
import { Box, Flex, Grid, Image, Center } from "@chakra-ui/react";
import React from "react";
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
import DBbillingTransactions from "./DBbillingTransactions";
import { faPaypal, faStripeS } from '@fortawesome/free-brands-svg-icons'


function DBbilling() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
        <Box>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr",
              '2xl': "1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", '2xl': "1fr" }}
            gap='26px'
            marginRight={{base: '0', lg: '1.5rem', '2xl': '0' }}
          >
            <DBbillingCC
              title={"Purity UI"}
              number={"XXXX XXXX XXXX 3657"}
              validity={{
                name: "VALID THRU",
                date: "05/25",
              }}
              cvv={{
                name: "CVV",
                code: "XX8",
              }}
              icon={
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'
                  w='64px'
                  h='auto'
                  color='gray.400'
                />
              }
            />
            <Center direction='row'>
            <DBbillingStats
              icon={faStripeS}
              title={"Stripe Balance"}
              description={"Withdrawal available"}
              amount={2618}
            />
            <DBbillingStats
              icon={faPaypal}
              title={"PayPal Balance"}
              description={"Withdrawal available"}
              amount={4550}
            /></Center>
          </Grid>
          <DBbillingMethod
            title={"Other cards"}
            mastercard={{
              icon: <Image src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' w='100%'h='100%' />,
              number: "XXXX XXXX XXXX 7618",
            }}
            visa={{
              icon: <Image src='https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' w='100%'h='100%' />,
              number: "XXXX XXXX XXXX 2139",
            }}
          />
        </Box>
        <DBbillingInvoices title={"Invoices"} data={invoicesData} />
      </Grid>
      <Grid pt='1.5rem' templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }} gap='1.5rem'>
        <DBbillingInfo title={"Billing Information"} data={billingData} />
        <DBbillingTransactions
          title={"Your Transactions"}
          date={"23 - 30 May"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />
      </Grid>
    </Flex>
  );
}

export { DBbilling };