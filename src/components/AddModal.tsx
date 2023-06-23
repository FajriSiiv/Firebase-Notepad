import { Save } from "@mui/icons-material";
import {
  Box,
  Button,
  Input,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AddModal = ({
  handleClose,
  open,
  handleAddNote,
  addingNote,
  handleSaveNote,
}: any) => {
  const calculateRows = () => {
    const lineBreaks = addingNote.split("\n").length;

    return lineBreaks > 1 ? lineBreaks : 10;
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSaveNote({
      title: title,
      content: content,
    });
    setTitle("");
    setContent("");
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Adding-Note"
      aria-describedby="Adding-Note"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          bgcolor: "white",
          width: "500px",
          height: "600px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10px",
          alignContent: "flex-end",
          borderRadius: "5px",
        }}
      >
        <Stack direction="column">
          <TextField
            id="standard-basic"
            placeholder="Title"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            id="standard-basic"
            placeholder="Your Note..."
            fullWidth
            multiline
            rows={calculateRows()}
            sx={{
              "* fieldset": {
                border: "none",
              },
            }}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </Stack>
        <Button startIcon={<Save />} sx={{ width: "100px" }} type="submit">
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default AddModal;
