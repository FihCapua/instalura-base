/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsiteGlobalProvider from '../provider';
import WebsitePageWrapper from '..';

export default function websitePageHOC(PageComponent, { pageWrapperProps }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
