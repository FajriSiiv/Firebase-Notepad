import { Google } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Stack justifyContent="center" alignItems="center">
        <Button
          onClick={handleGoogleLogin}
          variant="outlined"
          startIcon={<Google />}
          size="large"
        >
          Login with Google
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
