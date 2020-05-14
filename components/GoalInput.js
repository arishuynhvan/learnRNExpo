import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible = {props.visible} animationType = {"fade"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write your goal here"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width:"80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GoalInput;
