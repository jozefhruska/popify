import styled from 'styled-components';

import theme from '../../theme';

import { PopupProps } from './Popup';

export const PopupWrapper = styled.div<Pick<PopupProps, 'position' | 'styles'>>`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  max-width: 20rem;
  padding-top: ${theme.space.s8};
  margin: ${theme.space.s3};
  border-radius: ${theme.radii.normal};
  background: ${theme.colors.grays[0]};

  ${({ position }) => `${position}: 0;`}

  @media (min-width: ${theme.breakpoints[0]}) {
    margin: ${theme.space.s6};
  }

  ${({ styles }) => styles}
`;

export const PopupCloseButton = styled.button`
  transition: color 0.2s ease-out;
  position: absolute;
  top: ${theme.space.s4};
  right: ${theme.space.s4};
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  color: ${theme.colors.grays[2]};
  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    color: ${theme.colors.grays[3]};
  }
`;

export const PopupContent = styled.div`
  width: 100%;
  padding: ${theme.space.s6};
  box-sizing: border-box;
  text-align: center;
`;

export const PopupButtonWrapper = styled.div`
  display: grid;
  grid-gap: ${theme.space.s3};
  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
  padding: 0 ${theme.space.s4} ${theme.space.s4};
`;
