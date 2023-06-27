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
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

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
