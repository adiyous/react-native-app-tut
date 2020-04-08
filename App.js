import React from 'react'
import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'

import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'

export default class App extends React.Component {
//const App: () => React$Node = () => {
  constructor(){
    super()
    this.state = {
      backgroundColor: 'blue'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(backgroundColor){
    this.setState({
         backgroundColor
    }) 
  }
  render() {
    const { backgroundColor } = this.state 
    return (
      <ScrollView>
      <View style={[
         styles.container,
        { backgroundColor }
      ]}>
        <StatusBar hidden={true} />
        <Image style={styles.pic} source={picSierra} />
        <Text style={styles.defaultText}>
          Sierra
        </Text>
        <Image style={styles.pic} source={picTanner} />
        <Text style={[
          styles.defaultText,
          styles.selectedText ]}>
            Tanner
        </Text>
        <Text 
          style={styles.button}
          onPress={() => this.handleChange('green')
          }>
            Green
        </Text>
        <Text 
          style={styles.button}
          onPress={() => this.handleChange('red')
          }>
            Red
        </Text>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#DDD'
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  pic: {
    borderRadius: 50,
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


// AppRegistry.registerComponent('SampleApp', () => App)
