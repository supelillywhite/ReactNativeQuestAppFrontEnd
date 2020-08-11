import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const GearForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name);
  const [description, setDescription] = useState(initialValues.description);
  const [questId, setQuestId] = useState(initialValues.questId);

  return (
    <View>
      <Text style={styles.label}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Enter Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button
        title="Save Gear"
        onPress={() => onSubmit(name, description, questId)}
      />
    </View>
  );
};

GearForm.defaultProps = {
  initialValues: {
    name: "",
    description: "",
    questId: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default GearForm;
