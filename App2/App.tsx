import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/flatCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <Text>App</Text>

        <FlatCards />
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default App