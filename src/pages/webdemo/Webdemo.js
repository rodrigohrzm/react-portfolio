// import './Webdemo1.css';
import React from 'react';
import { WebCallToAction } from './WebCallToAction'
import { WebBrands } from './WebBrands'
import { WebShowcase } from './WebShowcase'
import { WebRepairs } from './WebRepairs'
import { WebNewRentals } from './WebNewRentals'
import { WebNewsletter } from './WebNewsletter'

// https://das-nano.com/

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