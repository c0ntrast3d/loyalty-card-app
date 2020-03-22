import React, { useReducer } from 'react'

export default (reducer, effects, defaultValue) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    const boundEffects = {}
    for (const key in effects) {
      boundEffects[key] = effects[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundEffects }}>
        {children}
      </Context.Provider>
    )
  }
  return { Context, Provider }
}
