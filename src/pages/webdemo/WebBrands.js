import React, { useEffect, useRef } from "react";
import { WebBrandLogo } from './WebBrandLogo';
import BrandCertification from '../../data/BrandCertification.json';

import { HStack, Text, Heading } from '@chakra-ui/react'

function WebBrands() {

const brandListRef = useRef(null);

useEffect(() => {
  const brandList = brandListRef.current;
  const brandListWidth = brandList.scrollWidth;
  const brandListContainerWidth = brandList.clientWidth;
  const animationDuration = 1500;
  const scrollSpeed = brandListWidth / animationDuration;

  let animationFrame;

  const animateScroll = () => {
    brandList.scrollLeft += scrollSpeed;

    if (brandList.scrollLeft >= brandListWidth - brandListContainerWidth) {
      brandList.scrollLeft = 0;
    }

    animationFrame = requestAnimationFrame(animateScroll);

  };

  animationFrame = requestAnimationFrame(animateScroll);

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}, []);

return (
  <>
    <style>
      {`
      @keyframes scrollList {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      `}
    </style>
    <Heading  marginX='2rem' paddingBottom="1.5rem" align="center" as='h2' size='2xl'>Our partners lead<br />the industry</Heading>
    <Text marginX='2rem' align="center" fontSize='xl'>We are certified by the giants of electrification</Text>
    <HStack
      ref={brandListRef}
      overflowX="hidden"
      marginY={{ base: '3rem', pre: '4rem', lg: '5rem' }}
      marginX={{ base: '1rem', pre: '2rem', lg: '3rem' }}
      spacing='5rem'
      className="scroll-list"
    >
      {BrandCertification.brands.map((brand, index) => (
        <WebBrandLogo key={index} make={brand.make} picture={brand.picture} />
      ))}
    </HStack>
  </>
);
}

export { WebBrands };