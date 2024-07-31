import React from "react";
import { Box } from "@mui/material";
import AreaChat from "./AreaChat";
import SideBar from "./SideBar";

const Chat = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <AreaChat />
    </Box>
  );
};

export default Chat;
