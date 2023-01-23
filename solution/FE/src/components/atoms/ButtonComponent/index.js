import Button from "@mui/material/Button";
import React from "react";

const ButtonComponent = ({
  label = "Button",
  onClick = () => {},
  className = "",
  variant = "contained",
  disabled = false,
}) => {
  return (
    <Button
      id={label}
      data-testid={label}
      fullWidth
      variant={variant}
      disableElevation
      disableFocusRipple
      className={`fw-500 fs-18 ${className} text-decoration-none`}
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        background:
          variant === "outlined"
            ? "rgba(255, 255, 255, 0.2) !important"
            : disabled
            ? "#8C8C8C !important"
            : "#F7EFE6 !important",
        backdropFilter: variant === "outlined" ? "blur(5px) !important" : "",
        color:
          variant === "outlined"
            ? "#ffffff !important"
            : disabled
            ? "#cccccc !important"
            : "#2D0102 !important",
        "&:hover": {
          background:
            variant === "outlined"
              ? ""
              : disabled
              ? "#8C8C8C !important"
              : "#F7EFE6 !important",
          color:
            variant === "outlined"
              ? "#ffffff !important"
              : disabled
              ? "#cccccc !important"
              : "#2D0102 !important",
        },
        borderColor:
          variant === "outlined" ? "#f4f4f4 !important" : "#F7EFE6 !important",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
