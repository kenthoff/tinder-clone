import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { IconButton } from "@mui/material";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon />
      </IconButton>
      <WhatshotIcon fontSize="large" />
      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}

export default Header;
