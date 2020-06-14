import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import theme from '../../theme';

/* Props - <PopupButton />
============================================================================= */
export type PopupButtonProps = {
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

/* <PopupButton />
============================================================================= */
const PopupButton = styled.button<PopupButtonProps>`
  transition: all 0.2s ease-out;
  width: 100%;
  padding: ${theme.space.s3} ${theme.space.s4};
  border: none;
  border-radius: ${theme.radii.normal};
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: ${theme.colors.grays[3]};
      color: ${theme.colors.grays[0]};

      &:focus,
      &:hover {
        background: ${theme.colors.grays[4]};
      }

      &:hover:disabled {
        background: ${theme.colors.grays[3]};
        color: ${theme.colors.grays[0]};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background: ${theme.colors.grays[1]};
      color: ${theme.colors.grays[4]};

      &:focus,
      &:hover {
        background: ${theme.colors.grays[2]};
      }

      &:hover:disabled {
        background: ${theme.colors.grays[1]};
        color: ${theme.colors.grays[4]};
      }
    `}
`;

/* Default props - <PopupButton />
============================================================================= */
PopupButton.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default PopupButton;
