import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = ()=>{
    setGoalList(goalList => [...goalList, enteredGoal]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write your goal here"
          style={styles.input}
          onChangeText={goalInputHandler}
          value = {enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
        {goalList.map((goal, index) => <Text key={index}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: "100%",
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
