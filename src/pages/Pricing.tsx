import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Container,
  Box,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CheckIcon from "@mui/icons-material/Check";

const Pricing = () => {
  const tiers = [
    {
      title: "Básico",
      price: "2000",
      description: [
        "2% comisión",
        "10 ubicaciones de inventario",
        "Soporte 24/7",
        "Ventas globales",
      ],
    },
    {
      title: "Intermedio",
      price: "4000",
      description: [
        "1% comisión",
        "10 ubicaciones de inventario",
        "Soporte 24/7",
        "Ventas globales",
      ],
    },
    {
      title: "Avanzado",
      price: "5000",
      description: [
        "0.6% comisión",
        "10 ubicaciones de inventario",
        "Soporte 24/7",
        "Ventas globales",
      ],
    },
  ];

  return (
    <Container sx={{ backgroundColor: "#e4f3f7" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Box display="flex" alignItems="center" mb={3} mt={6}>
          <Typography fontWeight={600} sx={{ color: "#004AAE", mr: 1 }} variant="h4" gutterBottom>
            Conocé nuestros planes disponibles para potenciar tu negocio
          </Typography>
          <RocketLaunchIcon sx={{ color: "#004AAE" }} />
        </Box>

        <Grid container spacing={5} mt={1}>
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Paper elevation={4} sx={{ width: "19rem" }}>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Chip
                      label={tier.title}
                      sx={{
                        color: "#466695",
                        fontWeight: "bold",
                        mb: 1,
                        backgroundColor: "#D8E5ED",
                      }}
                    />
                    <Typography variant="h4" sx={{ color: "#004AAE" }}>
                      <strong> ${tier.price}</strong>/mes
                    </Typography>
                    <Divider sx={{ width: "100%", mt: 2 }} />

                    <Box mt={2}>
                      <ul>
                        {tier.description.map((line) => (
                          <Box display="flex" alignItems="center" key={line}>
                            <CheckIcon fontSize="small" sx={{ color: "#94c133" }} />
                            <Typography variant="subtitle1" ml={1}>
                              {line}
                            </Typography>
                          </Box>
                        ))}
                      </ul>
                    </Box>

                    <Button
                      sx={{
                        textTransform: "none",
                        borderRadius: 10,
                        backgroundColor: "#007998",
                      }}
                      variant="contained"
                    >
                      Probar 30 días gratis
                    </Button>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Pricing;
