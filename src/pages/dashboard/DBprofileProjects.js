// Chakra imports
import {
    Button,
    Flex,
    Grid,
    Icon,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Assets
  import avatar2 from "../../assets/images/users/avatar2.png";
  import avatar4 from "../../assets/images/users/avatar4.png";
  import avatar6 from "../../assets/images/users/avatar6.png";
  import imageArchitect1 from "../../assets/images/ImageArchitect1.png";
  import imageArchitect2 from "../../assets/images/ImageArchitect2.png";
  import imageArchitect3 from "../../assets/images/ImageArchitect3.png";
  // Custom components
import DBcard from "./elements/DBcard.js";
  import React from "react";
  //import { FaPlus } from "react-icons/fa";
  import DBprofileCard from "./DBprofileCard";
  
  const DBprofileProjects = ({ title, description }) => {
    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
  
    return (
      <DBcard p='16px' my='24px'>
        <DBcard p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              {title}
            </Text>
            <Text fontSize='sm' color='gray.500' fontWeight='400'>
              {description}
            </Text>
          </Flex>
        </DBcard>
        <DBcard px='5px'>
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap='24px'>
            <DBprofileCard
              image={imageArchitect1}
              name={"Project #1"}
              category={"Modern"}
              description={
                "As Uber works through a huge amount of internal management turmoil."
              }
              avatars={[avatar2, avatar4, avatar6]}
            />
            <DBprofileCard
              image={imageArchitect2}
              name={"Project #2"}
              category={"Scandinavian"}
              description={
                "Music is something that every person has his or her own specific opinion about."
              }
              avatars={[avatar4, avatar2, avatar6, avatar4]}
            />
            <DBprofileCard
              image={imageArchitect3}
              name={"Project #3"}
              category={"Minimalist"}
              description={
                "Different people have different taste, especially various types of music."
              }
              avatars={[avatar2, avatar4, avatar6]}
            />
            <Button
              p='0px'
              bg='transparent'
              color='gray.500'
              border='1px solid lightgray'
              borderRadius='15px'
              minHeight={{ sm: "200px", md: "100%" }}>
              <Flex direction='column' justifyContent='center' align='center'>
                <Icon /* as={FaPlus} */ fontSize='lg' mb='12px' />
                <Text fontSize='lg' fontWeight='bold'>
                  Create a New Project
                </Text>
              </Flex>
            </Button>
          </Grid>
        </DBcard>
      </DBcard>
    );
  };
  
  export default DBprofileProjects;