import { GraphQLClient, gql } from 'graphql-request';
import AboutScreen from '../src/components/screens/AboutScreen';
import webSitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const TOKEN = 'ae90872e2d49687b891de1cafef236';

  const DatoCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;

  const messages = await client.request(query);

  return {
    props: {
      messages,
    },
  };
}

export default webSitePageHOC(AboutScreen);
