import React, {StyleSheet, ListView, View, Text} from 'react-native'

var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var mockData = [
  {
    city: "Elmhurst",
    temp: "33.5°F"
  },
  {
	city: "New York",
    temp: "18.2°F"
  },
  {
    city: "Menomonie",
    temp: "-42°F"
  },
  {  
    city: "Fake City",
    temp: "0.0°F"
  },
  {
  	city: "Stonetown",
  	temp: "420°F"
  }
];


class LocationRow extends React.Component{

	styles = StyleSheet.create({
		containerRow: {
		    flex: 2,
		    flexDirection: "row",
			//alignSelf: "stretch",
			marginLeft: 5,
			marginRight: 5,
			paddingLeft: 4,
			paddingRight: 4,
			alignItems: "center",
			justifyContent: "space-between",
			height: 50,
			marginTop: 5,
			backgroundColor: "blue",
			opacity: 0.6
		},
		spacer:{
			width:0,
			height:550
		},
		locationLabel:{
			color: "white",
			//lineHeight: 50,
			//alignSelf: "flex-start",
			fontSize: 30
		},
		tempLabel:{
			color: "white",
			//alignSelf: "flex-end",
			fontSize: 20
		}
	});

	render(){
		return(
			<View style={this.styles.containerRow}>
			  <Text style={this.styles.locationLabel}>{this.props.rowData.city}</Text>
			  <Text style={this.styles.tempLabel}>{this.props.rowData.temp}</Text>
			</View>
		);
	}
}

class PlaceList extends React.Component{
	constructor(props){
		super(props);
		this.state = { dataSource: dataSource.cloneWithRows(mockData) };
	}
	render(){
		return (
			<View style={{
				  height: 200,
				}}>
		      <ListView
		        contentContainerStyle={{
		        	//flex: 1,
		        	flexDirection:"column", 
		        	justifyContent:"center",
		        	paddingBottom: 5,
		        	paddingTop:5,
		        }}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <LocationRow rowData={rowData} />}
              />	
            </View>
		);
	}
}



module.exports = PlaceList;