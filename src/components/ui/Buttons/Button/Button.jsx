import {Button as MuiButton} from '@mui/material'

const Button = ({ children, icon, bgColor, textColor }) => {
  return (
    <MuiButton variant='contained'
    endIcon={icon}
    sx={{
        boxShadow: "none",
        textTransform: "none",
        backgroundColor: bgColor ? bgColor : "#FF4D4D",
        fontWeight: 500,
        fontSize:16,
        p: "8.5px 20px",
        color: textColor ? textColor : "#fff",
        fontFamily: "Inter",
        "&:hover": {
        backgroundColor: "#FF4D4D",
        boxShadow: "none"
        }
    }}>
        {children}
    </MuiButton>
    )
}

export default Button