/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => css`
            @media screen and (min-width: ${breakpoints[breakpointName]}px) { 
                // Acessando tipo de estilo de @media - junto c/ objeto da dimensão
                ${cssByBreakpoints[breakpointName]}
            }
        `);
}
