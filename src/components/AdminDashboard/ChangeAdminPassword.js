import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { asyncChangePassword } from '../../actions/profileAction';
import { useNavigate } from 'react-router-dom';

const ChangeAdminPassword = () => {
    const [passwordChangeData, setPasswordChangeData] = useState({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
    
      const errors = {};
    
      const [formError, setFormError] = useState({})

      const dispatch = useDispatch()
      const navigate= useNavigate()
    
      const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordChangeData({ ...passwordChangeData, [name]: value });
      };
    
      const validation = () => {
        if (passwordChangeData.old_password.length === 0) {
          errors.error_old_password = "Please Provide Old Password";
        }
        if (passwordChangeData.new_password.length === 0) {
          errors.error_new_password = "Please Provide new Password";
        }
        if (passwordChangeData.confirm_password.length === 0) {
          errors.error_confirm_password = "Please Provide Confirm Password";
        }
        if (
          passwordChangeData.new_password !== passwordChangeData.confirm_password &&
          passwordChangeData.new_password.length > 0 &&
          passwordChangeData.confirm_password.length > 0
        ) {
          errors.error_confirm_password = "Confirm password does not match";
        }
    
        if (
          passwordChangeData.new_password.length < 6 &&
          passwordChangeData.new_password.length > 0
        ) {
          errors.error_new_password = "Please Provide six digit new Password";
        }
        if (
          passwordChangeData.confirm_password.length < 6 &&
          passwordChangeData.confirm_password.length > 0
        ) {
          errors.error_confirm_password =
            "Please Provide six digit Confirm Password";
        }
        setFormError(errors);
      };
    
      const initialState = () => {
        setPasswordChangeData({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
      };
      const handlePasswordUpdate = (e) => {
        e.preventDefault();
        validation();
        if (Object.keys(errors).length === 0) {
        const data = {
                user_id: localStorage.getItem("futr_user_id"),
                password: localStorage.getItem("futr_password"),
                role: localStorage.getItem("futr_role"),
                old_password: passwordChangeData.old_password,
                new_password: passwordChangeData.new_password,
                confirm_password: passwordChangeData.confirm_password,
              };
        
              dispatch(asyncChangePassword(data, navigate, initialState));
            }
         ;
        }
      
    
      return (
        <div className="student-pro-form">
          <h2>Change Password</h2>
          <div className="school_profile_hr"></div>
          <div className="user_profile_input change-pass-wordfrm">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 col-12">
                <div className="input_all">
                  <label>Old Password</label>
                  <input
                    type="password"
                    placeholder="Enter your old password"
                    name="old_password"
                    value={passwordChangeData.old_password}
                    onChange={handlePasswordChange}
                    className={
                      formError.error_old_password ? "form_invalid_br" : ""
                    }
                  />
                </div>
                {formError.error_old_password && (
                  <div className="signup_form_error">
                    {formError.error_old_password}
                  </div>
                )}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 col-12"></div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 col-12">
                <div className="input_all change_pas_mt">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    name="new_password"
                    value={passwordChangeData.new_password}
                    onChange={handlePasswordChange}
                    className={
                      formError.error_new_password ? "form_invalid_br" : ""
                    }
                  />
                </div>
                {formError.error_new_password && (
                  <div className="signup_form_error">
                    {formError.error_new_password}
                  </div>
                )}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 col-12">
                <div className="input_all input_pass change_pas_mt">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Enter your confirm password"
                    name="confirm_password"
                    value={passwordChangeData.confirm_password}
                    onChange={handlePasswordChange}
                    className={
                      formError.error_confirm_password ? "form_invalid_br" : ""
                    }
                  />
                </div>
                {formError.error_confirm_password && (
                  <div className="signup_form_error">
                    {formError.error_confirm_password}
                  </div>
                )}
              </div>
              <div className="col-12 mt-5">
                <div className="btn_update">
                  <button
                    className="btn_update_main"
                    onClick={handlePasswordUpdate}
                  >
                    {" "}
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ChangeAdminPassword