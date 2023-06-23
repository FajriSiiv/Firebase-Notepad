import { Delete, Save } from "@mui/icons-material";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const DetailNote = ({
  handleClose,
  open,
  handleUpdate,
  valueTitle,
  valueContent,
  setValueTitle,
  setValueContent,
  handleDelete,
}: any) => {
  const calculateRows = () => {
    const lineBreaks = valueContent.split("\n").length;

    return lineBreaks > 1 ? lineBreaks : 10;
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   handleSaveNote({
  //     title: title,
  //     content: content,
  //   });
  //   setTitle("");
  //   setContent("");
  //   handleClose();
  // };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Adding-Note"
      aria-describedby="Adding-Note"
    >
      <Box
        component="form"
        onSubmit={handleUpdate}
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
            onChange={(e) => setValueTitle(e.target.value)}
            value={valueTitle}
          />
          <TextField
            id="standard-basic"
            placeholder="Your Note..."
            fullWidth
            multiline
            rows={calculateRows()}
            sx={{
              whiteSpace: "nowrap",
              "* fieldset": {
                border: "none",
              },
            }}
            onChange={(e) => setValueContent(e.target.value)}
            value={valueContent}
          />
        </Stack>
        <Stack justifyContent="space-between" direction="row">
          <Button startIcon={<Save />} sx={{ width: "100px" }} type="submit">
            Save
          </Button>
          <Button
            color="error"
            startIcon={<Delete />}
            sx={{ width: "100px" }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default DetailNote;
