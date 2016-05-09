# React: DeferedContainerList

Utility component that allows you to defer the rendering of child components. Useful for transitions between pages that might reuse the same components.

# How do i use it?

Install it (Instructions below) and import the component in your app. Also check out the examples inside the examples folder.

# Installation
```bash
npm install deferedcontainerlist -S
```
Then you can just use it as a regular React component.


# Example
[Live Demo](https://jsfiddle.net/fj4zv2tn/15/)
```js
import React form 'react';
import { render } from 'react-dom';
import DeferedContainerList from 'deferedcontainerlist';

render(
    <DeferedContainerList
        delay={150} // miliseconds
        hiddenClassName="deferedHidden"
        activeClassName="deferedActive"
        hiddenStyle={{ color: 'red' }}
        activeStyle={{ color: 'blue' }}
    >
        {/* Nodes go here */}
    </DeferedContainerList>
);
```

# License
[MIT](https://github.com/KCreate/DeferedContainerList/blob/master/LICENSE)
