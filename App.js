import React from 'react'

import ColorList from './components/ColorList'
import { Alert } from 'react-native'

export default class App extends React.Component {
  render(){
    return(
      <ColorList 
        onColorSelected={color => Alert.alert(color)}
      />
    )
  }
}

AppRegistry.registerComponent('SampleApp', () => App)
