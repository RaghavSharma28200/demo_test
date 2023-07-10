import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import countryReducer from "./countryReducer";
import categoryReducer from "./categoryReducer";
import studentRequestReducer from "./studentRequestReducer";
import parentTeacherReducer from "./parentTeacherReducer";
import homeReducer from "./homeReducer";

export const reducers = combineReducers({
  login: loginReducer,
  profileData: profileReducer,
  countryData: countryReducer,
  categoryData: categoryReducer,
  studentRequestData: studentRequestReducer,
  parentTeacherData: parentTeacherReducer,
  homeData: homeReducer,
});
