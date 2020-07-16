import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import useNotes from "../hooks/useNotes";
import makeNotes from "../hooks/makeNotes";
import NewNote from "../components/NewNote";

const HomeScreen = () => {
  const [getNotes, notes, errorMessage] = useNotes();
  const [makeNote, errorMakeNoteMessage] = makeNotes();
  const [note, setNote] = useState("");
  // console.log(notes);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => getNotes()} title="Get existing notes" />
      <NewNote
        note={note}
        onNoteChange={setNote}
        onNoteSubmit={() => makeNote(note)}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={notes}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.attributes.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
