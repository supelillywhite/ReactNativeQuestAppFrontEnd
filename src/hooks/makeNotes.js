import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  // const [notes, setNotes] = useState([]);
  const [errorMakeNoteMessage, setErrorMakeNoteMessage] = useState("");

  const makeNote = async (note) => {
    try {
      const newNote = axios({
        method: "POST",
        url: "http://localhost:3000/notes",
        data: {
          data: {
            type: "notes",
            attributes: {
              text: note,
            },
          },
        },
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      });
    } catch (err) {
      setErrorMakeNoteMessage("Something went wrong");
    }
  };

  return [makeNote, errorMakeNoteMessage];
};
