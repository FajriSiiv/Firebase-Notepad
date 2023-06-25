import { Google } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
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
    <Box sx={{ height: "90vh" }}>
      <Stack
        justifyContent="center"
        sx={{ height: "100%" }}
        alignItems="center"
        gap={2}
      >
        <Stack
          direction="column"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h3" component="h1" fontWeight="bold">
            Notepad Application
          </Typography>
          <Typography component="p" variant="body2">
            a simple notepad application to save your note
          </Typography>
        </Stack>
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
