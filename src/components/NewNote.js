import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
// import { Feather } from "@expo/vector-icons";

const NewNote = ({ note, onNoteChange, onNoteSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      {/* <Feather name="search" style={styles.iconStyle} /> */}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="New note here"
        value={note}
        onChangeText={onNoteChange}
        onEndEditing={onNoteSubmit}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F0EEFF",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    borderColor: "black",
    borderWidth: 2,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default NewNote;
