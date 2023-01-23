import serviceUtil from "..";

const getAllMovies = () => {
  return serviceUtil
    .get("/movies/get/all")
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

const getAllTheatre = () => {
  return serviceUtil
    .get("/theatre/get/all")
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

const bookMovie = payload => {
  return serviceUtil
    .post("/movie/book", payload)
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

export { getAllMovies, getAllTheatre, bookMovie };
