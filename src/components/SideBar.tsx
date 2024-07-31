import { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
  Avatar,
  IconButton,
  Button,
  Tooltip,
} from "@mui/material";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ContrastOutlinedIcon from "@mui/icons-material/ContrastOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleToggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          height: "100vh",
          width: isMinimized ? "60px" : "250px",
          backgroundColor: theme === "dark" ? "#003554" : "#B8D4E4",
          color: theme === "dark" ? "white" : "#928BF6",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.5s",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
          {!isMinimized && (
            <img src="https://i.imgur.com/HilUvIf.png" width="40px" height="auto" alt="logo" />
          )}
          {!isMinimized && (
            <>
              <Typography
                ml={2}
                variant="h6"
                sx={{ flexGrow: 1, color: theme === "dark" ? "white" : "#15116B" }}
              >
                PhoenixAI
              </Typography>
              <IconButton sx={{ ml: 1, color: "white" }}>
                {" "}
                <ContrastOutlinedIcon
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  fontSize="small"
                />
              </IconButton>
            </>
          )}
          <IconButton
            onClick={handleToggleSidebar}
            sx={{ ml: isMinimized ? 0 : "auto", color: "white" }}
          >
            {isMinimized ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        {!isMinimized && (
          <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: theme === "dark" ? "#186796" : "#15116B",
                  mb: 1,
                  color: "#fff",
                  width: "13rem",
                  textTransform: "none",
                  borderRadius: "3rem",
                }}
              >
                + New chat
              </Button>
            </Box>
            <Divider />
            <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" fontWeight={550} color="text.secondary">
                Your conversations
              </Typography>
              <Tooltip arrow title="Clear all">
                <IconButton
                  sx={{
                    color: "#E4E2FD",
                  }}
                >
                  <ClearAllIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ p: 1 }}>
              <List>
                <Typography ml={1} fontWeight={550} variant="body2" color="text.secondary">
                  Today
                </Typography>
                <Divider sx={{ mt: 1.5 }} />
                <ListItemButton>
                  <ChatOutlinedIcon sx={{ fontSize: 16, mr: 0.8 }} />
                  <ListItemText secondary="Create game for..." sx={{ color: "red" }} />
                </ListItemButton>
                <ListItemButton>
                  <ChatOutlinedIcon sx={{ fontSize: 16, mr: 0.8 }} />
                  <ListItemText secondary="Lorem Ipsum Pr..." />
                </ListItemButton>
                <ListItemButton>
                  <ChatOutlinedIcon sx={{ fontSize: 16, mr: 0.8 }} />
                  <ListItemText secondary="Lorem Project M..." />
                </ListItemButton>
              </List>
            </Box>
            <Box sx={{ p: 1, mt: "auto" }}>
              <Typography ml={1} fontWeight={550} variant="body2" color="text.secondary">
                Last 7 Days
              </Typography>
              <Divider sx={{ mt: 1.5 }} />
              <List>
                <ListItemButton sx={{ alignItems: "center" }}>
                  <ChatOutlinedIcon sx={{ fontSize: 16, mr: 0.8 }} />
                  <ListItemText secondary="Crypto Len..." />
                </ListItemButton>
                <ListItemButton sx={{ alignItems: "center" }}>
                  <ChatOutlinedIcon sx={{ fontSize: 16, mr: 0.8 }} />
                  <ListItemText secondary="Operator Gr..." />
                </ListItemButton>
                <ListItemButton sx={{ alignItems: "center" }}>
                  <ChatOutlinedIcon sx={{ fontSize: 16, mr: 0.8 }} />
                  <ListItemText secondary="Min States..." />
                </ListItemButton>
              </List>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                borderColor: "red",
                borderRadius: "3rem",
              }}
            >
              <Avatar
                src="https://statics.forbes.com.ec/2022/01/crop/61eabe20211cb__400x260.webp"
                sx={{ width: "30px", height: "30px" }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="body2">Andrew Neilson</Typography>
              </Box>
              <Link to="/">
                <Tooltip arrow title="Cerrar sesión">
                  <IconButton sx={{ ml: "1rem" }}>
                    <ExitToAppRoundedIcon sx={{ color: "#FFFF" }} />
                  </IconButton>
                </Tooltip>
              </Link>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SideBar;
