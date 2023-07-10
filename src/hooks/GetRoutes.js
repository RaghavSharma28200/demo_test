import { useSelector } from "react-redux";
import { Dashboard } from "../components";
import {
  CategoryDetails,
  ChapterDescription,
  Chat,
  Exploring,
  History,
  Home,
  Login,
  ParentsDashboard,
  ProgressReport,
  Signup,
  SplashScreen,
  StudentDetails,
  StudentProfile,
  StudentRequest,
  TotalChapter,
  TotalStudent,
} from "../pages";
import AdminDashboard from "../pages/AdminDashboard";
import CreateNewPassword from "../pages/CreateNewPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Subscription from "../pages/Subscription";
import VerifyOtp from "../pages/VerifyOtp";
import WishList from "../pages/WishList";
import TotalSudentRequest from "../pages/TotalSudentRequest";
import Homepage from "../pages/Homepage";
import Chat2 from "../pages/Chat2";

const CheckHomeComponent = () => {
  if (localStorage.getItem("futr_role") === "Parent") {
    return <ParentsDashboard />;
  }
  if (localStorage.getItem("futr_role") === "Teacher") {
    return <TotalStudent />;
  }
  if (localStorage.getItem("futr_role") === "Student") {
    return <Home />;
  }
  if(localStorage.getItem("futr_role") === "School"){
    return <AdminDashboard/>
  }
};


const CheckProfileComponent = ()=>{
  if(localStorage.getItem("futr_role") === "School"){
    return <AdminDashboard/>
  }else{
    return <StudentProfile/>
  }
}

const RouteArr = [
  {
    name: "Login",
    path: "/login",
    key: "login",
    route: "/login",
    page: <Login />,
  },
  {
    name: "Signup",
    path: "/signup",
    key: "signup",
    route: "/signup",
    page: <Signup />,
  },
  {
    name: "SplashScreen",
    path: "/splash-screen",
    key: "splash-screen",
    route: "/splash-screen",
    page: <SplashScreen />,
  },
  {
    name: "Exploring",
    path: "/exploring",
    key: "exploring",
    route: "/exploring",
    page: <Exploring />,
  },
  {
    name: "Chat",
    path: "/chat",
    key: "chat",
    route: "/chat",
    page: <Chat />,
    private: true,
    role: "Common",
  },
  {
    name: "Chat2",
    path: "/chat2",
    key: "chat2",
    route: "/chat2",
    page: <Chat2 />,
    private: true,
    role: "Common",
  },
  {
    name: "StudentProfile",
    path: "/my-profile",
    key: "my-profile",
    route: "/my-profile",
    page: <CheckProfileComponent />,
    private: true,
    role: "Common",
  },
  {
    name: "EditProfile",
    path: "/edit-profile",
    key: "edit-profile",
    route: "/edit-profile",
    page: <StudentProfile />,
    private: true,
    role: "Common",
  },
  {
    name: "ChangePassword",
    path: "/change-password",
    key: "change-password",
    route: "/change-password",
    page: <StudentProfile />,
    private: true,
    role: "Common",
  },
  {
    name: "ChapterDescription",
    path: "/chapter-description/:id",
    key: "chapter-description",
    route: "/chapter-description/:id",
    page: <ChapterDescription />,
    private: true,
    role: "Common",
  },
  {
    name: "WishList",
    path: "/wish-list",
    key: "wish-list",
    route: "/wish-list",
    page: <WishList />,
    private: true,
    role: "Common",
  },
  {
    name: "History",
    path: "/history",
    key: "history",
    route: "/history",
    page: <History />,
    private: true,
    role: "Common",
  },

  {
    name: "CategoryDetails",
    path: "/category-details/:id",
    key: "category-details",
    route: "/category-details/:id",
    page: <CategoryDetails />,
    private: true,
    role: "Common",
  },
  {
    name: "ForgotPassword",
    path: "/forgot-password",
    key: "forgot-password",
    route: "/forgot-password",
    page: <ForgotPassword />,
  },
  {
    name: "CreateNewPassword",
    path: "/create-new-password",
    key: "create-new-password",
    route: "/create-new-password",
    page: <CreateNewPassword />,
  },
  {
    name: "VerifyOtp",
    path: "/verify-otp",
    key: "verify-otp",
    route: "/verify-otp",
    page: <VerifyOtp />,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    key: "dashboard",
    route: "/dashboard",
    page: <CheckHomeComponent />,
    private: true,
    role: "Common",
  },
  // {
  //   name: "school-profile",
  //   path: "/school-profile",
  //   key: "school-profile",
  //   route: "/school-profile",
  //   page: <AdminDashboard />,
  //   private: true,
  //   role: "School",
  // },
  {
    name: "payment-history",
    path: "/payment-history",
    key: "payment-history",
    route: "/payment-history",
    page: <AdminDashboard />,
    private: true,
    role: "School",
  },
  {
    name: "add-student",
    path: "/add-student",
    key: "add-student",
    route: "/add-student",
    page: <AdminDashboard />,
    private: true,
    role: "School",
  },
  {
    name: "change-admin-password",
    path: "/change-admin-password",
    key: "change-admin-password",
    route: "/change-admin-password",
    page: <AdminDashboard />,
    private: true,
    role: "School",
  },
  {
    name: "subscription",
    path: "/subscription",
    key: "subscription",
    route: "/subscription",
    page: <Subscription />,
    private: true,
    role: "School",
  },
  {
    name: "Home",
    path: "/",
    key: "/home",
    route: "/",
    role: "Common",
    page: <Homepage />,
  },
  // {
  //   name: "TotalStudent",
  //   path: "/teacher-dashboard",
  //   key: "teacher-dashboard",
  //   route: "/teacher-dashboard",
  //   page: <TotalStudent />,
  //   private: true,
  //   role: "Teacher",
  // },
  {
    name: "TotalChapter",
    path: "/total-chapter",
    key: "total-chapter",
    route: "/total-chapter",
    page: <TotalChapter />,
    private: true,
    role: "Teacher",
  },
  {
    name: "StudentRequest",
    path: "/student-request",
    key: "student-details",
    route: "/student-request",
    page: <TotalSudentRequest />,
    private: true,
    role: "Teacher",
  },
  {
    name: "StudentRequestCheck",
    path: "/student-request-check/:id",
    key: "student-request-check",
    route: "/student-request-check/:id",
    page: <StudentRequest />,
    private: true,
    role: "Teacher",
  },
  {
    name: "StudentDetails",
    path: "/student-details/:id",
    key: "student-details",
    route: "/student-details/:id",
    page: <StudentDetails />,
    private: true,
    role: "Teacher",
  },
  // {
  //   name: "ParentsDashboard",
  //   path: "/parents-dashboard",
  //   key: "parents-dashboard",
  //   route: "/parents-dashboard",
  //   page: <ParentsDashboard />,
  //   private: true,
  //   role: "Parent",
  // },
  {
    name: "ProgressReport",
    path: "/progress-report/:id",
    key: "progress-report",
    route: "/progress-report/:id",
    page: <ProgressReport />,
    private: true,
    role: "Parent",
  },
];

export default RouteArr;
