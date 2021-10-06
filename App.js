import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import { Audio } from "expo-av";

async function play00() {
  console.log("Loading Sound");
  const s = await Audio.Sound.createAsync(require("./assets/note00.m4a"));
  console.log("Playing Sound");
  s.sound.playAsync().catch((error) => {});
}

async function play02() {
  const s = await Audio.Sound.createAsync(require("./assets/note02.m4a"));
  s.sound.playAsync().catch((error) => {});
}

async function play04() {
  const s = await Audio.Sound.createAsync(require("./assets/note04.m4a"));
  s.sound.playAsync().catch((error) => {});
}

async function play05() {
  const s = await Audio.Sound.createAsync(require("./assets/note05.m4a"));
  s.sound.playAsync().catch((error) => {});
}

async function play07() {
  const s = await Audio.Sound.createAsync(require("./assets/note07.m4a"));
  s.sound.playAsync().catch((error) => {});
}

async function play09() {
  const s = await Audio.Sound.createAsync(require("./assets/note09.m4a"));
  s.sound.playAsync().catch((error) => {});
}

async function play11() {
  const s = await Audio.Sound.createAsync(require("./assets/note11.m4a"));
  s.sound.playAsync().catch((error) => {});
}

async function play12() {
  const s = await Audio.Sound.createAsync(require("./assets/note12.m4a"));
  s.sound.playAsync().catch((error) => {});
}

export default function App() {
  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.background}
        resizeMode="stretch"
        source={require("./assets/keyboard.png")}
      >
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            event.target.style.opacity = 1;
            play00();
          }}
          onTouchEnd={(event) => {
            event.target.style.opacity = 0;
          }}
        />
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            play02();
            event.target.style.opacity = 1;
          }}
          onTouchEnd={(event) => {
            event.target.style.opacity = 0;
          }}
        />
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            play04();
            event.target.style.opacity = 1;
          }}
          onTouchEnd={(event) => {
            event.target.style.opacity = 0;
          }}
        />
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            play05();
            event.target.style.opacity = 1;
          }}
          onTouchEnd={(event) => {
            event.target.style.opacity = 0;
          }}
        />
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            play07();
            event.target.style.opacity = 1;
          }}
          onTouchEnd={() => {
            event.target.style.opacity = 0;
          }}
        />
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            play09();
            event.target.style.opacity = 1;
          }}
          onTouchEnd={(event) => {
            event.target.style.opacity = 0;
          }}
        />
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            play11();
            event.target.style.opacity = 1;
          }}
          onTouchEnd={(event) => {
            event.target.style.opacity = 0;
          }}
        />
        <View
          style={styles.keyStyle}
          onTouchStart={(event) => {
            play12();
            event.target.style.opacity = 1;
          }}
          onTouchEnd={(event) => {
            event.target.style.opacity = 0;
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 30,
  },

  background: {
    width: "100%",
    height: "100%",
  },

  keyStyle: {
    flex: 1,
    margin: 5,
    backgroundColor: "rgba(100, 100, 100, 0.2)",
    opacity: 0,
  },
});
