import React from 'react';
import { WebCallToAction } from './WebCallToAction'
import { WebBrands } from './WebBrands'
import { WebShowcase } from './WebShowcase'
import { WebRepairs } from './WebRepairs'
import { WebNewRentals } from './WebNewRentals'
import { WebNewsletter } from './WebNewsletter'

// https://elementor.com/marketing/wp-content/uploads/sites/9/elementor/thumbs/the-space-cube-contact-form-elementor-site-p6kmxl2aj76gnlha7qcmhas127wdcx7v08sqlhylck.png
// https://das-nano.com/
// AutoCare Hybrid Experts
// https://www.chakrauiforbeginners.com/
// https://chakra-ui.com/docs/styled-system/responsive-styles

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