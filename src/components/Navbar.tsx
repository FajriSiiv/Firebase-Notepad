import { auth } from "../config/firebase";

const Navbar = ({ user }: any) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav>
      <h1>NoteApp</h1>
      {user && (
        <div>
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
