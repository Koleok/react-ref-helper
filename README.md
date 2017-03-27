# react-ref-helper

install via npm/yarn
```shell
npm install --save react-ref-helper

# or

yarn add react-ref-helper
```

# Usage

This utility supports [partial application](http://benalman.com/news/2012/09/partial-application-in-javascript/#partial-application) with the following scenarios in mind.

## Multiple elements in render method that need refs of different names
Addressed by partially applying with `this`,
the resulting function expects a ref name before performing the assignment
```javascript
import React, { Component } from 'react'
import { refWith } from 'react-ref-helper'

class A extends Component {
  render() {
    const ref = refWith(this)

    return (
      <div className="inputs">
        <input id="firstName" type='text' ref={ref('firstName')} />
        <input id="lastName" type='text' ref={ref('lastName')} />
      </div>
    )
  }
}
```

## Multiple components that need refs of the same name
Addressed by partially applying with the ref name,
the resulting function expects a context (`this`) before performing the assignment
```javascript
import React, { Component } from 'react'
import { refAs } from 'react-ref-helper'

const inputRef = refAs('input')

class A extends Component {
  render() {
    return (
      <div className="text-input">
        <input type='text' ref={inputRef(this)} />
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="file-input">
        <input type='file' ref={inputRef(this)} />
      </div>
    )
  }
}
```

## One off usage
Addressed by partially applying with both `this` and the ref name,
the resulting function expects only a value before performing the assignment
```javascript
import React, { Component } from 'react'
import { refWith } from 'react-ref-helper'

class A extends Component {
  render() {
    return (
      <div>
        <input type='text' ref={ref(this, 'firstName')} />
      </div>
    )
  }
}
```
