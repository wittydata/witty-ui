# witty-ui

[![NPM version][npm-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/witty-ui.svg?style=flat-square
[npm-url]: http://npmjs.org/package/witty-ui

UI components for modern apps

## UI Components

- Switch 
- FormRow 

## Install

```bash
yarn add witty-ui
```
OR
```bash
npm install witty-ui --save
```

## Usage

### Switch

<img width="400" src="https://wittydata.github.io/switch.png">

```jsx
// Switch

import { Switch } from 'witty-ui'

render () {
  return (<Switch onLabel='Yes' offLabel='No' />)
}

```

### FormRow

```jsx
// FormRow

import { FormRow, Switch } from 'witty-ui'

render () {
  return (
    <FormRow label='Pick Up at Store' col={{label: 6, field: 16}}>
      <Switch onLabel='Yes' offLabel='No' />
    </FormRow>)
}

```