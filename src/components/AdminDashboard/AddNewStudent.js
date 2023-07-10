import React, { useEffect, useState } from "react";
import { handleScrollError, images } from "../../actions/customFn";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncParentListData,
  asyncTeacherListData,
} from "../../actions/ParentTeacherListAction";
import {
  asyncGetCityData,
  asyncGetCountryData,
  asyncGetStateData,
  setCityData,
} from "../../actions/countryAction";

import Flatpickr from "react-flatpickr";
import validator from "validator";
import { asyncCreateNewStudent } from "../../actions/schoolAction";
import moment from "moment/moment";

const AddNewStudent = () => {
  const dispatch = useDispatch();
  const teacherList = useSelector(
    (state) => state.parentTeacherData.teacherList
  );

  const [userData, setUserData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobileNo: "",
    country: "",
    state: "",
    city: "",
    address: "",
    dob: "",
    parent: "",
    teacher: "",
    pincode: "",
    class: "",
    section: "",
    bloodgroup: "",
    gender: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const parentList = useSelector((state) => state.parentTeacherData.parentList);
  const countryList = useSelector((state) => state.countryData.countryData);
  const stateList = useSelector((state) => state.countryData.stateData);
  const cityList = useSelector((state) => state.countryData.cityData);

  const [profileImg, setProfileImg] = useState("");

  const [profileImgPreview, setProfileImgPreview] = useState("");

  const validation = () => {
    if (userData.firstname.trim().length === 0) {
      errors.firstname_err = "Please Provide first name";
    }
    if (userData.lastname.trim().length === 0) {
      errors.lastname_err = "Please Provide last name";
    }
    if (userData.email.length === 0 || !validator.isEmail(userData.email)) {
      errors.email_err = "Please Provide valid email";
    }
    if (userData.address.trim().length === 0) {
      errors.address_err = "Please Provide address";
    }
    if (userData.country.length === 0) {
      errors.country_err = "Please Provide country";
    }
    if (userData.state.length === 0) {
      errors.state_err = "Please Provide state";
    }
    if (userData.city.length === 0) {
      errors.city_err = "Please Provide city";
    }
    if (userData.section.length === 0) {
      errors.section_err = "Please Provide section";
    }
    if (userData.class.length === 0) {
      errors.class_err = "Please Provide class";
    }
    if (
      userData.mobileNo.length === 0 ||
      !validator.isNumeric(userData.mobileNo) ||
      userData.mobileNo.length < 6 ||
      userData.mobileNo.length > 20
    ) {
      errors.mobileNo_err = "Please Provide valid mobile no";
    }
    if (
      userData.pincode.length === 0 ||
      !validator.isNumeric(userData.pincode)
    ) {
      errors.pincode_err = "Please Provide valid pin code";
    }
    if (userData.parent.length === 0) {
      errors.parent_err = "Please Provide parent";
    }
    if (userData.teacher.length === 0) {
      errors.teacher_err = "Please Provide teacher";
    }
    if (userData.dob.length === 0) {
      errors.dob_err = "Please Provide date of birth";
    }
    if (userData.bloodgroup.length === 0) {
      errors.bloodgroup_err = "Please Provide bloodgroup";
    }
    if (userData.gender.length === 0) {
      errors.gender_err = "Please Provide gender";
    }
    if (profileImg === "") {
      errors.image_err = "Please Provide profile image";
    }
    setFormErrors(errors);
  };

  const handleFileChange = (e) => {
    setProfileImg(e.target.files[0]);
    if (e.target.files.length > 0) {
      setProfileImgPreview(URL.createObjectURL(e.target.files[0]));
    }
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
    if (name === "dob") {
      setUserData({ ...userData, [name]: value[0] });
    }
  };

  const initialState = () => {
    setUserData({
      email: "",
      firstname: "",
      lastname: "",
      mobileNo: "",
      country: "",
      state: "",
      city: "",
      address: "",
      dob: "",
      parent: "",
      teacher: "",
      pincode: "",
      class: "",
      section: "",
      bloodgroup: "",
      gender: "",
    });
    setProfileImg("");
  };

  const handleSubmitData = () => {
    validation();
    // handleScrollError(errors, "name");
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("user_id", localStorage.getItem("futr_user_id"));
      formData.append("password", localStorage.getItem("futr_password"));
      formData.append("role", localStorage.getItem("futr_role"));
      formData.append("first_name", userData.firstname);
      formData.append("last_name", userData.lastname);
      formData.append("mobile_number", userData.mobileNo);
      formData.append(
        "date_of_birth",
        moment(userData.dob).format("yyyy-MM-DD h:mm:ss")
      );
      formData.append("email", userData.email);
      formData.append("gender", userData.gender);
      formData.append("blood_group", userData.bloodgroup);
      formData.append("student_class", userData.class);
      formData.append("section", userData.section);
      formData.append("country", userData.country);
      formData.append("city", userData.city);
      formData.append("state", userData.state);
      formData.append("pincode", userData.pincode);
      formData.append("parent_id", userData.parent);
      formData.append("teacher_id", userData.teacher);
      formData.append("address", userData.address);
      formData.append("image", profileImg);
      dispatch(asyncCreateNewStudent(formData, initialState));
    }
  };

  useEffect(() => {
    dispatch(asyncParentListData());
    dispatch(asyncTeacherListData());
    dispatch(asyncGetCountryData());
  }, []);
  return (
    <div className="">
      <div className="student_form_container ">
        <div className="student_form_heading">
          <h2>Add New Student</h2>
          <div className="student_form_hr"></div>
        </div>
        <div className="student_form_for_detail admin_profile_container">
          <div className="student_profile_div">
            <h5>Student Details</h5>
            <label htmlFor="studentprofileimg">
              <img
                src={profileImg !== "" ? profileImgPreview : images["us-2.png"]}
                alt=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <g
                  id="Group_3386"
                  data-name="Group 3386"
                  transform="translate(-380 -222)"
                >
                  <circle
                    id="Ellipse_147"
                    data-name="Ellipse 147"
                    cx="14"
                    cy="14"
                    r="14"
                    transform="translate(380 222)"
                    fill="#8f78fb"
                  />
                  <g
                    id="Group_2833"
                    data-name="Group 2833"
                    transform="translate(332 -154)"
                  >
                    <g id="camera" transform="translate(54 383.714)">
                      <path
                        id="Path_2263"
                        data-name="Path 2263"
                        d="M18.071,16.911a2.286,2.286,0,1,1-2.286-2.286A2.286,2.286,0,0,1,18.071,16.911Z"
                        transform="translate(-7.785 -10.054)"
                        fill="#fff"
                      />
                      <path
                        id="Path_2264"
                        data-name="Path 2264"
                        d="M16.535,7.911H14.428a.519.519,0,0,1-.343-.179L13.158,6.27A.554.554,0,0,0,13.11,6.2a1.594,1.594,0,0,0-1.218-.579H8.606A1.592,1.592,0,0,0,7.389,6.2a.554.554,0,0,0-.049.066L6.414,7.734a.468.468,0,0,1-.308.179V7.627a.571.571,0,0,0-.571-.571H4.677a.571.571,0,0,0-.571.571v.286H3.963A1.716,1.716,0,0,0,2.249,9.628v6.855A1.716,1.716,0,0,0,3.963,18.2H16.535a1.716,1.716,0,0,0,1.714-1.714V9.625a1.716,1.716,0,0,0-1.714-1.714Zm-6.286,8a3.429,3.429,0,1,1,3.429-3.429A3.429,3.429,0,0,1,10.25,15.911Z"
                        transform="translate(-2.249 -5.625)"
                        fill="#fff"
                      />
                    </g>
                    <g
                      id="Rectangle_565"
                      data-name="Rectangle 565"
                      transform="translate(52 380)"
                      fill="none"
                      stroke="#707070"
                      stroke-width="1"
                      opacity="0"
                    >
                      <rect width="20" height="20" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="19"
                        height="19"
                        fill="none"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </label>
            <input
              type="file"
              accept="image/*"
              id="studentprofileimg"
              className="d-none"
              onChange={handleFileChange}
            />
            {formErrors.image_err && (
              <div className="signup_form_error">{formErrors.image_err}</div>
            )}
          </div>
          <div className="row student_form_inputs ">
            <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>First Name</label>
                <input
                  placeholder="Enter first name"
                  value={userData.firstname}
                  className={formErrors.firstname_err ? "form_invalid_br" : ""}
                  name="firstname"
                  onChange={handleUserDataChange}
                />
                {formErrors.firstname_err && (
                  <div className="signup_form_error">
                    {formErrors.firstname_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Last Name </label>
                <input
                  placeholder="Enter last name"
                  value={userData.lastname}
                  className={formErrors.lastname_err ? "form_invalid_br" : ""}
                  name="lastname"
                  onChange={handleUserDataChange}
                />
                {formErrors.lastname_err && (
                  <div className="signup_form_error">
                    {formErrors.lastname_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Mobile No.</label>
                <input
                  placeholder="Enter mobile number"
                  type="number"
                  value={userData.mobileNo}
                  name="mobileNo"
                  className={formErrors.mobileNo_err ? "form_invalid_br" : ""}
                  onChange={handleUserDataChange}
                />
                {formErrors.mobileNo_err && (
                  <div className="signup_form_error">
                    {formErrors.mobileNo_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all calender_theme">
                <label>Date Of Birth</label>
                <Flatpickr
                  id="check_in"
                  value={userData.dob}
                  name="dob"
                  placeholder="select date of birth"
                  className={formErrors.dob_err ? "form_invalid_br" : ""}
                  options={{
                    dateFormat: "d.m.Y",
                  }}
                  onChange={(e) => setUserData({ ...userData, dob: e[0] })}
                />
                {formErrors.dob_err && (
                  <div className="signup_form_error">{formErrors.dob_err}</div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Email Address</label>
                <input
                  placeholder="Enter email address"
                  value={userData.email}
                  name="email"
                  className={formErrors.email_err ? "form_invalid_br" : ""}
                  onChange={handleUserDataChange}
                />
                {formErrors.email_err && (
                  <div className="signup_form_error">
                    {formErrors.email_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Select User Type</label>
                <div className="student_radio_div">
                  <div className="student_form_radiobtn">
                    <input
                      type="radio"
                      name="gender"
                      onChange={handleUserDataChange}
                      value={"male"}
                      checked={userData.gender === "male" ? true : false}
                    />
                    <label>Male</label>
                  </div>
                  <div className="student_form_radiobtn">
                    <input
                      type="radio"
                      name="gender"
                      onChange={handleUserDataChange}
                      value={"female"}
                      checked={userData.gender === "female" ? true : false}
                    />
                    <label>Female</label>
                  </div>
                </div>
                {formErrors.gender_err && (
                  <div className="signup_form_error">
                    {formErrors.gender_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Blood Group</label>
                <input
                  placeholder="Enter blood group"
                  value={userData.bloodgroup}
                  name="bloodgroup"
                  className={formErrors.bloodgroup_err ? "form_invalid_br" : ""}
                  onChange={handleUserDataChange}
                />
                {formErrors.bloodgroup_err && (
                  <div className="signup_form_error">
                    {formErrors.bloodgroup_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Class</label>
                <input
                  placeholder="Enter class"
                  value={userData.class}
                  name="class"
                  className={formErrors.class_err ? "form_invalid_br" : ""}
                  onChange={handleUserDataChange}
                />
                {formErrors.class_err && (
                  <div className="signup_form_error">
                    {formErrors.class_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Section</label>
                <input
                  placeholder="Enter section"
                  value={userData.section}
                  name="section"
                  className={formErrors.section_err ? "form_invalid_br" : ""}
                  onChange={handleUserDataChange}
                />
                {formErrors.section_err && (
                  <div className="signup_form_error">
                    {formErrors.section_err}
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Country</label>
                <select
                  name="country"
                  onChange={handleUserDataChange}
                  className={formErrors.country_err ? "form_invalid_br" : ""}
                >
                  <option value="" selected disabled hidden>
                    select country
                  </option>
                  {countryList.map((country) => {
                    return (
                      <option value={country.value}>{country.label}</option>
                    );
                  })}
                </select>
                {formErrors.country_err && (
                  <div className="signup_form_error">
                    {formErrors.country_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>State</label>
                <select
                  name="state"
                  onChange={handleUserDataChange}
                  className={formErrors.state_err ? "form_invalid_br" : ""}
                >
                  <option value="" selected disabled hidden>
                    select state
                  </option>
                  {stateList.map((country) => {
                    return (
                      <option value={country.value}>{country.label}</option>
                    );
                  })}
                </select>
                {formErrors.state_err && (
                  <div className="signup_form_error">
                    {formErrors.state_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>City</label>
                <select
                  name="city"
                  onChange={handleUserDataChange}
                  className={formErrors.city_err ? "form_invalid_br" : ""}
                >
                  <option value="" selected disabled hidden>
                    select city
                  </option>
                  {cityList.map((country) => {
                    return (
                      <option value={country.value}>{country.label}</option>
                    );
                  })}
                </select>
                {formErrors.city_err && (
                  <div className="signup_form_error">{formErrors.city_err}</div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Pin code</label>
                <input
                  placeholder="Enter pin code"
                  value={userData.pincode}
                  name="pincode"
                  onChange={handleUserDataChange}
                  className={formErrors.pincode_err ? "form_invalid_br" : ""}
                />
                {formErrors.pincode_err && (
                  <div className="signup_form_error">
                    {formErrors.pincode_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Assign Parent</label>
                <select
                  value={userData.parent}
                  name="parent"
                  className={formErrors.parent_err ? "form_invalid_br" : ""}
                  onChange={handleUserDataChange}
                >
                  <option value="" selected disabled hidden>
                    {" "}
                    Select Parents
                  </option>
                  {parentList.map((value, i) => {
                    return (
                      <option value={value.id} key={i}>
                        {value.username}
                      </option>
                    );
                  })}
                </select>
                {formErrors.parent_err && (
                  <div className="signup_form_error">
                    {formErrors.parent_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Assign Teacher</label>
                <div className="student_profile_input_all">
                  <select
                    value={userData.teacher}
                    name="teacher"
                    className={formErrors.teacher_err ? "form_invalid_br" : ""}
                    onChange={handleUserDataChange}
                  >
                    <option value="" selected disabled hidden>
                      {" "}
                      Select Teacher
                    </option>
                    {teacherList.map((value, i) => {
                      return (
                        <option value={value.id} key={i}>
                          {value.username}
                        </option>
                      );
                    })}
                  </select>
                  {formErrors.teacher_err && (
                    <div className="signup_form_error">
                      {formErrors.teacher_err}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-sm-12">
              <div className="student_profile_input_all">
                <label>Address</label>
                <textarea
                  placeholder="Enter full address"
                  rows={4}
                  value={userData.address}
                  onChange={handleUserDataChange}
                  name="address"
                  className={formErrors.address_err ? "form_invalid_br" : ""}
                />
                {formErrors.address_err && (
                  <div className="signup_form_error">
                    {formErrors.address_err}
                  </div>
                )}
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 stdnt_create_btn_div">
              <button className=" btn-add-new-std" onClick={handleSubmitData}>
                Create Student ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewStudent;
