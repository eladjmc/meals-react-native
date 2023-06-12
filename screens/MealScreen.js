import React from 'react'
import { Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'

const MealScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal)=>meal.id === mealId)
    
  return (
    <View>
        <Text>this is the meal screen for: {meal.id}</Text>
    </View>
  )
}

export default MealScreen