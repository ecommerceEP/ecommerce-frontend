import { TextField, Box } from "@mui/material";
import { SyntheticEvent, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box gap={3} sx={{ width: "15rem", display: "flex", flexDirection: "column" }}>
        <TextField
          id="email"
          label="Correo electrónico"
          type="email"
          color="secondary"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Box>
    </form>
  );
};

export default LoginForm;
