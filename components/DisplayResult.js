import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ICONS = ["hand-rock", "hand-paper", "hand-scissors"];

export default function DisplayResult({ userChoice, computerChoice }) {
  return (
    <>
      <View style={styles.column}>
        <FontAwesome5
          name={ICONS[userChoice - 1]}
          size={80}
          color="#f9d835" // Yellow color for user
          solid
          style={userChoice === 3 ? styles.scissorsIcon : styles.icon}
        />
        <Text style={styles.playerName}>You</Text>
      </View>

      <View style={styles.column}>
        <FontAwesome5
          name={ICONS[computerChoice - 1]}
          size={80}
          color="#e74c3c" // Red color for computer
          solid
          style={computerChoice === 3 ? styles.scissorsIcon : styles.icon}
        />
        <Text style={styles.playerName}>Computer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playerName: {
    color: "#373737",
    fontSize: 18,
    marginTop: 8,
    fontWeight: "bold",
  },
  icon: {
    transform: [{ rotateZ: "0deg" }],
  },
  scissorsIcon: {
    transform: [{ rotateZ: "180deg" }, { rotateX: "180deg" }],
  },
});


