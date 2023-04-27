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
// Host the presentation somewhere else and leave the webdemo and puzzle on github pages.

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