import { Add } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import AddModal from "./AddModal";
import Login from "./Login";
import Navbar from "./Navbar";
import Note from "./Note";
import NoteForm from "./NoteForm";
import Profile from "./Profile";

const NoteApp = () => {
  const [notes, setNotes] = useState<any>([]);
  const collectionNotes = collection(db, "notes");
  const [user, setUser] = useState<any>(null); // Tambahkan ini

  // modal
  const [addModal, setAddModal] = useState(false);

  // add note
  const [addingNote, setAddingNote] = useState("");

  // rows modal
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const fetchNotes = async () => {
        const q = query(
          collection(db, "notes"),
          where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
        const notesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(notesData);
      };

      fetchNotes();
    }
  }, [user]);

  const addNote = async (note: any) => {
    // const db = firebase.firestore();
    // const docRef = await db.collection("notes").add(note);

    // const docRef = await addDoc(collectionNotes, note);

    // setNotes([...notes, { id: docRef.id, ...note }]);
    if (user) {
      try {
        await addDoc(collection(db, "notes"), {
          ...note,
          userId: user.uid,
        });
        setNotes([...notes, note]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteNote = async (noteId: any) => {
    if (user) {
      try {
        await deleteDoc(doc(db, "notes", noteId));
        setNotes(notes.filter((note: any) => note.id !== noteId));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editNote = async (updatedNote: any) => {
    const notePadDoc = doc(db, "notes", updatedNote.id);

    if (user) {
      try {
        await updateDoc(notePadDoc, {
          title: updatedNote.title,
          content: updatedNote.content,
        });
        setNotes(
          notes.map((note: any) =>
            note.id === updatedNote.id ? updatedNote : note
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClose = () => setAddModal(false);
  const handleOpen = () => setAddModal(true);

  const handleAddNote = (event: any) => {
    setAddingNote(event.target.value);
    const lineBreaks = event.target.value.split("\n").length;
    setRows(lineBreaks);
  };

  return (
    <Box width="100%">
      <Navbar user={user} />
      <Box sx={{ marginTop: "30px" }}>
        {user ? (
          <>
            {/* <NoteForm addNote={addNote} /> */}
            <Stack
              direction="row"
              flexWrap="nowrap"
              sx={{ padding: "10px 30px" }}
              gap={3}
            >
              {notes.map((note: any) => (
                <Note
                  key={note.id}
                  note={note}
                  deleteNote={deleteNote}
                  editNote={editNote}
                />
              ))}
            </Stack>
            <Profile user={user} />
            <Box
              sx={{
                position: "absolute",
                bottom: "50px",
                right: "50px",
                borderRadius: "50%",
                bgcolor: "#6eeb83",
                // border: "1px solid #",
              }}
              onClick={handleOpen}
            >
              <IconButton sx={{ color: "white" }} size="large">
                <Add />
              </IconButton>
            </Box>
          </>
        ) : (
          <Login />
        )}
      </Box>
      <AddModal
        open={addModal}
        handleClose={handleClose}
        // rows={rows}
        // handleAddNote={handleAddNote}
        addingNote={addingNote}
        handleSaveNote={addNote}
      />
    </Box>
  );
};

export default NoteApp;
