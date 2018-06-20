import React, { Component } from 'react'
import RcSwitch from 'rc-switch'

import './styles.less'

export default class Switch extends Component {
  render () {
    const { onChange, onLabel = 'On', offLabel = 'Off' } = this.props

    return (
      <RcSwitch
        onChange={onChange}
        checkedChildren={onLabel}
        unCheckedChildren={offLabel}
        {...this.props}
      />
    )
  }
}
