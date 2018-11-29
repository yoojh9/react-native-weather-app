import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "3b5b2c5a5d90ef09d98c467547d79f52";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    city: null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    )}


  _getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
    .then(result => result.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature: json.main.temp,
        city: json.name,
        name: json.weather[0].main,
        isLoaded: true
      })
    })  
  }

  render() {
    const { isLoaded , error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden ={true} />
        {isLoaded ? 
        (
          <Weather 
              temp={Math.floor(this.state.temperature)} 
              weatherName={this.state.name}
              city={this.state.city}/> 
        ) 
        : 
        (
          <View style={styles.loading}> 
            <Text style={styles.loadingText}>Getting Weather</Text>
            { error ? <Text style={styles.error}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 30,
    marginBottom: 100
  }
});