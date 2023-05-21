import axios from "axios";
import swal from "sweetalert";

export const loginApp = (data, navigate) => async (dispatch) => {
  try {
    const result = await axios.post(`https://reqres.in/api/login`, data);
    const user = result.data;
    console.log("token = ", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    console.log("payload");
    swal({
      title: "Good job!",
      icon: "success",
    }).then(() => {
      navigate("/profile");
    });
  } catch (e) {
    console.log("Login fail");
    console.log(e);
  }
};
