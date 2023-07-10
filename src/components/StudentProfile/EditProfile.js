import React, { useEffect, useState } from "react";
import { images } from "../../actions/customFn";
import { NavLink, useNavigate } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncGetCityData,
  asyncGetCountryData,
  asyncGetStateData,
  setCityData,
} from "../../actions/countryAction";
import {
  asyncGetProfileData,
  asyncUpdateProfile,
} from "../../actions/profileAction";

const EditProfile = ({ profileObj }) => {
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    mobileNo: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });

  const [profileImg, setProfileImg] = useState("");

  const [newprofileImg, setnewProfileImg] = useState("");

  const countryList = useSelector((state) => state.countryData.countryData);
  const stateList = useSelector((state) => state.countryData.stateData);
  const cityList = useSelector((state) => state.countryData.cityData);

  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  const isLoggedIn = useSelector((state) => state.login);

  const errors = {};
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validation = () => {

    if (userData.email.length === 0 || !validator.isEmail(userData.email)) {
      errors.error_email = "Please Provide valid email";
    }
    if (userData.userName.length === 0) {
      errors.error_userName = "Please Provide userName";
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

  const handleFileChange = (e) => {
    setnewProfileImg(e.target.files[0]);
    if (e.target.files.length > 0) {
      setProfileImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleProfileUpdate = (e) => {
    validation();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("user_id", localStorage.getItem("futr_user_id"));
      formData.append("password", localStorage.getItem("futr_password"));
      formData.append("role", localStorage.getItem("futr_role"));
      formData.append("username", userData.userName);
      formData.append("user_type", profileObj.user_type);
      formData.append("city", userData.city);
      formData.append("country", userData.country);
      formData.append("address", userData.address);
      formData.append("state", userData.state);
      formData.append("mobile_number", userData.mobileNo);
      if (newprofileImg !== "") {
        formData.append("image", newprofileImg);
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
    if (profileObj) {
      setUserData({
        userName: profileObj.username,
        email: profileObj.email,
        city: profileObj.city || "",
        country: profileObj.country || "",
        state: profileObj.state || "",
        mobileNo: profileObj.mobile_number || "",
        address: profileObj.address || "",
      });
      setProfileImg(profileObj.image);
      if (profileObj.country) {
        dispatch(asyncGetStateData(profileObj.country));
      }
      if (profileObj.state) {
        dispatch(asyncGetCityData(profileObj.state));
      }
    }
    dispatch(asyncGetCountryData());
  }, [profileObj]);

  return (
    <div className="student-pro-form">
      <h2>My Profile</h2>
      <div className="user_profile_input profile_details row">
        <div className="input_all col-12 profile_edit_img_div">
          <label htmlFor="profileImg" className="profile_edit_img">
            <img src={profileImg} alt="" />
          </label>
          <input
            type="file"
            className="d-none"
            id="profileImg"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        {/* col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 */}
        <div className="input_all col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter your user name"
            name="userName"
            value={userData.userName}
            onChange={handleUserDataChange}
            className={formErrors.error_userName ? "form_invalid_br" : ""}
          />
          {formErrors.error_userName && (
            <div className="signup_form_error">{formErrors.error_userName}</div>
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
          > <option value={""} selected disabled hidden>select state</option>
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
        <div className="input_all input_pass col-12">
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

export default EditProfile;
