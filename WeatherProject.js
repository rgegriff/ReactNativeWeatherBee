var React = require('react-native');

var {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	Vibration
} = React;

import Forecast from './Forecast';
import LocationList from './LocationList';
import Camera from 'react-native-camera';

var baseFontSize = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop:{
  	flex:1,
  	flexDirection:"column",
  	width: null,
  	height: null
  },
  overlay:{
  	paddingTop: 5,
  	backgroundColor: '#000000',
  	opacity: 0.8,
  	flexDirection: 'column',
  	alignItems: 'center'
  },
  row:{
  	flex: 1,
  	flexDirection: 'row',
  	flexWrap: 'nowrap',
  	alignItems: 'flex-start',
  	padding: 30
  },
  zipContainer:{
  	flex: 1,
  	borderBottomColor: '#DDDDDD',
  	borderBottomWidth: 1,
  	marginLeft:5,
  	marginTop: 3,
  },
  zipCode: {
  	width: baseFontSize*.65*5,
  	height: baseFontSize
  },
  mainText:{
  	flex: 1,
  	fontSize: baseFontSize,
  	color: '#FFFFFF'
  }
});
class WeatherProject extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
			zip: '',
			forecast: null
		};
	}

	_handleTextChange = (event) => {
		var zip = event.nativeEvent.text;
		this.setState({zip:zip});
		fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=7fb47a66be92c03ff0ff102acd4de05f')
		  .then((response) => response.json())
		  .then((responseJSON) => {
		  	console.log(responseJSON);
		  	this.setState({
			  forecast: {
			  	  main: responseJSON.weather[0].main,
				  description: responseJSON.weather[0].description,
				  temp: responseJSON.main.temp - 273.15
			  }
		    });

		  })
		  .catch((error) => {console.warn(error);});
	}

	render(){
		var content = null;
		if (this.state.forecast !== null){
			content = (
			    <Forecast
			      main={this.state.forecast.main}
			      description={this.state.forecast.description}
			      temp={this.state.forecast.temp}/>
			);
		}

		return(
			<Image source={require('./flower.jpg')}
			  resizeMode='cover'
			  style={styles.backdrop} >
			  <View style={{
			  	flex:1,
			  	backgroundColor:"white", 
			  	alignSelf:"stretch",
			  	opacity: .8
			  }}>
			    <View style={styles.overlay} >
			        <View style={styles.row} >
			            <Text style={styles.mainText}>
			                Current weather for
			            </Text>
				        <View style={styles.zipContainer}>
				            <TextInput style={[styles.zipCode, styles.mainText]}
				              placeholder={this.state.zip}
				              returnKeyType='go'
				              onSubmitEditing={this._handleTextChange} 
				              keyboardType='numeric'/>
				        </View>
			        </View>
				    {content}
				</View>

				<LocationList />
				</View>
			</Image>
		);
	}
};

module.exports = WeatherProject;