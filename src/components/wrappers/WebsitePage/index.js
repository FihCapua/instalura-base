/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import SEO from '../../commons/SEO';
import Menu from '../../commons/Menu';
import { Box } from '../../foundation/layout/Box';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/formCadastro';
import Footer from '../../commons/Footer';
import { WebsitePageContext } from './context';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
}) {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalRegister: () => {
          setModalState(!isModalOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),
      }}
    >

      <SEO
        {...seoProps}
      />

      <Box
        display="flex"
        flexDirection="column"
        flex="1"
        {...pageBoxProps}
      >
        {menuProps.display && (
          <Menu
            onRegisterClick={() => setModalState(true)}
          />
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro
              propsDoModal={propsDoModal}
              onClose={() => setModalState(false)}
            />
          )}
        </Modal>
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
