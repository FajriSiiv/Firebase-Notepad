import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Login = () => {
  const handleGoogleLogin = async () => {
    // const provider = new db.auth.GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
