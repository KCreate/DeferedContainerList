# DeferedContainerList

Utility component that allows you to defer the rendering of child components. Useful for transitions between pages that might reuse the same components.

# Installation
```bash
npm install deferedcontainerlist -S
```
Then you can just use it as a regular React component.


# Example
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
