import React from 'react';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import Page404 from '../error/404';

function FAQInternalScreen({ category, question }) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  );
}

FAQInternalScreen.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQInternalScreen);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (serverResponse) => {
      const response = await serverResponse.json();
      return response.data;
    });

  const pageData = faqCategories.reduce((acumulateValue, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true;
      }

      return false;
    });

    if (foundQuestion) {
      return {
        ...acumulateValue,
        category: faqCategory,
        question: foundQuestion,
      };
    }

    return acumulateValue;
  }, {});

  return {
    props: {
      category: pageData.category,
      question: pageData.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: pageData.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (serverResponse) => {
      const response = await serverResponse.json();
      return response.data;
    });

  const paths = faqCategories.reduce((acumulateValue, faqCategory) => {
    const questionPaths = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
      return { params: { slug: questionSlug } };
    });

    return [
      ...acumulateValue,
      ...questionPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
