const getAllMovies = async () => {
  const data = await Promise.resolve({
    data: [
      {
        _id: "63c93922c31c1f38757dcb82",
        movieId: "61aac3d3-2031-447c-88f6-b0c664f7407a",
        movieName: "SCREAM 5",
        moviePoster:
          "https://assets.mycast.io/characters/gale-weathers-6483789-normal.jpg?1651528976",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:35:46.012Z",
        updatedAt: "2023-01-19T12:35:46.012Z",
        __v: 0,
      },
      {
        _id: "63c93934c31c1f38757dcb84",
        movieId: "24e5546d-8272-4148-bdcc-c720f021a1a5",
        movieName: "JOKER",
        moviePoster:
          "https://m.media-amazon.com/images/I/51tsV0-cUHL._SX300_SY300_QL70_FMwebp_.jpg",
        ticketPrice: "1000",
        createdAt: "2023-01-19T12:36:04.521Z",
        updatedAt: "2023-01-19T12:36:04.521Z",
        __v: 0,
      },
      {
        _id: "63c9394cc31c1f38757dcb86",
        movieId: "86552f4d-530d-4692-bbfa-0c22569eacdb",
        movieName: "LORD OF RINGS",
        moviePoster:
          "https://m.media-amazon.com/images/I/51uK4elIrdL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
        ticketPrice: "2400",
        createdAt: "2023-01-19T12:36:28.565Z",
        updatedAt: "2023-01-19T12:36:28.565Z",
        __v: 0,
      },
      {
        _id: "63c93961c31c1f38757dcb88",
        movieId: "41ba21d1-4162-4dc0-be9f-41ffccc9de69",
        movieName: "BATMAN",
        moviePoster:
          "https://m.media-amazon.com/images/M/MV5BYzVhOThjZTgtNzFjNi00ZjdmLTljNDctODIzZDc3MjI2NWFkXkEyXkFqcGdeQXVyMTM4NTI3OTI@._V1_FMjpg_UX848_.jpg",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:36:49.250Z",
        updatedAt: "2023-01-19T12:36:49.250Z",
        __v: 0,
      },
      {
        _id: "63c93972c31c1f38757dcb8a",
        movieId: "67bf59cd-e009-4324-89bb-0323c8b8d731",
        movieName: "HOLLYWOOD HOMICIDE",
        moviePoster:
          "https://www.themoviedb.org/t/p/w220_and_h330_face/Am7AhZYG7HLksY5E35oaEJ3Desz.jpg",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:37:06.222Z",
        updatedAt: "2023-01-19T12:37:06.222Z",
        __v: 0,
      },
      {
        _id: "63c93982c31c1f38757dcb8c",
        movieId: "b2d55a17-41b2-4c85-82ab-7a4c4d2190b5",
        movieName: "UNDERWORLD EVELUTION",
        moviePoster:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmrD7wR_iBmLAgYP0yp4SrURoOkCsDvSO2X-aBk6gq6bYA4HVm",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:37:22.201Z",
        updatedAt: "2023-01-19T12:37:22.201Z",
        __v: 0,
      },
      {
        _id: "63c93991c31c1f38757dcb8e",
        movieId: "daf539ae-c5ca-4acb-8b0d-30e9eff8c1dc",
        movieName: "MR. HABIB OK",
        moviePoster:
          "https://cdnb.artstation.com/p/assets/images/images/013/613/295/medium/habib-ok-01.jpg?1540401177",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:37:37.920Z",
        updatedAt: "2023-01-19T12:37:37.920Z",
        __v: 0,
      },
      {
        _id: "63c9399fc31c1f38757dcb90",
        movieId: "2c63f22d-17d2-42eb-98d5-29c406ea3ab2",
        movieName: "HITMAN",
        moviePoster:
          "https://m.media-amazon.com/images/I/51t251e7pXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:37:51.139Z",
        updatedAt: "2023-01-19T12:37:51.139Z",
        __v: 0,
      },
      {
        _id: "63c939acc31c1f38757dcb92",
        movieId: "8fc2a2ea-55cf-4cbd-b305-5ed92a9ed914",
        movieName: "NO TIME TO DIE",
        moviePoster:
          "https://alternativemovieposters.com/wp-content/uploads/2021/10/ClaireCurtis_NoTimeToDie.jpg",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:38:04.896Z",
        updatedAt: "2023-01-19T12:38:04.896Z",
        __v: 0,
      },
      {
        _id: "63c939bac31c1f38757dcb94",
        movieId: "e0da5244-bd56-4153-bed7-fc3d4375f9cd",
        movieName: "BLACK ADAMS",
        moviePoster:
          "https://i.etsystatic.com/34708433/r/il/461428/4206322645/il_794xN.4206322645_5j55.jpg",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:38:18.367Z",
        updatedAt: "2023-01-19T12:38:18.367Z",
        __v: 0,
      },
      {
        _id: "63c939c8c31c1f38757dcb96",
        movieId: "40543e18-b81f-4f2f-8d79-94622cbc04a1",
        movieName: "2012",
        moviePoster:
          "https://www.steelbookbluray.com/wp-content/uploads/2017/06/2012_1-1.jpg",
        ticketPrice: "250",
        createdAt: "2023-01-19T12:38:32.221Z",
        updatedAt: "2023-01-19T12:38:32.221Z",
        __v: 0,
      },
      {
        _id: "63c939d5c31c1f38757dcb98",
        movieId: "df1fbd89-1e37-48e5-ba7f-fc8604c4828b",
        movieName: "WONDER WOMAN",
        moviePoster:
          "https://m.media-amazon.com/images/I/51I2LM1uwPL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
        ticketPrice: "600",
        createdAt: "2023-01-19T12:38:45.282Z",
        updatedAt: "2023-01-19T12:38:45.282Z",
        __v: 0,
      },
    ],
  });
  return { data };
};

const getAllTheatre = async () => {
  const data = await Promise.resolve({
    data: [
      {
        _id: "63c93e218a854ad9a75b7436",
        theatreId: "b155ca0f-5eeb-4612-9828-70dc209f2b8a",
        theatreName: "GOPALAN CINEMAS",
        createdAt: "2023-01-19T12:57:05.319Z",
        updatedAt: "2023-01-19T12:57:05.319Z",
        __v: 0,
        seatCapacity: "30",
      },
      {
        _id: "63c93e288a854ad9a75b7438",
        theatreId: "64b39567-51bf-4ec6-a311-273359bf5ac8",
        theatreName: "INOX",
        createdAt: "2023-01-19T12:57:12.409Z",
        updatedAt: "2023-01-19T12:57:12.409Z",
        __v: 0,
        seatCapacity: "30",
      },
      {
        _id: "63c93e2e8a854ad9a75b743a",
        theatreId: "9fb673ec-82a4-47a9-a11a-4e6c082f230c",
        theatreName: "PVR",
        createdAt: "2023-01-19T12:57:18.666Z",
        updatedAt: "2023-01-19T12:57:18.666Z",
        __v: 0,
        seatCapacity: "20",
      },
      {
        _id: "63c93e3f8a854ad9a75b743c",
        theatreId: "ec12f937-83b4-4a9c-9b00-79befc6d0a42",
        theatreName: "CINEPOLIS",
        createdAt: "2023-01-19T12:57:35.427Z",
        updatedAt: "2023-01-19T12:57:35.427Z",
        __v: 0,
        seatCapacity: "2",
      },
    ],
  });
  return { data };
};

const bookMovie = async () => {
  const data = await Promise.resolve({
    message: "Ticket booked successfully.",
  });
  return { data };
};

export { getAllMovies, getAllTheatre, bookMovie };
