import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/GearContext";
import { EvilIcons } from "@expo/vector-icons";

const GearShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const gear = state.find((gear) => gear.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{gear.name}</Text>
      <Text>{gear.description}</Text>
      <Text>{gear.questId}</Text>
    </View>
  );
};

GearShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("GearEdit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default GearShowScreen;
