import React, { Component } from 'react'
import RcSwitch from 'rc-switch'

import 'rc-switch/assets/index.css'
import './styles.css'

export default class Switch extends Component {
  render () {
    const { disabled = false, onChange, onLabel = 'On', offLabel = 'Off' } = this.props

    return (
      <RcSwitch
        onChange={onChange}
        disabled={disabled}
        checkedChildren={onLabel}
        unCheckedChildren={offLabel}
      />
    )
  }
}
