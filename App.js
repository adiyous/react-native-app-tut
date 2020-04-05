import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    color: 'black',
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    color: 'blue',
    backgroundColor: 'yellow',
    fontWeight: 'bold'
  }
})

// class App extends React.component {
const App: () => React$Node = () => {
  //render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={[
                styles.defaultText,
                styles.selectedText
              ]}>
                  Sierra
        </Text>
        <Text style={styles.defaultText}>Tanner</Text>
        <Text style={styles.defaultText}>Travis</Text>
      </View>
    )
  //}
}

export default App
// AppRegistry.registerComponent('SampleApp', () => App)
