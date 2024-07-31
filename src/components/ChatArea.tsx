import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  InputAdornment,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SendIcon from "@mui/icons-material/Send";

const ChatArea = () => {
  const [textRange, setTextRange] = useState("");
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#E4E2FD",
        p: 3,
      }}
    >
      <Box
        mt={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: 1.5,
            borderRadius: "3rem",
            backgroundColor: "#5E5BFF",
            display: "inline-flex",
            maxWidth: "100%",
          }}
        >
          <Typography variant="body2" sx={{ color: "white" }}>
            Hola, tengo una duda sobre un tema de programación..
          </Typography>
        </Paper>

        <Paper elevation={2} sx={{ p: 1.5, borderRadius: "3rem", backgroundColor: "#8280E8" }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            Si, claro, ¿en qué puedo ayudarte?
          </Typography>
        </Paper>

        <Paper elevation={2} sx={{ p: 1.5, borderRadius: "3rem", backgroundColor: "#5E5BFF" }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            Quiero alinear todo mi Box al centro de la pantalla
          </Typography>
        </Paper>

        <Paper elevation={2} sx={{ p: 1.5, borderRadius: "3rem", backgroundColor: "#8280E8" }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            Para centrar el componente Box en el centro de la pantalla, puedes envolverlo en otro
            componente Box y utilizar las propiedades display, justifyContent y alignItems con los
            valores flex, center y center respectivamente. Aquí te muestro cómo hacerlo:
            fsdafsdafasdfsd
          </Typography>
        </Paper>
      </Box>
      <Box
        mt={3}
        sx={{
          backgroundColor: "#FFFF",
          borderColor: "secondary",
          display: "flex",
          alignItems: "center",
          width: "70%",
          borderRadius: "1rem",
          p: 0.5,
        }}
      >
        <OutlinedInput
          placeholder="What's in your mind?"
          value={textRange}
          onChange={(e) => setTextRange(e.target.value)}
          sx={{
            textDecoration: "none",
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" disabled={textRange.length <= 0}>
                <SendIcon sx={{ color: textRange.length <= 0 ? "#dfd2f4" : "#5E5BFF" }} />
              </IconButton>
            </InputAdornment>
          }
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default ChatArea;
