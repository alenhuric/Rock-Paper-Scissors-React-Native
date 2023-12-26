import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Animated } from 'react-native';
import Constants from 'expo-constants';
import Actions from './Actions';
import DisplayResult from './DisplayResult';
import Header from './Header';

export default function RockPaper() {
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [result, setResult] = useState("");
  const [canPlay, setPlay] = useState(true);

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  function play(choice) {
    const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let resultString = "";

    if (choice === 1) {
      resultString = randomComputerChoice === 3 ? "Victory!" : "Defeat!";
    } else if (choice === 2) {
      resultString = randomComputerChoice === 1 ? "Victory!" : "Defeat!";
    } else {
      resultString = randomComputerChoice === 2 ? "Victory!" : "Defeat!";
    }

    if (choice === randomComputerChoice) {
      resultString = "Draw!";
    }

    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    // Wait animation to hide old result
    setTimeout(() => {
      setResult(resultString);
    }, 300);

    // Animate: Hide old result and show new result
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Disable action when animation running
    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 600);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.result}>
          <Animated.Text style={[styles.resultText, 
            result === 'Defeat!' && styles.resultTextRed, 
            result === 'Victory!' && styles.resultTextGreen, 
            result === 'Draw!' && styles.resultTextDraw, 
            { opacity: fadeAnimation }
          ]}>
            {result}
          </Animated.Text>
        </View>
        <View style={styles.screen}>
          {!result ? (
            <Text style={styles.readyText}>Ready to Play?</Text>
          ) : (
            <DisplayResult
              userChoice={userChoice}
              computerChoice={computerChoice}
            />
          )}
        </View>
        <Actions play={play} canPlay={canPlay} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
  },
  result: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultTextGreen: {
    color: '#27ae60', // Green color for winning scenarios
  },
  resultTextRed: {
    color: '#e74c3c', // Red color for losing scenarios
  },
  resultTextDraw: {
    color: '#808080', // Gray color for draw scenarios
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  readyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
});


