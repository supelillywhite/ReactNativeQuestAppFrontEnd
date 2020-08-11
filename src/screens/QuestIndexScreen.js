import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/QuestContext";
import { Feather } from "@expo/vector-icons";

const QuestIndexScreen = ({ navigation }) => {
  const { state, deleteQuest, getQuests } = useContext(Context);

  useEffect(() => {
    getQuests();

    const listener = navigation.addListener("didFocus", () => {
      getQuests();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(quest) => quest.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("QuestShow", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteQuest(item.id)}>
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

QuestIndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("QuestCreate")}>
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
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default QuestIndexScreen;
