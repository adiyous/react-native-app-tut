import React from 'react'
import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import ListView from 'deprecate-react-native-listview'
import ColorButton from './components/ColorButton'

import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'

export default class App extends React.Component {
//const App: () => React$Node = () => {
  constructor(){
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableColors = [
      'red', 'green', 'yellow', 'salmo', 'pink'
    ]
    this.state = {
      backgroundColor: 'blue',
      availableColors,
      DataSource: this.ds.cloneWithRows(availableColors)
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(backgroundColor){
    this.setState({
         backgroundColor
    }) 
  }
  render() {
    const { backgroundColor, dataSource } = this.state 
    return (
      <ScrollView>
      <ListView style={[
          styles.container,
          { backgroundColor }
        ]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton 
          backgroundColor={color}
          onSelect={this.handleChange}
          />
        )}
        renderHeader={() => (
          <Text style={style.header}>Color List</Text>
        )}
        >
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
        
      </ListView>
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
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,.8)'
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
  },
  row: {
    flexDirection: 'row',
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30,
    margin: 5
  },
  header: {
    backgroundColor: 'lightgrey',
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
})


// AppRegistry.registerComponent('SampleApp', () => App)
