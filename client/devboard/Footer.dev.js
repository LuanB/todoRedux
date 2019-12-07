import React from 'react';

import devboard from 'devboard';

const definecard = devboard.ns('3. <Footer />');

import DemoBox from './DemoBox';
import Footer from '../components/Footer';

definecard(
  `
  This component represents the whole footer
  `
);

definecard(
  'Sample',
  <DemoBox>
    <Footer total={5} completed={3} />
  </DemoBox>
);

definecard('Add your own here...');
definecard(
  'Luans test - none completed',
  <DemoBox>
    <Footer total={10} completed={0} />
  </DemoBox>
);
definecard(
  'Luans test - no todos',
  <DemoBox>
    <Footer total={0} completed={0} />
  </DemoBox>
);

definecard(
  'Luans test - all completed',
  <DemoBox>
    <Footer total={10} completed={10} />
  </DemoBox>
);
