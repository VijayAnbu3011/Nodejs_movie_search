/* eslint-disable no-useless-escape */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import REGISTERIMAGE from "../../assets/Group 8@2x.png";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import InputBoxComponent from "../../components/atoms/InputBoxComponent";
import { regiterUser } from "../../services/auth";

const initialFormData = {
  fullName: "",
  mobileNo: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState(initialFormData);
  const navigate = useNavigate();

  /**
   * @description Handle form inputs function
   */
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * @description Form validation function
   */
  const validate = () => {
    const { fullName, mobileNo, email, password } = formData;
    const error = { ...initialFormData };
    if (fullName === "") {
      error.fullName = "This field is required.";
    } else if (fullName.length !== fullName.trim().length) {
      error.fullName = "This field is required.";
    }
    if (email === "") {
      error.email = "This field is required.";
    } else if (email.length !== email.trim().length) {
      error.email = "This field is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      error.email = "Invalid email address.";
    }
    if (mobileNo === "") {
      error.mobileNo = "This field is required.";
    } else if (mobileNo.length !== mobileNo.trim().length) {
      error.mobileNo = "This field is required.";
    } else if (!/^\d{10}$/.test(mobileNo)) {
      error.mobileNo = "Invalid mobile number.";
    }
    if (password === "") {
      error.password = "This field is required.";
    } else if (password.length !== password.trim().length) {
      error.password = "This field is required.";
    }
    setFormError(error);
    return Object.values(error).every(item => item === "");
  };

  /**
   * @description Handle form submit button function
   */
  const handleSubmit = async () => {
    if (validate()) {
      const { fullName, mobileNo, email, password } = formData;
      const payload = {
        userName: fullName,
        userEmail: email,
        userContactNumber: mobileNo,
        password,
      };
      const { data, errRes } = await regiterUser(payload);
      if (data) {
        toast.success(data.message);
        setFormData(initialFormData);
        setFormError(initialFormData);
        navigate("/auth/login");
      } else if (errRes) {
        toast.error(errRes.message);
      }
    }
  };

  return (
    <Grid container className="h-100 overflowX-hidden">
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="bg-light-blue"
        height={{ md: "100%", sm: "auto" }}
      >
        <img src={REGISTERIMAGE} alt="LOGIN" width="100%" height="100%" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="bg-red"
      >
        <Box className="p-1 p-sm-5 text-center w-100">
          <Typography className="fs-26 fw-600 color-light-white my-2">
            REGISTER
          </Typography>
          <Box className="my-3">
            <InputBoxComponent
              label="Name"
              name="fullName"
              value={formData.fullName}
              errorText={formError.fullName}
              onChange={handleChange}
            />
          </Box>
          <Box className="my-3">
            <InputBoxComponent
              label="E-mail"
              name="email"
              value={formData.email}
              errorText={formError.email}
              onChange={handleChange}
            />
          </Box>
          <Box className="my-3">
            <InputBoxComponent
              label="Phone number"
              name="mobileNo"
              value={formData.mobileNo}
              errorText={formError.mobileNo}
              onChange={handleChange}
            />
          </Box>
          <Box className="my-3">
            <InputBoxComponent
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              errorText={formError.password}
              onChange={handleChange}
            />
          </Box>
          <Box className="my-4 d-flex align-items-center justify-content-center">
            <ButtonComponent
              label="Register"
              className="w-50"
              onClick={handleSubmit}
            />
          </Box>
          <Box className="py-1 text-center">
            <Typography className="fs-14 fw-400 color-light-white">
              Already have an Account?{" "}
              <Link
                to="/auth/login"
                className="fs-16 fw-600 cursor-pointer route-hover"
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
