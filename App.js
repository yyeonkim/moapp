import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const API_KEY = "4009dd27be67a419448e41926efeeeb5";
  const [weatherObj, setWeatherObj] = useState({});

  const getWeather = (data) => {
    const {
      name,
      sys: { country },
      weather,
      main: { temp },
      wind: { speed },
    } = data;

    setWeatherObj({
      name,
      country,
      weather: weather[0].main,
      temp,
      icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      speed,
    });
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getWeather(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const { name, country, temp, weather, speed, icon } = weatherObj;

  return (
    <View style={styles.body}>
      <Text>City: {name}</Text>
      <Text>Country: {country}</Text>
      <Text>Temperature: {temp}</Text>
      <Text>Weather: {weather}</Text>
      <Text>Wind: {speed}</Text>
      <Image style={styles.icon} source={{ uri: icon }} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
    padding: 10,
  },

  icon: {
    width: 100,
    height: 100,
  },
});
