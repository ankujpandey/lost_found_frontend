import * as yup from "yup";

const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mobileReg = /^[6-9]{1}[0-9]{9}$/;
const password_regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
const address_regex = /^[a-zA-Z0-9\s,./-]+,\s*[a-zA-Z\s]+,\s*\d{6}$/;
const url_regex = /^(https?:\/\/)?[\w\-]+\.[\w\-]+(\.[\w\-]+)([\/\w\-])?$/i;

export  const registerschema = yup.object().shape({
    fname: yup
      .string()
      .min(1, "First Name should not be empty.")
      .matches(/^[a-zA-Z ]+$/, "First Name should be correct.")
      .required("First Name is required."),
    lname: yup
      .string()
      .min(1, "Last Name should not be empty.")
      .matches(/^[a-zA-Z ]+$/, "Last Name should be correct"),
    email: yup
      .string()
      .email("Email ID should be correct")
      .matches(reg, "Email ID should be correct")
      .required("Email ID is required."),
    password: yup
      .string()
      .matches(password_regex, "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.")
      .required("Password is required."),
    mobile: yup
      .string()
      .matches(mobileReg, "Please Insert Valid Mobile Number.")
      .length(10, "Mobile number must be exactly 10 digits.")
      .required("Mobile is required."),
    address: yup
      .string()
      .matches(address_regex, "Please Insert Valid address.")
      .required("Address is required."),
    // profile_url: yup
    //   .string()
    //   .matches(url_regex, "Please Insert valid URL.")
    //   .required("URL is required.")
  });

  export  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email ID should be correct")
      .matches(reg, "Email ID should be correct")
      .required("Email ID is required. Please provide a Email ID."),
    password: yup
      .string()
      .matches(password_regex, "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.")
      .required("Password is required. Please provide a Password.")
  });