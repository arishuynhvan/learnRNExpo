import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType={"fade"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write your goal here"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "center",
          }}
        >
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.cancelAddMode} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "50%",
    margin: 5,
  },
});
export default GoalInput;
