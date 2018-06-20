import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.less'

export default class FormRow extends Component {
  render () {
    const { children, label = ':', col = { label: 12, field: 12 } } = this.props

    return (
      <div className='witty-form-row'>
        <div className='label' style={{ width: `calc(100% * ${col.label} / 24)` }}>{ label }</div>
        <div style={{ width: `calc(100% * ${col.field} / 24)` }}>{ children }</div>
      </div>
    )
  }
}

FormRow.propTypes = {
  label: PropTypes.string.isRequired
}
