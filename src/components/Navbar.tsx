import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { auth } from "../config/firebase";

const Navbar = ({ user }: any) => {
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <Box component="nav">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {user && (
          <>
            <Typography component="h1" variant="h5" fontWeight="bold">
              NoteApp
            </Typography>
            <Stack direction="row" alignItems="center" gap={2}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Avatar src={user.photoURL} alt={user.displayName} />
                <Typography variant="body2" mr={2}>
                  {user.email}
                </Typography>
              </Stack>
              <Button variant="contained" color="error" onClick={handleLogout}>
                Logout
              </Button>
            </Stack>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
