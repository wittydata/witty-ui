import React, { Component } from 'react'
import { Switch as rcSwitch } from 'rc-switch'

import './styles.css'

export default class Switch extends Component {
  render () {
    const { disabled = false, onChange, onLabel = 'On', offLabel = 'Off' } = this.props

    return (
      <rcSwitch
        onChange={onChange}
        disabled={disabled}
        checkedChildren={onLabel}
        unCheckedChildren={offLabel}
      />
    )
  }
}
