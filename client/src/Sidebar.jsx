import React, { useState } from "react";
import {
  Button,
  Stack,
  Drawer,
  Typography,
  Box,
} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import ImageIcon from "@mui/icons-material/Image";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import {SiOpenai} from 'react-icons/si';

function Sidebar({
  setCurrentChatType,
  currentChatType,
  setIsDarkMode,
  isDarkMode,
}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawer = (
    <Stack
      sx={{
        width: "240px",
        position: "relative",
        height: "100%",
        background: "rgba(32,32,35,1)",
        padding: "10px",
      }}
    >
       <Box
        sx={{
          color: "#fff",
          padding: "10px 0px",
          alignContent: 'center'
        }}
      >
         <Typography sx={{fontSize: 'x-large'}}><SiOpenai/> NexusGPT</Typography>
      </Box>

      <Button
        sx={{
          border: "1px solid #fff",
          color: "#fff",
          padding: "10px 0px",
          margin: "20px 0px 0px 0px",
          background: currentChatType === "text" ? "rgba(52, 53, 65, 1)" : "",
          "&: hover": {
            border: "1px solid #fff",
            background: currentChatType === "text" ? "rgba(52, 53, 65, 1)" : "",
          },
        }}
        onClick={() => setCurrentChatType("text")}
      >
        <ForumIcon /> New Chat
      </Button>

      <Button
        sx={{
          border: "1px solid #fff",
          color: "#fff",
          padding: "10px 0px",
          background: currentChatType === "image" ? "rgba(52, 53, 65, 1)" : "",
          margin: "20px 0px 0px 0px",
          "&: hover": {
            border: "1px solid #fff",
            background:
              currentChatType === "image" ? "rgba(52, 53, 65, 1)" : "",
          },
        }}
        onClick={() => setCurrentChatType("image")}
      >
        <ImageIcon /> Generate Image
      </Button>

      <Button
        sx={{
          border: "1px solid #fff",
          color: "#fff",
          padding: "10px 0px",
          background: isDarkMode ? "rgba(52, 53, 65, 1)" : "",
          width: "230px",
          "&: hover": {
            border: "1px solid #fff",
            background: isDarkMode ? "rgba(52, 53, 65, 1)" : "",
          },
          position: "absolute",
          bottom: "20px",
        }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <LightModeIcon /> : <NightsStayIcon />}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </Stack>
  );
  return (
    <>
      <MenuIcon
        onClick={toggleDrawer}
        sx={{
          padding: "20px",
          fontSize: "xx-large",
          "&:hover": { cursor: "pointer" },
        }}
      />
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Sidebar;
