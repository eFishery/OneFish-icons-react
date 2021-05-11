# OneFish Icons - React

Onefish Icons is one part of OneFish Design System.
We are extending [phosphor icons](https://github.com/phosphor-icons/phosphor-react) and add our own icon set.

## Installation

```bash
yarn add @onefish/icons-react
```

or

```bash
npm install --save @onefish/icons-react
```

## Usage

Simply import the icons you need, and add them anywhere in your render method. Onefish Icons supports tree-shaking, so your bundle only includes code for the icons you use.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Horse, Heart, Cube } from '@onefish/icons-react';

const App = () => {
  return (
    <div>
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="regular" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Props

Icon components accept all props that you can pass to a normal SVG element, including inline `style` objects, `onClick` handlers, and more. The main way of styling them will usually be with the following props:

- **color?**: `string` – Icon stroke/fill color. Can be any CSS color string, including `hex`, `rgb`, `rgba`, `hsl`, `hsla`, named colors, or the special `currentColor` variable.
- **size?**: `number | string` – Icon height & width. As with standard React elements, this can be a number, or a string with units in `px`, `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **weight?**: `"regular" | "fill"` – Icon weight/style. Can also be used, for example, to "toggle" an icon's state: a rating component could use Stars with `weight="regular"` to denote an empty star, and `weight="fill"` to denote a filled star.
- **mirrored?**: `boolean` – Flip the icon horizontally. Can be useful in RTL languages where normal icon orientation is not appropriate.

### Context

Onefish Icons takes advantage of React Context to make applying a default style to all icons simple. Create an `IconContext.Provider` at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext, Horse, Heart, Cube } from '@onefish/icons-react';

const App = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'limegreen',
        size: 32,
        weight: 'bold',
        mirrored: false,
      }}
    >
      <div>
        <Horse /> {/* I'm lime-green, 32px, and bold! */}
        <Heart /> {/* Me too! */}
        <Cube /> {/* Me three :) */}
      </div>
    </IconContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

You may create multiple Contexts for styling icons differently in separate regions of an application; icons use the nearest Context above them to determine their style.

> **Note:** The `color`, `size`, `weight`, and `mirrored` properties are all _required_ props when creating a context.

### Imports

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent tree-shaking and make your app's bundle larger.

```tsx
import * as Icon from "phosphor-react";
...
<Icon.Smiley />
<Icon.Folder weight="thin" />
<Icon.BatteryHalf size="24px" />
```
