import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
   
    <TouchableOpacity 
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center w-full mt-7
  ${isLoading ? "opacity-50" : ""}`}
    onPress = {handlePress}
    activeOpacity = {0.7}
    disabled = {isLoading}
    >
      
      <Text  className={`text-primary text-lg font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
