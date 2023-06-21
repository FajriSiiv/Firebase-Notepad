const Note = ({ note, deleteNote }: any) => {
  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
