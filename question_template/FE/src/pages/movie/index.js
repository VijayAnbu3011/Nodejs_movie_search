/* eslint-disable array-callback-return */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import DatePickerComponent from "../../components/atoms/DatePickerComponent";
import SimpleDropDown from "../../components/atoms/SimpleDropDown";
import CarouselComponent from "../../components/molecules/CarouselComponent";
import ModalComponent from "../../components/molecules/ModalComponent";
import { bookMovie, getAllMovies, getAllTheatre } from "../../services/movie";

const timeOptions = [
  {
    id: "10:00 AM",
    label: "10:00 AM",
  },
  {
    id: "02:00 PM",
    label: "02:00 PM",
  },
  {
    id: "05:00 PM",
    label: "05:00 PM",
  },
  {
    id: "10:00 PM",
    label: "10:00 PM",
  },
];

const seatOptions = [
  {
    id: "1",
    label: "1",
  },
  {
    id: "2",
    label: "2",
  },
  {
    id: "3",
    label: "3",
  },
  {
    id: "4",
    label: "4",
  },
];

const initialFormData = {
  date: null,
  time: null,
  theatre: null,
  seat: null,
};

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [theatreOptions, setTheatreOptions] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchAllMovies();
    fetchAllTheatre();
  }, []);

  const fetchAllMovies = () => {};

  const fetchAllTheatre = () => {};

  const handleBookNowClick = () => {};

  const handleDateChange = () => {};

  const handleTimeChange = () => {};

  const handleTheatreChange = () => {};

  const handleSeatChange = () => {};

  const handleNextClick = () => {};

  const handleBackClick = () => {};

  const handleModalClose = () => {};

  const handleApplyCoupon = () => {};

  const handleProceedClick = () => {};

  return (
    <>
      <CarouselComponent />
    </>
  );
};

export default Movie;

const ApplyButton = ({ onClick = () => {} }) => {
  return (
    <Button
      disableElevation
      disableFocusRipple
      variant="contained"
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        background: "#272525",
        boxShadow: "0px 3px 6px #0A0000",
        border: "1px solid #FFFFFF66",
        "&:hover": {
          background: "#272525",
        },
      }}
      onClick={onClick}
    >
      Apply
    </Button>
  );
};
