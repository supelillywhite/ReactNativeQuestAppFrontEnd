import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context as GearContext } from "../context/GearContext";
import { CheckBox } from "native-base";

const GearIndex = ({ questId, navigation, quests }) => {
  const { gearReducer, state, getGears, editGear } = useContext(GearContext);

  const isChecked = (gearQuestId, thisQuestsId) => {
    if (gearQuestId === null) {
      return false;
    } else {
      if (gearQuestId.toString() === thisQuestsId.toString()) {
        return true;
      } else {
        return false;
      }
    }
  };

  const otherQuest = (gearQuestId, quests) => {
    var actualQuest = {};
    quests.map((quest) => {
      if (gearQuestId.toString() === quest.id.toString()) {
        actualQuest = quest;
      }
    });

    return actualQuest;
  };

  const onAnotherQuest = (gearQuestId, thisQuestsId, quests) => {
    if (gearQuestId === null) {
      return "In gear box";
    } else {
      if (gearQuestId.toString() === thisQuestsId.toString()) {
        return "Packed for this quest";
      } else {
        if (otherQuest(gearQuestId, quests).length == 0) {
          return "";
        } else {
          return `Packed for ${otherQuest(gearQuestId, quests).title}`;
        }
      }
    }
  };

  const checking = (gearQuestId, thisQuestsId) => {
    if (gearQuestId === null) {
      return thisQuestsId;
    } else {
      if (gearQuestId.toString() === thisQuestsId.toString()) {
        return null;
      } else {
        return otherQuest(gearQuestId, quests).id;
      }
    }
  };

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
            <View style={styles.row}>
              <Text>{onAnotherQuest(item.questId, questId, quests)}</Text>
              <CheckBox
                checked={isChecked(item.questId, questId)}
                color="green"
                onPress={() => {
                  editGear(
                    item.id,
                    item.name,
                    item.description,
                    checking(item.questId, questId)
                  );
                }}
              />
              <Text style={styles.name}>{`${item.name} - ${item.id}`}</Text>
            </View>
          );
        }}
      />
    </View>
  );
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

export default GearIndex;
