import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ButtonLogin = styled(Button)(() => ({
  background: "linear-gradient(to right, #459AFF, #6054FF)",
  color: "#ffff",
  border: "none",
  textDecoration: "none",
  width: "15rem",
  borderRadius: "3rem",
  transition: "background 2s, color 2s",
  fontSize: "1rem",
  "&:hover": {
    background: "linear-gradient(to right, #3B80D2, #3328C0)",
    color: "#D4E6FB",
  },
}));

const LoginButtons = () => {
  return (
    <Box display="flex" width="15rem" mt={3} flexDirection="column" gap={2}>
      <Link to="/chat">
        <ButtonLogin sx={{ textTransform: "none" }}>Iniciar sesión</ButtonLogin>
      </Link>
    </Box>
  );
};

export default LoginButtons;
