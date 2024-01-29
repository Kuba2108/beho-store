import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import * as React from "react";

export default function CatalogButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{
          fontFamily: "inter",
          textTransform: "none",
          backgroundColor: "#FF4D4D",
          fontSize: 16,
          p: "16px 18px",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          "&:hover": {
            backgroundColor: "#ff1a1a",
          },
        }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Каталог товаров
      </Button>

    </div>
  );
}
