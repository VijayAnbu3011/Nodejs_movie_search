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

  const fetchAllMovies = async () => {
    const { data } = await getAllMovies();
    if (data) {
      setMovies(data.data);
    } else setMovies([]);
  };

  const fetchAllTheatre = async () => {
    const { data } = await getAllTheatre();
    if (data) {
      const arr = [];
      data.data.map(item => {
        arr.push({
          id: item.theatreId,
          label: item.theatreName,
          value: item.seatCpacity,
        });
      });
      setTheatreOptions(arr);
    } else setTheatreOptions([]);
  };

  const handleBookNowClick = item => {
    setSelectedMovie(item);
  };

  const handleDateChange = value => {
    setFormData(prev => ({ ...prev, date: value }));
  };

  const handleTimeChange = value => {
    setFormData(prev => ({ ...prev, time: value }));
  };

  const handleTheatreChange = value => {
    setFormData(prev => ({ ...prev, theatre: value }));
  };

  const handleSeatChange = value => {
    setFormData(prev => ({ ...prev, seat: value }));
  };

  const handleNextClick = () => {
    const total =
      parseInt(selectedMovie.ticketPrice, 10) *
      parseInt(formData.seat?.label, 10);
    setTotalPrice(total);
    setOpen(true);
  };

  const handleBackClick = () => {
    setFormData(initialFormData);
    setSelectedMovie({});
  };

  const handleModalClose = () => {
    setTotalPrice(0);
    setOpen(false);
  };

  const handleApplyCoupon = percentage => {
    const totalAmount =
      parseInt(selectedMovie.ticketPrice, 10) *
      parseInt(formData.seat?.label, 10);
    if (percentage === 10 && totalAmount >= 1000) {
      const discount = totalAmount * (parseInt(percentage, 10) / 100);
      const total = totalAmount - parseInt(discount, 10);
      setTotalPrice(total);
    } else if (percentage === 15 && totalAmount >= 2000) {
      const discount = totalAmount * (parseInt(percentage, 10) / 100);
      const total = totalAmount - parseInt(discount, 10);
      setTotalPrice(total);
    }
  };

  const handleProceedClick = async () => {
    const { date, seat, theatre, time } = formData;
    const { movieId } = selectedMovie;
    const payload = {
      theatreId: theatre?.id,
      movieId,
      bookingDate: new Date(date).toDateString(),
      bookingTime: time?.label,
      seatCount: parseInt(seat?.label, 10),
      bookingAmount: totalPrice,
    };
    const { data, errRes } = await bookMovie(payload);
    if (data) {
      toast.success(data.message);
      handleModalClose();
      handleBackClick();
    } else {
      toast.error(errRes.message);
    }
  };

  return (
    <>
      {Object.keys(selectedMovie).length === 0 ? (
        <>
          <CarouselComponent />
          <Grid
            container
            justifyContent="start"
            gap={8}
            className="my-3 px-1 px-sm-5"
          >
            {movies.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={4.8}
                md={3.4}
                lg={2.5}
                className="position-relative border-light-white border-radius-10px box-shadow-2px"
              >
                <img
                  src={item.moviePoster}
                  alt={item.movieName}
                  width="100%"
                  height="300px"
                  className="border-radius-10px"
                />
                <Box
                  className="w-100 px-4 position-absolute"
                  sx={{ bottom: "5px" }}
                >
                  <ButtonComponent
                    variant="outlined"
                    label="Book Now"
                    onClick={() => handleBookNowClick(item)}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Box className="my-3 px-1 px-sm-5">
          <Grid container gap={{ sm: 2, md: 12 }} className="my-2 my-md-5">
            <Grid item xs={12} md={5.3} lg={5.5}>
              <Typography className="color-light-white fs-18 fw-500">
                Choose Date
              </Typography>
              <DatePickerComponent
                label="Choose Date"
                value={formData.date}
                onChange={handleDateChange}
              />
            </Grid>
            <Grid item xs={12} md={5.3} lg={5.5}>
              <Typography className="color-light-white fs-18 fw-500">
                Show Time
              </Typography>
              <SimpleDropDown
                label="Show Time"
                options={timeOptions}
                value={formData.time}
                onChange={handleTimeChange}
              />
            </Grid>
          </Grid>

          <Grid container gap={{ sm: 2, md: 12 }} className="my-2 my-md-5">
            <Grid item xs={12} md={5.3} lg={5.5}>
              <Typography className="color-light-white fs-18 fw-500">
                Choose Theatre
              </Typography>
              <SimpleDropDown
                label="Choose Theater"
                options={theatreOptions}
                value={formData.theatre}
                onChange={handleTheatreChange}
              />
            </Grid>
            <Grid item xs={12} md={5.3} lg={5.5}>
              <Typography className="color-light-white fs-18 fw-500">
                Select Seat
              </Typography>
              <SimpleDropDown
                label="Select Seat"
                options={seatOptions}
                value={formData.seat}
                onChange={handleSeatChange}
              />
            </Grid>
          </Grid>
          <Box className="my-5 d-flex align-items-center justify-content-end">
            <ButtonComponent
              className="w-10 me-2"
              label="Back"
              onClick={handleBackClick}
            />
            <ButtonComponent
              disabled={Boolean(
                !formData.date ||
                  !formData.seat ||
                  !formData.theatre ||
                  !formData.time
              )}
              className="w-10"
              label="Next"
              onClick={handleNextClick}
            />
          </Box>
        </Box>
      )}
      <ModalComponent
        modalTitle="Invoice"
        open={open}
        handleCloseClick={handleModalClose}
        handleProceedClick={handleProceedClick}
      >
        <Box className="py-2">
          <Grid container gap={2} className="mb-2">
            <Grid item>
              <Typography className="color-light-white fs-14 fw-300">
                Movie Name :
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="color-light-white fs-16 fw-500">
                {selectedMovie.movieName}
              </Typography>
            </Grid>
          </Grid>

          <Grid container gap={2} className="mb-2">
            <Grid item>
              <Typography className="color-light-white fs-14 fw-300">
                Theater Name :
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="color-light-white fs-16 fw-500">
                {formData.theatre?.label}
              </Typography>
            </Grid>
          </Grid>

          <Grid container gap={2} className="mb-2">
            <Grid item>
              <Typography className="color-light-white fs-14 fw-300">
                No. of Seats :
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="color-light-white fs-16 fw-500">
                {formData.seat?.label}
              </Typography>
            </Grid>
          </Grid>

          <Box className="bg-white p-2">
            <Typography className="fs-12 fs-300 color-light-black">
              Apply Promo Code
            </Typography>
          </Box>
          <Box className="bg-light-black p-2 mb-5">
            <Grid
              container
              gap={2}
              alignItems="center"
              className="border-bottom-light-white py-2"
            >
              <Grid item>
                <Typography className="fs-18 fs-600 color-light-white">
                  10%
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="fs-12 fs-300 color-light-white">
                  Applicable only if total amount is above
                </Typography>
                <Typography className="fs-14 fs-700 color-light-white">
                  1,000 Rs
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="fs-16 fs-600 color-light-white">
                  <ApplyButton onClick={() => handleApplyCoupon(10)} />
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              gap={2}
              alignItems="center"
              className="border-bottom-light-white py-2"
            >
              <Grid item>
                <Typography className="fs-18 fs-600 color-light-white">
                  15%
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="fs-12 fs-300 color-light-white">
                  Applicable only if total amount is above
                </Typography>
                <Typography className="fs-14 fs-700 color-light-white">
                  2,000 Rs
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="fs-16 fs-600 color-light-white">
                  <ApplyButton onClick={() => handleApplyCoupon(15)} />
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className="d-flex align-items-center justify-content-between">
            <Typography className="color-light-white fs-14 fw-300">
              Total Payable
            </Typography>
            <Typography className="color-light-white fs-18 fw-600">
              ₹ {totalPrice} /-
            </Typography>
          </Box>
        </Box>
      </ModalComponent>
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
