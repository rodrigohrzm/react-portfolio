import { Link } from "react-router-dom"

import {
  SimpleGrid,
  Center,
  VStack,
  Text,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react"

function WebShowcase() {
  return (
    <>
      <Heading
        color="messenger.100"
        marginX="2rem"
        paddingBottom="1.5rem"
        align="center"
        as="h2"
        size="2xl"
      >
        We repair everything
      </Heading>
      <Text color="messenger.100" marginX="2rem" align="center" fontSize="xl">
        Electric cars, hybrid cars, combustion cars, bodywork and interior trim
      </Text>
      <SimpleGrid
        columns={{ base: "1", lg: "2" }}
        marginY={{ base: "2rem", lg: "3rem" }}
      >
        <Center align="center" marginBottom={{ base: "2rem", lg: "0" }}>
          <Box boxShadow="outline" outlineColor="gold">
            <iframe
              title="showcase"
              src="https://www.youtube.com/embed/ZLn0_1XTZF4"
              width="512px"
              height="288px"
            />
          </Box>
        </Center>
        <VStack
          marginLeft={{ base: "0", xl: "-2rem", "2xl": "-5rem" }}
          marginX="auto"
          paddingX={{ base: "1.5rem", sm: "3rem" }}
          justify="center"
          align="left"
          spacing="1.5rem"
          maxW="60rem"
        >
          <Text color="white" fontSize="lg">
            Our skilled technicians are trained to diagnose and repair any
            mechanical issues your vehicle may have, from engine problems to
            transmission repairs. In addition, we also specialize in bodywork
            repairs, including dent removal, painting, and panel replacement.
          </Text>
          <Text color="white" fontSize="lg">
            With over 30 years of experience in the industry, our car workshop
            has built a loyal customer base and a reputation for providing
            top-quality service and expert repairs. We are committed to
            upholding our high standards for many years to come.
          </Text>
          <Button
            variant="outline"
            w="16rem"
            color="white"
            _hover={{ color: "#0078ff", bg: "#d0e6ff", borderColor: "#a2ceff" }}
            size="lg"
          >
            <Link to="/react-portfolio">Our success stories</Link>
          </Button>
        </VStack>
      </SimpleGrid>
    </>
  )
}

export { WebShowcase }
