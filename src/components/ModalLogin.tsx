import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "25rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "none",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface IModalProps {
  open: boolean;
  onClose: () => void;
}

const ModalLogin = ({ open, onClose }: IModalProps) => {
  return (
    <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle sx={{ mt: 0, p: 2 }}>
        <img src="https://i.imgur.com/hAw38zA.png" width="28%" alt="virtualstore" />
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        dividers
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            mb: 2,
            color: "#5575e1",
          }}
        >
          ¡Comencemos a crear tu tienda!
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="holamundo@gmail.com"
          label="Correo electrónico"
          sx={{ m: 1, width: "80%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle fontSize="small" sx={{ color: "#5575e1" }} />
              </InputAdornment>
            ),
            inputProps: {
              style: { fontSize: 14 },
            },
          }}
        />

        <TextField
          fullWidth
          size="small"
          // type={showPassword ? 'text' : 'password'}
          sx={{ m: 1, width: "80%" }}
          type="password"
          placeholder="Ingresa tu contraseña aquí"
          label="Contraseña"
          InputLabelProps={{
            style: { fontSize: 14 },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                //   onClick={handleClickShowPassword}
                //   onMouseDown={handleMouseDownPassword}
                //   edge="end"
                >
                  <VisibilityOff fontSize="small" sx={{ color: "#5575e1" }} />
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            ),
            inputProps: {
              style: { fontSize: 14 },
            },
          }}
        />

        {/* <Box> */}
        <Button
          variant="contained"
          sx={{
            borderRadius: 10,
            mt: 2,
            mb: 2,
            backgroundColor: "#004AAE",
            textTransform: "none",
            fontWeight: "bold",
            width: "80%",
          }}
          autoFocus
          onClick={onClose}
          size="large"
        >
          Crear tienda gratis
        </Button>
        <Typography fontSize={12}>
          ¿Ya tienes una cuenta?{" "}
          <span style={{ color: "#004AAE", cursor: "pointer" }}>Inicia sesión</span>
        </Typography>

        {/* </Box> */}
      </DialogContent>
    </BootstrapDialog>
  );
};

export default ModalLogin;
