import React, { useEffect, useState } from "react";
import { images } from "../../actions/customFn";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncGetProfileData,
  asyncUpdateProfile,
} from "../../actions/profileAction";
import { useNavigate } from "react-router-dom";
import {
  asyncGetCityData,
  asyncGetCountryData,
  asyncGetStateData,
  setCityData,
} from "../../actions/countryAction";

const EditAdminProfile = ({ newProfileImg, profileData }) => {
  const [userData, setUserData] = useState({
    email: "",
    tagline: "",
    schoolName: "",
    mobileNo: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });
  const errors = {};
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  const isLoggedIn = useSelector((state) => state.login);

  const countryList = useSelector((state) => state.countryData.countryData);
  const stateList = useSelector((state) => state.countryData.stateData);
  const cityList = useSelector((state) => state.countryData.cityData);

  const validation = () => {
    if (userData.email.length === 0 || !validator.isEmail(userData.email)) {
      errors.error_email = "Please Provide valid email";
    }
    if (userData.tagline.length === 0) {
      errors.error_tagline = "Please Provide tagline";
    }
    if (userData.schoolName.length === 0) {
      errors.error_schoolName = "Please Provide school name";
    }
    if (userData.address.length === 0) {
      errors.error_address = "Please provide address";
    }
    if (userData.country.length === 0) {
      errors.error_country = "Please provide a country";
    }
    if (userData.city.length === 0) {
      errors.error_city = "Please provide a city";
    }
    if (userData.state.length === 0) {
      errors.error_state = "Please provide a state";
    }
    if (
      userData.mobileNo.length === 0 ||
      !validator.isNumeric(userData.mobileNo) ||
      userData.mobileNo.length < 6 ||
      userData.mobileNo.length > 20
    ) {
      errors.error_mobileNo = "Please provide valid mobile no.";
    }
    setFormErrors(errors);
  };

  const handleUserDataChange = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
    if (name === "country") {
      dispatch(asyncGetStateData(value));
      dispatch(setCityData([]));
      if (userData.city !== "") {
        setUserData({ ...userData, city: "", country: value });
      }
    }
    if (name === "state") {
      dispatch(asyncGetCityData(value));
    }
  };

  const handleProfileUpdate = (e) => {
    validation();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("user_id", localStorage.getItem("futr_user_id"));
      formData.append("password", localStorage.getItem("futr_password"));
      formData.append("role", localStorage.getItem("futr_role"));
      formData.append("username", userData.schoolName);
      formData.append("user_type", localStorage.getItem("futr_role"));
      formData.append("mobile_number", userData.mobileNo);
      formData.append("tag_line", userData.tagline);
      formData.append("address", userData.address);
      formData.append("city", userData.city);
      formData.append("state", userData.state);
      formData.append("country", userData.country);
      if (newProfileImg !== "") {
        formData.append("image", newProfileImg);
      }

      dispatch(asyncUpdateProfile(formData, setIsProfileUpdate));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(asyncGetProfileData(navigate));
    }
  }, [isProfileUpdate, isLoggedIn]);

  useEffect(() => {
    if (Object.keys(profileData).length > 0) {
      setUserData({
        schoolName: profileData.username,
        email: profileData.email,
        city: profileData.city || "",
        country: profileData.country || "",
        state: profileData.state || "",
        mobileNo: profileData.mobile_number || "",
        address: profileData.address || "",
        tagline: profileData.tag_line || "",
      });
      if (profileData.country) {
        dispatch(asyncGetStateData(profileData.country));
      }
      if (profileData.state) {
        dispatch(asyncGetCityData(profileData.state));
      }
    }
    dispatch(asyncGetCountryData());
  }, [profileData]);

  return (
    <div className="student-pro-form">
      <h2>School Profile</h2>
      <div className="school_profile_hr"></div>
      <div className="user_profile_input profile_details row">
        <div className="input_all col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>School name</label>
          <input
            type="text"
            placeholder="Enter your school name"
            name="schoolName"
            value={userData.schoolName}
            onChange={handleUserDataChange}
            className={formErrors.error_schoolName ? "form_invalid_br" : ""}
          />
          {formErrors.error_schoolName && (
            <div className="signup_form_error">
              {formErrors.error_schoolName}
            </div>
          )}
        </div>
        <div className="input_all input_pass col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>Email Address</label>
          <input
            type="text"
            placeholder="Enter your email address"
            name="email"
            value={userData.email}
            onChange={handleUserDataChange}
            disabled
            className={formErrors.error_email ? "form_invalid_br" : ""}
          />
          {formErrors.error_email && (
            <div className="signup_form_error">{formErrors.error_email}</div>
          )}
        </div>

        <div className="input_all col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>Tag Line</label>
          <input
            type="text"
            placeholder="Enter your tag line"
            name="tagline"
            value={userData.tagline}
            onChange={handleUserDataChange}
            className={formErrors.error_tagline ? "form_invalid_br" : ""}
          />
          {formErrors.error_tagline && (
            <div className="signup_form_error">{formErrors.error_tagline}</div>
          )}
        </div>
        <div className="input_all col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>Mobile number</label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            name="mobileNo"
            value={userData.mobileNo}
            onChange={handleUserDataChange}
            className={formErrors.error_mobileNo ? "form_invalid_br" : ""}
          />
          {formErrors.error_mobileNo && (
            <div className="signup_form_error">{formErrors.error_mobileNo}</div>
          )}
        </div>

        <div className="input_all input_pass col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>Country</label>
          <select
            placeholder="Enter your Country"
            name="country"
            value={userData.country}
            onChange={handleUserDataChange}
            className={formErrors.error_country ? "form_invalid_br" : ""}
          >
             <option value={""} selected disabled hidden>select country</option>
            {countryList.map((country) => {
              return <option value={country.value}>{country.label}</option>;
            })}
          </select>
          {formErrors.error_country && (
            <div className="signup_form_error">{formErrors.error_country}</div>
          )}
        </div>
        <div className="input_all input_pass col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>State</label>
          <select
            placeholder="Enter your State"
            name="state"
            value={userData.state}
            onChange={handleUserDataChange}
            className={formErrors.error_state ? "form_invalid_br" : ""}
          >
             <option value={""} selected disabled hidden>select state</option>
            {stateList.map((state) => {
              return <option value={state.value}>{state.label}</option>;
            })}
          </select>
          {formErrors.error_state && (
            <div className="signup_form_error">{formErrors.error_state}</div>
          )}
        </div>
        <div className="input_all input_pass col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>City</label>
          <select
            placeholder="Enter your City"
            name="city"
            value={userData.city}
            onChange={handleUserDataChange}
            className={formErrors.error_city ? "form_invalid_br" : ""}
          >
             <option value={""} selected disabled hidden>select city</option>
            {cityList.map((city) => {
              return <option value={city.value}>{city.label}</option>;
            })}
          </select>
          {formErrors.error_city && (
            <div className="signup_form_error">{formErrors.error_city}</div>
          )}
        </div>
        <div className="input_all input_pass col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label> Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            name="address"
            value={userData.address}
            onChange={handleUserDataChange}
            className={formErrors.error_address ? "form_invalid_br" : ""}
          />
          {formErrors.error_address && (
            <div className="signup_form_error">{formErrors.error_address}</div>
          )}
        </div>
        <div className="btn_update mt-3 d-flex justify-content-end w-100">
          <button className="btn_update_main" onClick={handleProfileUpdate}>
            {" "}
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAdminProfile;
