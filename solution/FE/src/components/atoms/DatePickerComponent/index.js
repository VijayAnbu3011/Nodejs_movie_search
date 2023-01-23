import DateRangeIcon from "@mui/icons-material/DateRange";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

const DatePickerComponent = ({
  value = null,
  onChange = () => {},
  errorText = "",
  label = "Choose Date",
}) => {
  const onKeyDown = e => {
    e.preventDefault();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        <DatePicker
          value={value}
          onChange={onChange}
          disableMaskedInput
          components={{
            OpenPickerIcon: DateRangeIcon,
          }}
          componentsProps={{
            leftArrowButton: { sx: { color: "#ffffff" } },
            rightArrowButton: { sx: { color: "#ffffff" } },
            switchViewButton: { sx: { color: "#ffffff" } },
          }}
          OpenPickerButtonProps={{ sx: { color: "#ffffff" } }}
          PaperProps={{
            sx: {
              background: "#272525",
              color: "#ffffff",
              "& .MuiDayPicker-weekDayLabel": { color: "#ffffff" },
              "& .MuiPickersDay-root": {
                background: "#272525",
                color: "#ffffff",
              },
              "& .MuiPickersDay-today": {
                color: "#ffffff",
                borderColor: "#ffffff !important",
              },
              "& .Mui-selected": {
                background: "#ffffff !important",
                color: "#272525 !important",
              },
            },
          }}
          disablePast
          renderInput={params => (
            <TextField
              onKeyDown={onKeyDown}
              {...params}
              id="date-picker"
              size="small"
              variant="outlined"
              label={label}
              fullWidth
              inputProps={{
                ...params.inputProps,
                "data-testid": "date-picker",
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
        />
      </Box>
      {Boolean(errorText) && (
        <FormHelperText error className="m-0 p-0 fs-12 fw-600">
          {errorText}
        </FormHelperText>
      )}
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
