const initialState = {
  user: {
    password: "",
    email: "",
  },
};

const userReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      isLoading: false,
    };
  } else if (action.type === "GET_PROFILE") {
    return {
      ...state,
      user: action.payload,
    };
  } else {
    return state;
  }
};
export default userReducer;
