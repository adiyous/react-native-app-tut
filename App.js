import React from 'react'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import { Alert, Navigator } from 'react-native'
import { StackNavigator } from 'react-navigation'

// const App = StackNavigator({
//   Home: { screen: ColorList },
//   Details: { screen: ColorInfo }
// })

export default class App extends React.Component {
  render(){
    return(
      // <ColorList 
      //   onColorSelected={color => Alert.alert(color)}
      // />
      <Navigator 
        initialRoute={{name: 'Color List'}}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Color Info':
              return <ColorInfo 
                        backgroundColor={route.color}
                        onSelect={() => navigator.pop()} />
            default:
              return <ColorList 
                        onColorSelected={
                            (color) => navigator.push({
                              name: 'Color Info',
                              color
                            })
                        }
                        />
          }
        }}
        />
    )
  }
}

AppRegistry.registerComponent('SampleApp', () => App)
