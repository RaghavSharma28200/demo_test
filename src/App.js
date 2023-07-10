import React, { createContext, useEffect, useState } from "react";
import "./assets/vendor/css/bootstrap.min.css";
import "./assets/vendor/css/style.css";
import "./assets/vendor/css/responsive.css";
import "./assets/vendor/dist/assets/owl.carousel.css";
import "./assets/vendor/dist/assets/owl.theme.default.min.css";
import { GetRoutes } from "./actions/customFn";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import RouteArr from "./hooks/GetRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "./actions/loginAction";
import { asyncGetProfileData } from "./actions/profileAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import LoadingOverlay from "react-loading-overlay";
import Loader from "./components/Loader";
import "flatpickr/dist/themes/material_blue.css";
import { asyncHomeData } from "./actions/homeAction";
export const AppContext = createContext();
function App() {
  // Top To Scroll
  const routePath = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = routePath;

  const [Loading, setLoading] = useState(true);

  const isLoggedIn = useSelector((state) => state.login);
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(asyncGetProfileData(navigate));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(asyncHomeData());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("futr_password")) {
      dispatch(setLogin());
    } else {
      dispatch(setLogout());
    }
  }, []);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pathname]);

  return (
    <AppContext.Provider value={{ Loading, setLoading }}>
      <div className="App">
        <Toaster />
        <Routes>{GetRoutes(RouteArr)}</Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
