import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

// class App extends React.component {
const App: () => React$Node = () => {
  //render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>
          Sierra
        </Text>
        <Text style={[
          styles.defaultText, 
          styles.selectedText ]}>Tanner</Text>
        <Text style={styles.defaultText}>Travis</Text>
        <Text>.</Text>
      </View>
    )
  //}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#DDD'
  },
  defaultText: {
    textAlign: 'center',
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

export default App
// AppRegistry.registerComponent('SampleApp', () => App)
