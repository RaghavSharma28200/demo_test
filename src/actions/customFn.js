import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";

const importAll = (r) => {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(require.context("../assets/images", false));

const checkLogin = () => {
  var status = false;
  if (
    localStorage.getItem("futr_user_id") != null &&
    localStorage.getItem("futr_password") != null
  ) {
    status = true;
  }
  return status;
};

//Get Routs
const GetRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          element={
            route.private === true ? (
              checkLogin() === true ? (
                route.role === localStorage.getItem("futr_role") ||
                route.role === "Common" ? (
                  route.page
                ) : (
                  <Navigate to="/login" />
                )
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              route.page
            )
          }
          key={route.key}
        />
      );
    }

    return null;
  });

function handleScrollError(errors, type = "") {
  const errorsvalues = Object.keys(errors);
  if (errorsvalues.length > 0) {
    let firstErrorElement = "";
    if (type === "name") {
      firstErrorElement = document.getElementsByName(errorsvalues[0])[0];
    } else {
      firstErrorElement = document.getElementById(errorsvalues[0]);
    }
    if (firstErrorElement !== null && firstErrorElement !== "") {
      firstErrorElement.scrollIntoView({ behavior: `smooth`, block: "center" });
    }
  }
}

const scrollToId = (type, target) => {
  const list = document.querySelectorAll(".active_link");
  if (list) {
    list.forEach((element) => {
      element.classList.remove("active_link");
    });
  }
  if (target) {
    target.classList.add("active_link");
  }
  const element = document.getElementById(type);
  if (element) {
    element.scrollIntoView({ behavior: `smooth`, block: "center" });
  }
};

const list_dash = [
  {
    image: images["dash_1.png"],
    title: "Total Student",
    conut: "30",
    user: images["student.png"],
    path: "/",
  },
  {
    image: images["dash_2.png"],
    title: "Total Chapter",
    conut: "24",
    user: images["chapter.png"],
    path: "/total-chapter",
  },
  {
    image: images["dash_3.png"],
    title: "Student Request",
    conut: "16",
    user: images["chat.png"],
    path: "/student-request",
  },
];

const notifySuccess = (notification) => toast.success(notification);

const notifyDanger = (notification) => toast.error(notification);

function useResponsiveFontSize() {
  const getFontSize = () => (window.innerWidth < 450 ? "16px" : "18px");
  const [fontSize, setFontSize] = useState(getFontSize);

  useEffect(() => {
    const onResize = () => {
      setFontSize(getFontSize());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return fontSize;
}

export {
  images,
  GetRoutes,
  notifySuccess,
  notifyDanger,
  list_dash,
  handleScrollError,
  scrollToId,
  useResponsiveFontSize,
};
