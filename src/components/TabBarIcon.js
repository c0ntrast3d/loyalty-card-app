import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

import Colors from '../constants/colors'

const TabBarIcon = ({ name, focused }) => {
  return (
    <Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
}

export default TabBarIcon
