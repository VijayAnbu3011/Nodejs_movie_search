import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import React from "react";

const InputBoxComponent = ({
  value = "",
  name = "",
  label = "",
  type = "text",
  onChange = () => {},
  errorText = "",
  multiline = false,
}) => {
  return (
    <>
      <TextField
        id={label}
        value={value}
        name={name}
        label={label}
        size="small"
        variant="standard"
        fullWidth
        onChange={onChange}
        type={type}
        multiline={multiline}
        rows={5}
        inputProps={{ "data-testid": label }}
        InputProps={{ autoComplete: "OFF" }}
        error={Boolean(errorText)}
        sx={{
          "& .MuiInputBase-root::before": {
            borderColor: "#F7EFE6 !important",
          },
          "& .MuiInputBase-root::after": {
            borderColor: "#F7EFE6 !important",
          },
          "& .MuiInputBase-root": {
            borderColor: "#F7EFE6 !important",
            color: "#F7EFE6 !important",
            fontWeight: "400",
            fontSize: "14px",
          },
          "& .MuiFormLabel-root": {
            fontWeight: "400",
            fontSize: "14px",
            color: "#F7EFE6 !important",
            zIndex: 1,
          },
        }}
      />
      {Boolean(errorText) && (
        <FormHelperText error className="m-0 p-0 fs-12 fw-600">
          {errorText}
        </FormHelperText>
      )}
    </>
  );
};

export default InputBoxComponent;
