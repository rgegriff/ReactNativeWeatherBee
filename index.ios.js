/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, 
{ 
  AppRegistry,
  StyleSheet,
  Component,
  View 
} from 'react-native';
import WeatherProject from './WeatherProject';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => WeatherProject);
