import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../../assets/images/users/avatar4.png";
import ProfileBgImage from "../../assets/images/ProfileBackground.png";
import React from "react";
//import { FaCube, FaPenFancy } from "react-icons/fa";
//import { IoDocumentsSharp } from "react-icons/io5";
import DBprofileChat from "./DBprofileChat";
import DBprofileHeader from "./DBprofileHeader";
import DBprofileSettings from "./DBprofileSettings";
import DBprofileInfo from "./DBprofileInfo";
import DBprofileProjects from "./DBprofileProjects";

function DBprofile() {
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction='column'>
      <DBprofileHeader
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
        tabs={[
          {
            name: "OVERVIEW",
            //icon: <FaCube w='100%' h='100%' />,
          },
          {
            name: "TEAMS",
            //icon: <IoDocumentsSharp w='100%' h='100%' />,
          },
          {
            name: "PROJECTS",
            //icon: <FaPenFancy w='100%' h='100%' />,
          },
        ]}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <DBprofileSettings
          title={"Platform Settings"}
          subtitle1={"ACCOUNT"}
          subtitle2={"APPLICATION"}
        />
        <DBprofileInfo
          title={"Profile Information"}
          description={
            "Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          }
          name={"Esthera Jackson"}
          mobile={"(44) 123 1234 123"}
          email={"esthera@simmmple.com"}
          location={"United States"}
        />
        <DBprofileChat title={"Conversations"} />
      </Grid>
      <DBprofileProjects title={"Projects"} description={"Architects design houses"} />
    </Flex>
  );
}

export { DBprofile };