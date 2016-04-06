import React, { StyleSheet, Switch, Text, View } from 'react-native';

class Forecast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            format: props.format == "fahrenheit" ? "F" : "C"
        };
    }

    getTempStr = () => {
        var temp = this.props.temp;
        var format = this.state.format;
        if (format == "F"){ temp = (temp*1.8)+32 };
        return temp.toFixed(2) + "°" + format;

    }

    render = () => {    
        return (
            <View style={styles.container}>
		      <Text style={styles.bigText}>
		        {this.props.main}
		      </Text>
		      <Text style={styles.mainText}>
		        Current Condition: {this.props.description}
		      </Text>
              <View style={styles.row} >
                <Switch 
                  onValueChange={(value) => { this.setState( {format:value?"F":"C"} ) }}
                  value={this.state.format == "F"}
                   />
		        <Text style={styles.bigText}>
                  {this.getTempStr()}
		        </Text>
              </View>
		    </View>
            );
    }
}

var styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: "#FFFFFF"
    },
    row:{
        flex: 1,
        flexDirection: "row"        
    }
});
module.exports = Forecast;
