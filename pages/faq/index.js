import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

// eslint-disable-next-line react/prop-types
export default function FAQPage({ faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((serverResponse) => serverResponse.json())
    .then((convertedResponse) => convertedResponse.data);

  // eslint-disable-next-line no-console
  console.log('faqCategories', faqCategories);

  return {
    props: {
      faqCategories,
    },
  };
}
