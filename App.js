import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const API_KEY = "4009dd27be67a419448e41926efeeeb5";
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherList(data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <View style={styles.body}>
      {weatherList.map((item) => (
        <View style={styles.weather}>
          <Image
            style={styles.icon}
            source={{
              uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            }}
          />
          <Text>{item.main.temp}</Text>
          <Text>{item.weather[0].description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
    padding: 20,
  },

  weather: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  text: {
    marginRight: 20,
  },

  icon: {
    backgroundColor: "wheat",
    width: 40,
    height: 40,
    marginRight: 20,
  },
});
