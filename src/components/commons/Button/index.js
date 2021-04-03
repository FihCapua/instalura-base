/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle/index';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

const ButtonDefault = css`
    color: #fff;
    background-color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
    color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
`;

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;

    ${TextStyleVariantsMap.smallestException}

    ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
            ${TextStyleVariantsMap.smallestException}
        `,
    md: css`
            ${TextStyleVariantsMap.paragraph1}
        `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

    ${propToStyle('margin')}
    ${propToStyle('display')}
`;

// eslint-disable-next-line react/prop-types
export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propType = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
