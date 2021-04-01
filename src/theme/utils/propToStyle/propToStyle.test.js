import { propToStyle } from './index';

describe('propToStyle()', () => {
  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResults = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' };
      const styleResult = propToStyleResults(componentProps);

      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a number', () => {
      const propToStyleResults = propToStyle('flex');
      // <Text flex={1} />
      const componentProps = { flex: 1 };
      const styleResult = propToStyleResults(componentProps);

      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResults = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center' } };
      const styleResult = propToStyleResults(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
    test('renders two or more breakpoints resolutions', () => {
      const propToStyleResults = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } };
      const styleResult = propToStyleResults(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
