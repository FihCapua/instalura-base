import React from 'react';

export const WebsitePageContext = React.createContext({
  toggleModalRegister: () => {},
  getCMSContent: (cmsKey) => cmsKey,
});
