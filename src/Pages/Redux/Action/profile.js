import axios from "axios";
import swal from "sweetalert";

export const profileApp = (data, navigate) => async (dispatch) => {
  try {
    const result = await axios.get(`https://reqres.in/api/login`, data);
    const user = result.data.data;

    dispatch({ type: "GET_PROFILE", payload: user });
    console.log(user);
  } catch (e) {
    console.log("fail to load data profile");
  }
};
