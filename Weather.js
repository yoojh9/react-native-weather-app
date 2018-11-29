import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropsTypes from "prop-types";


// export default class Weather extends Component {
//     render(){
//         return (
//             <LinearGradient 
//                 colors={["#00C6FB","#005BEA"]} 
//                 style={styles.container}
//             >
//                 <View style={styles.upper}>
//                     <Text><Ionicons color="white" size={144} name="ios-rainy"/></Text>
//                     <Text style={styles.temp}>{this.props.temperature}</Text>    
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>{this.props.name}</Text>
//                     <Text style={styles.subtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }

const WeatherCases = {
    Rain: {
        colors:["#00C6FB","#005BEA"],
        title: "Rainning",
        subtitle: "For more info look outside",
        iconName: "weather-pouring"
    }, 
    Clear: {
        colors:["#FEF253","#FF7300"],
        title: "Sunny",
        subtitle: "Go get your ass burnt",
        iconName: "weather-sunny"
    }, 
    Thunderstorm: {
        colors:["#00ECBC","#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        iconName: "weather-lightning"
    },
    Clouds: {
        colors:["#D7D2CC","#304352"],
        title: "Clouds",
        subtitle: "I know, funcking boring",
        iconName: "weather-cloudy"
    }, 
    Snow: {
        colors:["#7DE2FC","#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a the snowman? Fuck no.",
        iconName: "weather-snowy"
    }, 
    Drizzle: {
        colors:["#89F7FE","#66A6FF"],
        title: "Drizzle",
        subtitle: "It's like rain, but gay",
        iconName: "weather-rainy"
    },
    Haze: {
        colors:["#D7D2CC","#304352"],
        title: "Haze",
        subtitle: "maybe fine dust",
        iconName: "weather-fog"
    },
    Mist: {
        colors:["#D7D2CC","#304352"],
        title: "Mist",
        subtitle: "It's like you have no glasses",
        iconName: "weather-fog"
    }
}

function Weather({weatherName, city, temp}){
    return (
        <LinearGradient 
            colors={WeatherCases[weatherName].colors} 
            style={styles.container}
        >
            <View style={styles.upper}>
                <Text><MaterialCommunityIcons color="white" size={144} name={WeatherCases[weatherName].iconName}/></Text>
                <Text style={styles.temp}>{temp}˚</Text>
                <Text style={styles.city}>@{city}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{WeatherCases[weatherName].title}</Text>         
                <Text style={styles.subtitle}>{WeatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>  
    )
}

Weather.PropsTypes = {
    temp: PropsTypes.number.isRequired,
    weatherName: PropsTypes.string.isRequired
}

export default Weather;


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: "white",
        marginTop: 10
    },
    city: {
        fontSize: 24,
        backgroundColor: "transparent",
        color:"white",
        marginTop: 10,
    },
    lower: {
        flex:1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 30,
        backgroundColor: 'transparent',
        color: "white",
        marginBottom: 10
    },
    subtitle:{
        fontSize: 25,
        backgroundColor: 'transparent',
        color: "white",
        marginBottom: 24
    }
}) 


