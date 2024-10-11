import * as yup from "yup";

const reg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mobileReg = /^[6-9]{1}[0-9]{9}$/;
const password_regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
const address_regex = /^[a-zA-Z0-9\s,./-]+,\s*[a-zA-Z\s]+,\s*\d{6}$/;
// const url_regex = /^(https?:\/\/)?[\w\-]+\.[\w\-]+(\.[\w\-]+)([\/\w\-])?$/i;

export const registerschema = yup.object().shape({
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
    .matches(
      password_regex,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
    )
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

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email ID should be correct")
    .matches(reg, "Email ID should be correct")
    .required("Email ID is required. Please provide a Email ID."),
  password: yup
    .string()
    .matches(
      password_regex,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
    )
    .required("Password is required. Please provide a Password."),
});

// report validation
export const reportSchema = yup.object().shape({
  title: yup
    .string()
    .min(1, "Title should not be empty. Please Provide a title.")
    .matches(/^[a-zA-Z ]+$/, "Title should be correct")
    .required("Title is required. Please provide a title."),
  postCategory: yup
    .string()
    .min(1, "Post Category should not be empty. Please Provide Post Category.")
    .matches(/^[a-zA-Z ]+$/, "Post Category should be correct")
    .required("Post Category is required. Please provide a Post Category."),
  description: yup
    .string()
    .min(1, "Description should not be empty. Please Provide a description.")
    .required("Description is required. Please provide a description."),
  remark: yup
    .string()
    .min(1, "Remarks should not be empty. Please Provide remarks.")
    .required("Remarks are required. Please provide Remarks."),
  // File validation rules
  file: yup.mixed()
  .notRequired()
  .test("fileSize", "File too large (max 2MB)", (value) => {
    return !value || (value && value.size <= 2000000); // 2MB
  })
  .test("fileType", "Unsupported File Format", (value) => {
    return (
      !value || // Skip validation if no file is provided
      (value && 
        (value.type === "image/jpeg" ||
         value.type === "image/png" ||
         value.type === "application/pdf"))
    );
  }),
    locationLost: yup.string()
    .min(3, "Location should not be empty. Please provide a location.")
    .matches(address_regex, "Please Insert a valid location.")
    .required("Location is required. Please provide a location."),  
    dateLost: yup.string()
    .min(1, "Lost date should not be empty. Please Provide a lost date.")
    .required("Lost date is required. Please provide a lost date."),
});
