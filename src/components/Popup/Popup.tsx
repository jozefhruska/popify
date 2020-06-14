import React, { useState } from 'react';
import { FlattenSimpleInterpolation, FlattenInterpolation } from 'styled-components';

import { PopupWrapper, PopupCloseButton, PopupContent, PopupButtonWrapper } from './Popup.styles';
import PopupButton, { PopupButtonProps } from '../PopupButton/PopupButton';

/* Props - <Popup />
============================================================================= */
export type PopupProps = {
  onClose?: (() => any) | (() => Promise<any>);
  primaryButton?: PopupButtonProps;
  secondaryButton?: PopupButtonProps;
  showCloseIcon?: boolean;
  position?: 'left' | 'right';
  styles?: FlattenSimpleInterpolation | FlattenInterpolation<any>;
};

/* <Popup />
============================================================================= */
const Popup: React.FC<PopupProps> = ({
  onClose,
  primaryButton,
  secondaryButton,
  showCloseIcon,
  position,
  styles,
  children,
}) => {
  const [isOpen, setOpen] = useState<boolean>(true);

  if (!isOpen) {
    return null;
  }

  return (
    <PopupWrapper role="dialog" position={position} styles={styles}>
      {showCloseIcon && (
        <PopupCloseButton
          aria-label="Close"
          onClick={async () => {
            const onCloseResult = !!onClose && onClose();

            if (onCloseResult instanceof Promise) {
              await onCloseResult;
            }

            setOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </PopupCloseButton>
      )}

      <PopupContent>{children}</PopupContent>

      <PopupButtonWrapper>
        {primaryButton && <PopupButton {...primaryButton} />}
        {secondaryButton && <PopupButton variant="secondary" {...secondaryButton} />}
      </PopupButtonWrapper>
    </PopupWrapper>
  );
};

/* Default props - <Popup />
============================================================================= */
Popup.defaultProps = {
  showCloseIcon: true,
  position: 'right',
};

export default Popup;
