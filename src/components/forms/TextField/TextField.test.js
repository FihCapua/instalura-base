import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';
import TextField from './index';
import WebsiteGlobalProvider from '../../wrappers/WebsitePage/provider';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <WebsiteGlobalProvider>
        <TextField
          placeholder="Nome"
          value="Fiama"
          onChange={() => {}}
          name="nome"
        />
      </WebsiteGlobalProvider>,
    );

    // screen.debug();

    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
  });
});
