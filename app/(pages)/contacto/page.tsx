import type { Metadata } from 'next';

import Contact from '~/components/widgets/Contact';
import Features2 from '~/components/widgets/Features2';
import { featuresData2 } from '~/shared/data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Contact />
      {/* <Features2 {...featuresData2} /> */}
    </>
  );
};

export default Page;
