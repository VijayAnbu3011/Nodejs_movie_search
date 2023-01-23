import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    zIndex: 1,
    "& .MuiAutocomplete-listbox": {
      background: "#272525",
      color: "#ffffff",
    },
    "& .MuiAutocomplete-noOptions": {
      background: "#272525",
      color: "#ffffff",
    },
  },
});

const SimpleDropDown = ({
  value = null,
  label = "Simple Drop Down",
  errorText = "",
  options = [],
  onChange = () => {},
}) => {
  const CustomPopper = props => {
    const classes = useStyles();
    return <Popper {...props} className={classes.root} placement="bottom" />;
  };

  return (
    <Box
      py={0.4}
      sx={{
        border: Boolean(errorText)
          ? "1px solid #d32f2f"
          : "1px solid #FFFFFF66",
        borderRadius: "5px",
        boxShadow: "0px 3px 6px #0A0000",
      }}
    >
      <Autocomplete
        id={label}
        options={options}
        value={value}
        getOptionLabel={option => (option.label ? option.label : "")}
        isOptionEqualToValue={(option, value) =>
          value === undefined || value === "" || option.id === value.id
        }
        componentsProps={{
          clearIndicator: { sx: { color: "#ffffff" } },
          popupIndicator: { sx: { color: "#ffffff" } },
        }}
        PopperComponent={CustomPopper}
        renderInput={params => (
          <TextField
            {...params}
            size="small"
            variant="outlined"
            label={label}
            fullWidth
            inputProps={{
              ...params.inputProps,
              placeholder: "",
            }}
            sx={{
              "& .MuiInputLabel-shrink": {
                lineHeight: "2.4375em",
              },
              "& .MuiFormLabel-root": {
                fontSize: "14px",
                color: "#FFFFFF !important",
              },
              "& .MuiInputBase-input": {
                color: "#ffffff",
              },
              ...params.sx,
            }}
          />
        )}
        onChange={(_, value) => {
          onChange(value);
        }}
      />
    </Box>
  );
};

export default SimpleDropDown;
