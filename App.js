import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goal) => {
    setGoalList((goalList) => [
      ...goalList,
      { uid: Math.random().toString(), value: goal },
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = (goalID) => {
    setGoalList((goalList) => {
      return goalList.filter((goal) => goal.uid !== goalID);
    });
  };
  const cancelAddModeHandler = () =>{
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button
        title="ADD NEW GOAL"
        onPress={() => setIsAddMode(true)}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} cancelAddMode = {cancelAddModeHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.uid}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
