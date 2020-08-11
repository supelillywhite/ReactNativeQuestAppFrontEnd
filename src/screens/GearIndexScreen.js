import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/GearContext";
import { Feather } from "@expo/vector-icons";

const GearIndexScreen = ({ navigation }) => {
  const { state, deleteGear, getGears } = useContext(Context);

  useEffect(() => {
    getGears();

    const listener = navigation.addListener("didFocus", () => {
      getGears();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(gear) => gear.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("GearShow", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.name}>{`${item.name} ${item.id}`}</Text>
                <TouchableOpacity onPress={() => deleteGear(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

GearIndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("GearCreate")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  name: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default GearIndexScreen;
