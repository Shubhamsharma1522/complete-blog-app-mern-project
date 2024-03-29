export const getAccessToken = () => {
  return sessionStorage.getItem("accessToken");
};

//add ... with large words
export const addElipsis = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
};

export const getType = (value, body) => {
  if (value.params) {
    return { params: body };
  } else if (value.query) {
    //typeof data return krega kisi element ka
    if (typeof body === "object") {
      return { query: body._id };
    } else {
      return { query: body };
    }
  }
  return {};
};

export const BUTTON_FLAGS = {
  SIGN_UP: "SIGN_UP",
  LOG_IN: "LOG_IN",
  PUBLISH_POST: "PUBLISH_POST",
  UPDATE_POST: "UPDATE_POST",
  LOAD_POST: "LOAD_POST",
};
