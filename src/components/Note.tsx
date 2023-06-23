import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Note = ({ note, deleteNote, editNote }: any) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = () => {
    const updatedNote = {
      id: note.id,
      title: updatedTitle,
      content: updatedContent,
    };

    editNote(updatedNote);
    setEditMode(false);
  };

  return (
    <Box>
      {editMode ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <Card sx={{ height: "max-content", maxWidth: "400px", width: "200px" }}>
          <CardContent sx={{ height: "200px", padding: "10px !important" }}>
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{ height: "100%" }}
            >
              <Box>
                <Typography
                  sx={{ marginBottom: "10px" }}
                  variant="h5"
                  component="h2"
                  fontWeight="bold"
                >
                  {note.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {note.content}
                </Typography>
              </Box>
              <Stack direction="row" justifyContent="flex-end">
                <IconButton onClick={handleEdit} color="info">
                  <Edit />
                </IconButton>
                <IconButton onClick={handleDelete} color="error">
                  <Delete />
                </IconButton>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Note;
