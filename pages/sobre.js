import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';
import webSitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}

export default webSitePageHOC(AboutScreen);
