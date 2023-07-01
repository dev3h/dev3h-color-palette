import fetchApi from "../auth/FetchInterceptor";

export const login = async (data) => {
  try {
    const response = await fetchApi({
      url: "/user/login",
      method: "post",
      headers: {
        "public-request": "true",
      },
      data,
      withCredentials: true,
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const getCurrentLogin = async () => {
  try {
    const response = await fetchApi({
      url: "/user/current",
      method: "get",
      headers: {
        "public-request": "true",
      },
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
export const logout = async () => {
  try {
    const response = await fetchApi({
      url: "/user/logout",
      method: "get",
      headers: {
        "public-request": "true",
      },
      withCredentials: true,
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

// register with save permanent data in cookie
// export const register = async (data) => {
//   try {
//     const response = await fetchApi({
//       url: "/user/register",
//       method: "post",
//       headers: {
//         "public-request": "true",
//       },
//       data,
//       withCredentials: true,
//     });
//     return response;
//   } catch (err) {
//     console.log("err", err);
//     return err;
//   }
// };

export const register = async (data) => {
  try {
    const response = await fetchApi({
      url: "/user/register",
      method: "post",
      headers: {
        "public-request": "true",
      },
      data,
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const finalRegister = async (token) => {
  try {
    const response = await fetchApi({
      url: `/user/finalregister/${token}`,
      method: "put",
      headers: {
        "public-request": "true",
      },
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const forgotPassword = async (data) => {
  try {
    const response = await fetchApi({
      url: "/user/forgotpassword",
      method: "post",
      headers: {
        "public-request": "true",
      },
      data,
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await fetchApi({
      url: "/user/resetpassword",
      method: "put",
      headers: {
        "public-request": "true",
      },
      data,
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
