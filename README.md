# Popify 🍾

A small library for building popups/notifications in React. Built with simplicity and accessibility in mind.

[![stable](https://badgen.net/npm/v/popify)](https://www.npmjs.com/package/popify)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

## Examples 😲

[![Edit popify-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/popify-basic-1pzwd?fontsize=14&hidenavigation=1&theme=dark)

## Installation 🛠

```
npm install popify
```

## Usage ❓

```tsx
import React from 'react';

import { Popup } from 'popify';

const App: React.FC = () => {
  return (
    <>
      <main>Hello!</main>

      <Popup
        onClose={() => console.log('onClose')}
        primaryButton={{
          children: 'Thanks!',
          onClick: () => console.log('onClick - Primary'),
        }}
        secondaryButton={{
          children: 'Yeah sure...',
          onClick: () => console.log('onClick - Secondary'),
        }}
      >
        Welcome on our page! You're the 1000th visitor, here's your free iPad!
      </Popup>
    </>
  );
};

export default App;
```

## Props 👀

| Name            | Type                                                     | Default value | Description                                                |
| --------------- | -------------------------------------------------------- | ------------- | ---------------------------------------------------------- |
| onClose         | `(() => any) | (() => Promise<any>)`                     | `undefined`   | Function to be called after popup is closed.               |
| primaryButton   | `ButtonHTMLAttributes<HTMLButtonElement>`                | `undefined`   | Object containing properties passed to primary button.     |
| secondaryButton | `ButtonHTMLAttributes<HTMLButtonElement>`                | `undefined`   | Object containing properties passed to secondary button.   |
| showCloseIcon   | `boolean`                                                | `true`        | Shows and hides close button.                              |
| position        | `'left' | 'right'`                                       | `right`       | Specifies the position of popup window.                    |
| styles          | `FlattenSimpleInterpolation | FlattenInterpolation<any>` | `undefined`   | Pass styled-component's `css` result to add custom styles. |
