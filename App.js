import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Write your goal here" style={{height:50, marginBottom:10, borderBottomColor:"black", borderBottomWidth:1}}/>
        <Button title="ADD"/>
      </View>
      <View></View>
    </View>
  );
}

