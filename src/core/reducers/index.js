import { combineReducers } from "redux";
import user from "./userReducer";
import auth from "./authReducer";
import repository from "./repositoryReducer";
import repositories from "./repositoriesReducer";

const reducer = combineReducers({
  user,
  auth,
  repository,
  repositories
});

export default reducer;
