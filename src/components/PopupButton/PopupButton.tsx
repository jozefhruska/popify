import styled from 'styled-components';

import theme from '../../theme';

/* <PopupButton />
============================================================================= */
const PopupButton = styled.button`
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
`;

/* Default props - <PopupButton />
============================================================================= */
PopupButton.defaultProps = {
  type: 'button',
};

/* <PrimaryPopupButton />
============================================================================= */
export const PrimaryPopupButton = styled(PopupButton)`
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
`;

/* <SecondaryPopupButton />
============================================================================= */
export const SecondaryPopupButton = styled(PopupButton)`
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
`;
