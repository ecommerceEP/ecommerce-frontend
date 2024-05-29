import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Paper, Divider } from "@mui/material";
import { styled } from "@mui/system";
import ModalLogin from "../components/ModalLogin";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const BackgroundImage = styled(Box)(({ theme }) => ({
  // backgroundImage: `url('https://img.freepik.com/fotos-premium/caja-regalo-blanca-carro-compras-contexto-azul_23-2147892204.jpg?w=740')`,
  backgroundImage: `url(' https://img.freepik.com/fotos-premium/banner-compras-bolsas-compra-cajas-regalo-ilustracion-procesamiento-3d-perfecto-banner-compras_7209-503.jpg?w=1060')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: "50vh",
  padding: theme.spacing(15, 0, 15),
  color: "#FFFFF",
}));

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box>
              <img src="https://i.imgur.com/hAw38zA.png" width="30%" alt="virtualstore" />
            </Box>
            <Box display="flex">
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  color: "#004AAE",
                }}
                component={Link}
                to="/pricing"
              >
                <strong>Precios</strong>
              </Button>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Button
                sx={{
                  textTransform: "none",
                  color: "#004AAE",
                }}
                color="inherit"
              >
                <strong>Contacto</strong>
              </Button>
              <Button
                sx={{ borderRadius: 10, textTransform: "none", ml: 3, mr: 1 }}
                color="primary"
                variant="outlined"
                startIcon={<AccountCircleIcon />}
              >
                Iniciar sesión
              </Button>
              <Button
                sx={{ borderRadius: 10, ml: 1, backgroundColor: "#004AAE", textTransform: "none" }}
                variant="contained"
                onClick={handleClickOpen}
                startIcon={<StoreIcon />}
              >
                Crear tienda gratis
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <BackgroundImage>
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "650px",
          }}
        >
          <Typography variant="h3" sx={{ color: "#FFFF", mb: 2 }}>
            <strong>¡Bienvenido a VirtualStore!</strong>
          </Typography>
          <Box width="40rem">
            <Typography variant="h5" paragraph sx={{ color: "#FFFF" }}>
              Impulsa tu negocio en línea con nosotros, fácil y rápido. Regístrate ahora y obtene un
              mes gratis para tu negocio.
            </Typography>
          </Box>

          <Box>
            <Button
              variant="contained"
              size="large"
              onClick={handleClickOpen}
              sx={{
                mt: 2,
                borderRadius: 10,
                ml: 1,
                textTransform: "none",
                backgroundColor: "#004AAE",
              }}
            >
              Comenzar ahora
            </Button>
          </Box>
        </Box>
      </BackgroundImage>
      <ModalLogin open={open} onClose={handleClose} />
    </div>
  );
};

export default Home;
