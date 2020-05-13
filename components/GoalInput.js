import React, {useState} from "react";
import {StyleSheet, TextInput, View, Button} from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addHandler = () =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write your goal here"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={addHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: "100%",
        width: "80%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
      },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
});
export default GoalInput;
