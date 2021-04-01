import redirects from './redirects';

console.log(redirects);
describe('config/redirects', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
