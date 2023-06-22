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
    <div className="note">
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
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Note;
