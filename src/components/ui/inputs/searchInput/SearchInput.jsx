import { ReactComponent as SearchIcon } from "../../../../assets/svg/search-icon.svg";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";

export default function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          backgroundColor: "#F2F5F9",
          p: "8px 20px",
          display: "flex",
          alignItems: "center",
          width: 640,
        }}
      />
    </Paper>
  );
}
