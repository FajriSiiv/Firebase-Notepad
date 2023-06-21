import { auth } from "../config/firebase";

const Navbar = ({ user }: any) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav>
      <h1>Note Taking App</h1>
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
