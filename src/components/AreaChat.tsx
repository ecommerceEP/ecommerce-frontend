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
  Avatar,
  Divider,
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
        backgroundColor: "#03273D",
        p: 3,
      }}
    >
      <Box
        mt={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          maxWidth: "70%",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "0.5em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#3A7EA5",
          },
          gap: 2,
          alignItems: "right",
          color: "white",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            flexGrow: 1,
            backgroundColor: "#003554",
            width: "95%",

            display: "flex",
            flexDirection: "column",
            height: "auto",
            color: "white",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "5rem",
            }}
          >
            <Box display="flex" alignItems="center" mb={1}>
              <img src="https://i.imgur.com/HilUvIf.png" width="30px" height="auto" alt="logo" />
              <Typography ml={2} variant="body2" fontWeight={600}>
                PhoenixAI
              </Typography>
            </Box>
            <Typography fontSize={15}>
              Bienvenido, Andrew Neilson, estoy aquí para ayudarte a hacer las cosas más rápido. ¿En
              qué puedo ayudarte hoy?
            </Typography>
          </Box>
        </Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            p: 2,
          }}
        >
          <Box display="flex" alignContent="start" alignItems="center" mb={1}>
            <Avatar
              src="https://statics.forbes.com.ec/2022/01/crop/61eabe20211cb__400x260.webp"
              sx={{ width: "30px", height: "30px" }}
            />

            <Typography ml={2} fontWeight={600} variant="body2">
              Andrew Neilson
            </Typography>
          </Box>
          <Typography fontSize={15}>
            Hola, quisiera saber cómo cambiar el color del placeholder de un TextField de Material
            UI.
          </Typography>
        </Box>
        <Paper
          elevation={4}
          sx={{
            flexGrow: 1,
            backgroundColor: "#003554",
            width: "95%",
            display: "flex",
            flexDirection: "column",
            height: "auto",
            alignItems: "center",
            color: "white",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "5rem",
            }}
          >
            <Box display="flex" alignItems="center" mb={1}>
              <img src="https://i.imgur.com/HilUvIf.png" width="30px" height="auto" alt="logo" />
              <Typography ml={2} variant="body2" fontWeight={600}>
                PhoenixAI
              </Typography>
            </Box>
            <Typography fontSize={15}>
              Claro, para cambiar el color del placeholder de un TextField en Material-UI, necesitas
              usar la propiedad ::placeholder en la propiedad sx de tu componente TextField. La
              propiedad sx es una propiedad especial de Material-UI que te permite aplicar estilos
              directamente a un componente. Dentro de la propiedad sx, puedes usar selectores CSS
              para apuntar a elementos específicos dentro del componente. En este caso, para cambiar
              el color del placeholder, necesitas apuntar al elemento input real y luego usar la
              pseudo-clase ::placeholder.
            </Typography>
          </Box>
        </Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            // width: "auto",
            // backgroundColor: "#003554",
            alignContent: "right",
            alignItems: "right",

            p: 2,
          }}
        >
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar
              src="https://statics.forbes.com.ec/2022/01/crop/61eabe20211cb__400x260.webp"
              sx={{ width: "30px", height: "30px" }}
            />

            <Typography ml={2} fontWeight={600} variant="body2">
              Andrew Neilson
            </Typography>
          </Box>
          <Typography fontSize={15}>
            Muchas gracias por la respuesta, me ha sido de mucha ayuda.
          </Typography>
        </Box>
        <Paper
          elevation={4}
          sx={{
            flexGrow: 1,
            backgroundColor: "#003554",
            width: "95%",

            display: "flex",
            flexDirection: "column",
            height: "auto",
            alignItems: "center",
            color: "white",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "5rem",
            }}
          >
            <Box display="flex" alignItems="center" mb={1}>
              <img src="https://i.imgur.com/HilUvIf.png" width="30px" height="auto" alt="logo" />
              <Typography ml={2} variant="body2" fontWeight={600}>
                PhoenixAI
              </Typography>
            </Box>
            <Typography fontSize={15}>
              ¡De nada! Me alegra saber que la información fue útil. Si tienes más preguntas sobre
              programación o necesitas ayuda con algo más, no dudes en preguntar. ¡Estoy aquí para
              ayudar!
            </Typography>
          </Box>
        </Paper>
      </Box>

      <Box
        mt={3}
        sx={{
          borderColor: "secondary",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#003554",
          width: "70%",
          borderRadius: "1rem",
        }}
      >
        <OutlinedInput
          placeholder="What's in your mind?"
          value={textRange}
          onChange={(e) => setTextRange(e.target.value)}
          sx={{
            color: "white",
            textDecoration: "none",
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#FFFF",
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" disabled={textRange.length <= 0}>
                <SendIcon sx={{ color: textRange.length <= 0 ? "#1D5E83" : "#dfd2f4" }} />
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
