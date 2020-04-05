import React from 'react';
import {View, Text, AppRegistry} from 'react-native';

class App extends React.component {
// const App: () => React$Node = () => {
  render() {
    return (
      <View>
        <Text>Hello React</Text>
      </View>
    );
  }
}

// export default App;
AppRegistry.registerComponent('SampleApp', () => App)
