import {
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react"

function WebRepairs() {
  return (
    <SimpleGrid
      paddingY={{ base: "2.5rem", xl: "1rem" }}
      paddingX={{ base: "1.5rem", sm: "3rem" }}
      columns={{ base: "1", xl: "2" }}
    >
      <VStack></VStack>
      <HStack
        bg="#f0f0f0"
        marginRight={{ base: "-1.5rem", sm: "-3rem" }}
        marginLeft={{ base: "0.5rem", sm: "2rem", pre: "4rem", "2xl": "6rem" }}
        padding="1.5rem"
        borderLeftRadius="8"
        shadow="2xl"
      >
        <Image
          src={require("../../assets/images/lining.jpg")}
          boxSize="124px"
          borderRadius="8"
        />
        <VStack align="left" paddingLeft="1rem">
          <Heading color="#444444" size="md" as="h4">
            Interior
          </Heading>
          <Text fontSize="xl">
            Wiping, vacuuming, repairing and conditioning of surfaces to ensure
            a clean and comfortable cabin
          </Text>
        </VStack>
      </HStack>
      <HStack
        marginTop={{ base: "3rem", xl: "-2.5rem" }}
        bg="#f0f0f0"
        marginLeft={{ base: "-1.5rem", sm: "-3rem" }}
        marginRight={{
          base: "0.5rem",
          sm: "2rem",
          pre: "4rem",
          xl: "2rem",
          "2xl": "0",
        }}
        padding="1.5rem"
        borderRightRadius="8"
        shadow="2xl"
      >
        <VStack align="left" paddingLeft="1rem">
          <Heading color="#444444" size="md" as="h4">
            Powertrain
          </Heading>
          <Text fontSize="xl">
            Inspection, troubleshooting, and repair of any damaged or faulty
            wires, connectors, or electrical components
          </Text>
        </VStack>
        <Image
          src={require("../../assets/images/clutch.jpg")}
          boxSize="124px"
          borderRadius="8"
        />
      </HStack>
      <VStack></VStack>
      <VStack></VStack>
      <HStack
        marginTop={{ base: "3rem", xl: "-2.5rem" }}
        bg="#f0f0f0"
        marginRight={{ base: "-1.5rem", sm: "-3rem" }}
        marginLeft={{ base: "0.5rem", sm: "2rem", pre: "4rem", "2xl": "6rem" }}
        padding="1.5rem"
        borderLeftRadius="8"
        shadow="2xl"
      >
        <Image
          src={require("../../assets/images/dent.jpg")}
          boxSize="124px"
          borderRadius="8"
        />
        <VStack align="left" paddingLeft="1rem">
          <Heading color="#444444" size="md" as="h4">
            Bodywork
          </Heading>
          <Text fontSize="xl">
            Addressing any dents, scratches or rust to preserve appearance,
            structural integrity and resale value
          </Text>
        </VStack>
      </HStack>
      <HStack
        marginTop={{ base: "3rem", xl: "-2.5rem" }}
        bg="#f0f0f0"
        marginLeft={{ base: "-1.5rem", sm: "-3rem" }}
        marginRight={{
          base: "0.5rem",
          sm: "2rem",
          pre: "4rem",
          xl: "2rem",
          "2xl": "0",
        }}
        padding="1.5rem"
        borderRightRadius="8"
        shadow="2xl"
      >
        <VStack align="left" paddingLeft="1rem">
          <Heading color="#444444" size="md" as="h4">
            Electrics
          </Heading>
          <Text fontSize="xl">
            Inspection, troubleshooting, and repair of any damaged or faulty
            wires, connectors, or electrical components
          </Text>
        </VStack>
        <Image
          src={require("../../assets/images/electric.jpg")}
          boxSize="124px"
          borderRadius="8"
        />
      </HStack>
      <VStack></VStack>
      <VStack></VStack>
      <HStack
        marginTop={{ base: "3rem", xl: "-2.5rem" }}
        bg="#f0f0f0"
        marginRight={{ base: "-1.5rem", sm: "-3rem" }}
        marginLeft={{ base: "0.5rem", sm: "2rem", pre: "4rem", "2xl": "6rem" }}
        padding="1.5rem"
        borderLeftRadius="8"
        shadow="2xl"
      >
        <Image
          src={require("../../assets/images/paint.jpg")}
          boxSize="124px"
          borderRadius="8"
        />
        <VStack align="left" paddingLeft="1rem">
          <Heading color="#444444" size="md" as="h4">
            Paint
          </Heading>
          <Text fontSize="xl">
            Washing, waxing, and polishing to preserve the shine, protect
            against environmental factors and prevent fading
          </Text>
        </VStack>
      </HStack>
    </SimpleGrid>
  )
}

export { WebRepairs }
