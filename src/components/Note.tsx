import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DetailNote from "./DetailNote";

const Note = ({ note, deleteNote, editNote }: any) => {
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);

  // open detail modal
  const [detailModal, setDetailModal] = useState(false);

  const handleDelete = async () => {
    await deleteNote(note.id);
  };

  const handleUpdate = () => {
    const updatedNote = {
      id: note.id,
      title: updatedTitle,
      content: updatedContent,
    };
    handleCloseDetailModal();
    console.log(updatedNote);
    editNote(updatedNote);
  };

  const handleOpenDetailModal = () => setDetailModal(true);
  const handleCloseDetailModal = () => setDetailModal(false);

  console.log(note.id);

  return (
    <Box>
      <Box component="div" position="relative" sx={{ cursor: "pointer" }}>
        <Card
          sx={{
            height: "max-content",
            maxWidth: "400px",
            width: "200px",
            border: "2px solid #dcdcdc",
            boxShadow: "none",
          }}
        >
          <CardContent
            sx={{ height: "200px", padding: "10px !important" }}
            onClick={handleOpenDetailModal}
          >
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
                <IconButton onClick={handleOpenDetailModal} color="info">
                  <Edit />
                </IconButton>
                <IconButton onClick={handleDelete} color="error">
                  <Delete />
                </IconButton>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <DetailNote
        open={detailModal}
        handleClose={handleCloseDetailModal}
        handleUpdate={handleUpdate}
        valueTitle={updatedTitle}
        valueContent={updatedContent}
        setValueTitle={setUpdatedTitle}
        setValueContent={setUpdatedContent}
        handleDelete={handleDelete}
      />
    </Box>
  );
};

export default Note;
