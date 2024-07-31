import { Box, Typography, Backdrop } from "@mui/material";
import LoginForm from "./LoginForm";
import LoginButtons from "./LoginButtons";
import styled from "@emotion/styled";
import wave from "../wavesbg.svg";

const StyledBackgroundImage = styled(Box)`
  flex: 1;
  background-image: url(${wave});
  background-size: cover;
  background-position: center;
`;

const StyledContentBox = styled(Box)`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  padding: 60px;
  borderRadius: '2rem',
  width: 50%;
`;

const Home = () => {
  return (
    <StyledBackgroundImage
      sx={{
        height: "100vh",
        display: "flex",
        // alignItems: "center",
        // justifyContent: "flex-end",
        justifyContent: "center",

        backgroundColor: "#FFFF",
      }}
    >
      <StyledContentBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "30rem",
          justifyContent: "center",
        }}
      >
        <Box mb={6} display="flex" flexDirection="column" alignItems="center">
          <img src="https://i.imgur.com/HilUvIf.png" width="60px" height="auto" alt="logo" />
          <Typography ml={2} mt={2} variant="h3" fontWeight={600} sx={{ color: "white" }}>
            PhoenixAI
          </Typography>
        </Box>
        <LoginForm />
        <LoginButtons />
      </StyledContentBox>
    </StyledBackgroundImage>
  );
};

export default Home;
