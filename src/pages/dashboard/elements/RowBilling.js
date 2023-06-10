import { Box, Button, Flex, Text } from "@chakra-ui/react";
  import React from "react";

  function RowBilling(props) {
    const { name, company, email, number } = props;

    return (
      <Box p="24px" my="22px" borderRadius="8" border='solid' borderWidth='1px' borderColor='#d0e6ff'>
        <Flex justify="space-between" w="100%">
          <Flex direction="column" maxWidth="70%">
            <Text fontSize='sm' color='#2b6cb0' textTransform='uppercase' fontWeight="bold" mb="10px">
              {name}
            </Text>
            <Text color="gray.500" fontSize="sm" fontWeight="semibold">
              Company:{" "}
              <Text as="span" color="#444444">
                {company}
              </Text>
            </Text>
            <Text color="gray.500" fontSize="sm" fontWeight="semibold">
              Email:{" "}
              <Text as="span" color="#444444">
                {email}
              </Text>
            </Text>
            <Text color="gray.500" fontSize="sm" fontWeight="semibold">
              VAT Number:{" "}
              <Text as="span" color="#444444">
                {number}
              </Text>
            </Text>
          </Flex>
          <Flex
            direction={{ sm: "column", md: "row" }}
            align="flex-start"
            p={{ md: "24px" }}
          >
            <Button
              p="0px"
              mb={{ sm: "10px", md: "0px" }}
              me={{ md: "12px" }}
              colorScheme="red"
              variant='outline'
              borderColor='transparent'
            >
              <Flex cursor="pointer" align="center" p="12px">
                <Text fontSize="sm" fontWeight="semibold">
                  Delete
                </Text>
              </Flex>
            </Button>
            <Button colorScheme='messenger'>
              <Flex cursor="pointer" align="center" p="12px">
                <Text fontWeight="semibold">
                  Edit
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    );
  }

  export default RowBilling;