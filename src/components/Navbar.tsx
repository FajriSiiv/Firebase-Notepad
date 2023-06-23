import { Box, Button, Stack, Typography } from "@mui/material";
import { auth } from "../config/firebase";

const Navbar = ({ user }: any) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Box component="nav">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography component="h1" variant="h5" fontWeight="bold">
          NoteApp
        </Typography>
        {user && (
          <Box>
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
