import React from 'react';
import './Webdemo.css';
import { WebCallToAction } from './WebCallToAction'
import { WebBrands } from './WebBrands'
import { WebShowcase } from './WebShowcase'
import { WebRepairs } from './WebRepairs'
import { WebNewRentals } from './WebNewRentals'
import { WebNewsletter } from './WebNewsletter'

// https://das-nano.com/
// AutoCare Hybrid Experts
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
// https://www.chakrauiforbeginners.com/

function Webdemo() {
    return (
    <>
      <WebCallToAction />
      <WebBrands />
      <WebShowcase />
      <WebRepairs />
      <WebNewRentals />
      <WebNewsletter />
    </>
    );
  }

  export { Webdemo };