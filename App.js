import React from 'react'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import { Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
  Home: { screen: ColorList },
  Details: { screen: ColorInfo }
})
// export default class App extends React.Component {
//   render(){
//     return(
//       <ColorList 
//         onColorSelected={color => Alert.alert(color)}
//       />
//     )
//   }
// }

AppRegistry.registerComponent('SampleApp', () => App)
