import React from 'react'
import { Switch } from 'witty-ui'
import ReactDOM from 'react-dom'

class SwitchTest extends React.Component {
  render () {
    return (
      <Switch />
    )
  }
}

ReactDOM.render(<SwitchTest />, document.getElementById('root'))
