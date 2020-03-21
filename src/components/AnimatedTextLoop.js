import React, { useState, useEffect, useRef } from 'react'
import { Animated } from 'react-native'

const useFadeInOut = (duration, callback) => {
  const opacity = useRef(new Animated.Value(0)).current
  let counter = 0
  const fadeDuration = duration / 2
  const animate = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: fadeDuration
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: fadeDuration
      })
    ]).start(() => {
      callback(counter)
      counter++
      animate()
    })
  }
  useEffect(() => {
    animate()
    return opacity.stopAnimation()
  }, [])
  return opacity
}

const AnimatedTextLoop = ({ textArray, duration, styles }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(textArray.length)
  const _updateIndex = (counter) => {
    setCurrentTextIndex(counter % textArray.length)
  }

  const opacity = useFadeInOut(duration, _updateIndex)

  return (
    <Animated.Text
      style={[
        styles,
        {
          opacity: opacity
        }
      ]}
    >
      {textArray[currentTextIndex]}
    </Animated.Text>
  )
}

export default AnimatedTextLoop
