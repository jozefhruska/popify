import React from 'react';
import { mount } from 'enzyme';

import Popup from './Popup';
import { PopupContent, PopupCloseButton } from './Popup.styles';
import PopupButton from '../PopupButton/PopupButton';

describe('<Popup />', () => {
  test('Shows correct content.', () => {
    const tree = mount(<Popup>content</Popup>);
    const content = tree.find(PopupContent);

    expect(content.text()).toEqual('content');
  });

  test('Shows close button by default.', () => {
    const tree = mount(<Popup>content</Popup>);
    const button = tree.find(PopupCloseButton);

    expect(button.exists()).toEqual(true);
  });

  test('Hides close button if "showCloseIcon" prop is disabled.', () => {
    const tree = mount(<Popup showCloseIcon={false}>content</Popup>);
    const button = tree.find(PopupCloseButton);

    expect(button.exists()).toEqual(false);
  });

  test('Hides both buttons if neither "primaryButton" nor "secondaryButton" props are passed.', () => {
    const tree = mount(<Popup>content</Popup>);
    const buttons = tree.find(PopupButton);

    expect(buttons).toHaveLength(0);
  });

  test('Shows a primary button if "primaryButton" prop is passed.', () => {
    const tree = mount(
      <Popup
        primaryButton={{
          children: 'primary',
        }}
      >
        content
      </Popup>,
    );
    const button = tree.find(PopupButton).first();

    expect(button.exists()).toEqual(true);
    expect(button.prop('variant')).toEqual('primary');
  });

  test('Shows a secondary button if "secondaryButton" prop is passed.', () => {
    const tree = mount(
      <Popup
        secondaryButton={{
          children: 'secondary',
        }}
      >
        content
      </Popup>,
    );
    const button = tree.find(PopupButton).first();

    expect(button.exists()).toEqual(true);
    expect(button.prop('variant')).toEqual('secondary');
  });

  test('Shows two buttons if both "primaryButton" and "secondaryButton" props are passed.', () => {
    const tree = mount(
      <Popup
        primaryButton={{
          children: 'primary',
        }}
        secondaryButton={{
          children: 'secondary',
        }}
      >
        content
      </Popup>,
    );
    const buttons = tree.find(PopupButton);

    expect(buttons).toHaveLength(2);
  });
});
