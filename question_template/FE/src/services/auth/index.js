import serviceUtil from "..";

const regiterUser = payload => {
  return serviceUtil
    .post("/user/register", payload)
    .then(res => {
      const data = res && res.data;
      return { data };
    })
    .catch(err => {
      const errRes = (err && err.response && err.response.data) || {
        message: "ERROR",
      };
      return { errRes };
    });
};

const authenticate = payload => {
  return serviceUtil
    .post("/authenticate", payload)
    .then(res => {
      const data = res && res.data;
      return { data };
    })
    .catch(err => {
      const errRes = (err && err.response && err.response.data) || {
        message: "ERROR",
      };
      return { errRes };
    });
};

export { regiterUser, authenticate };
