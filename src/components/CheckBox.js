import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const CheckBox = ({ color, size, onToggle }) => {
  const [checked, setChecked] = useState(false)
  const _toggle = () => {
    setChecked(!checked)
    onToggle()
  }
  return (
    <TouchableOpacity
      onPress={_toggle}
    >
      <MaterialCommunityIcons
        size={size}
        color={color}
        name={checked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
      />
    </TouchableOpacity>
  )
}

CheckBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  onToggle: PropTypes.func.isRequired
}

CheckBox.defaultProps = {
  color: '#607d8b',
  size: 24
}

export default CheckBox
