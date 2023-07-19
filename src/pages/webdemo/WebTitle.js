import { Box, Center, Heading } from "@chakra-ui/react"

function WebTitle(props) {
  return (
    <section /* style={{marginBottom: "3rem"}}*/>
      <Box
        height={{ base: "4rem", md: "6rem", lg: "6rem" }}
        bgGradient="linear-gradient(150deg, #000D5D 0%, #095CA6 100%)"
        px="2"
        py="2"
      >
        <Box
          backgroundImage={require("../../assets/images/bg-pattern.png")}
          opacity="0.25"
          height={{ base: "4rem", md: "6rem", lg: "6rem" }}
          zIndex="-1"
        ></Box>
      </Box>
      <Center
        height={{ base: "4rem", md: "6rem", lg: "6rem" }}
        marginTop={{ base: "-4rem", md: "-6rem", lg: "-6rem" }}
      >
        <Heading
          as="h1"
          size="lg"
          opacity="100%"
          bg="none"
          color="white"
          textTransform="uppercase"
        >
          {props.pageName}
        </Heading>
      </Center>
    </section>
  )
}

export { WebTitle }
