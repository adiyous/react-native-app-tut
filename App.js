import React from 'react'
import {
  View,
  Text,
  StatusBar
} from 'react-native'

// class App extends React.component {
const App: () => React$Node = () => {
  //render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>Hello React</Text>
      </View>
    )
  //}
}

export default App
// AppRegistry.registerComponent('SampleApp', () => App)
