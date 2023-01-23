/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import {
  fireEvent,
  queryByAttribute,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Movie from "../pages/movie";

jest.mock("../services/movie");

const waitForComponentToPaint = async wrapper => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();
  });
};

describe("Movie page test cases", () => {
  it("Test fetchAllMovies function", async () => {
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const image = utils.container.querySelectorAll("img");
      expect(image).toHaveLength(19);
      const bookNowButton = screen.getAllByTestId("Book Now");
      expect(bookNowButton).toHaveLength(12);
    });
  });

  it("Test handleBookNowClick function", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });
    expect(utils.container.querySelectorAll("img")).toHaveLength(0);
    expect(screen.queryAllByTestId("Book Now")).toHaveLength(0);
    const dateText = screen.getAllByText("Choose Date");
    expect(dateText).toBeTruthy();
    const theatreText = screen.getAllByText("Choose Theater");
    expect(theatreText).toBeTruthy();
    const seatTxt = screen.getAllByText("Select Seat");
    expect(seatTxt).toBeTruthy();
    const nextButton = getById(utils.container, "Next");
    expect(nextButton).toBeInTheDocument();
    const backButton = getById(utils.container, "Back");
    expect(backButton).toBeInTheDocument();
  });

  it("Test fetchAllTheatre function", async () => {
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });
    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");
    autocomplete[1].focus();
    fireEvent.change(input[1], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
  });

  it("Test handleDateChange function", async () => {
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });
    const datePicker = screen.getByTestId("DateRangeIcon");
    fireEvent.click(datePicker);
    screen.getByRole("dialog");
    fireEvent.click(screen.getByText(`${new Date().getDate()}`));
    const dateValue = screen.getByTestId("date-picker");
    const date = new Date().toLocaleDateString("default", {
      day: "2-digit",
    });
    const month = new Date().toLocaleDateString("default", {
      month: "2-digit",
    });
    const year = new Date().getFullYear();
    const expectedValue = `${month}/${date}/${year}`;
    expect(dateValue.value).toEqual(expectedValue);
  });

  it("Test handleTimeChange function", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });

    const dropdown = getById(utils.container, "Show Time");
    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");
    autocomplete[0].focus();
    fireEvent.change(input[0], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[0], { key: "Enter" });
    expect(dropdown.value).toEqual("10:00 AM");
  });

  it("Test handleTheatreChange function", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });

    const dropdown = getById(utils.container, "Choose Theater");
    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");
    autocomplete[1].focus();
    fireEvent.change(input[1], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[1], { key: "Enter" });
    expect(dropdown.value).toEqual("GOPALAN CINEMAS");
  });

  it("Test handleSeatChange function", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });

    const dropdown = getById(utils.container, "Select Seat");
    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");
    autocomplete[2].focus();
    fireEvent.change(input[2], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[2], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[2], { key: "Enter" });
    expect(dropdown.value).toEqual("1");
  });

  it("Test handleNextClick function", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });

    const datePicker = screen.getByTestId("DateRangeIcon");
    fireEvent.click(datePicker);
    screen.getByRole("dialog");
    fireEvent.click(screen.getByText(`${new Date().getDate()}`));

    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");

    autocomplete[0].focus();
    fireEvent.change(input[0], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[0], { key: "Enter" });

    autocomplete[1].focus();
    fireEvent.change(input[1], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[1], { key: "Enter" });

    autocomplete[2].focus();
    fireEvent.change(input[2], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[2], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[2], { key: "Enter" });

    const nextButton = getById(utils.container, "Next");
    fireEvent.click(nextButton);

    expect(screen.getByText("Invoice")).toBeInTheDocument();
    expect(screen.getByText("Movie Name :")).toBeInTheDocument();
    expect(screen.getByText("SCREAM 5")).toBeInTheDocument();
    expect(screen.getByText("No. of Seats :")).toBeInTheDocument();
    expect(screen.getByText("Apply Promo Code")).toBeInTheDocument();
    expect(screen.getByText("Total Payable")).toBeInTheDocument();
    expect(screen.getByText("₹ 250 /-")).toBeInTheDocument();
    expect(screen.getAllByText("Apply")).toBeTruthy();
  });

  it("Test handleBackClick function", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });
    const backButton = getById(utils.container, "Back");
    fireEvent.click(backButton);

    expect(screen.queryAllByText("Choose Date")).toHaveLength(0);
    expect(screen.queryAllByText("Choose Theater")).toHaveLength(0);
    expect(screen.queryAllByText("Select Seat")).toHaveLength(0);
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
    expect(screen.queryByText("Back")).not.toBeInTheDocument();
    expect(utils.container.querySelectorAll("img")).toHaveLength(19);
    expect(screen.queryAllByTestId("Book Now")).toHaveLength(12);
  });

  it("Test handleModalClose function", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });

    const datePicker = screen.getByTestId("DateRangeIcon");
    fireEvent.click(datePicker);
    screen.getByRole("dialog");
    fireEvent.click(screen.getByText(`${new Date().getDate()}`));

    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");

    autocomplete[0].focus();
    fireEvent.change(input[0], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[0], { key: "Enter" });

    autocomplete[1].focus();
    fireEvent.change(input[1], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[1], { key: "Enter" });

    autocomplete[2].focus();
    fireEvent.change(input[2], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[2], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[2], { key: "Enter" });

    const nextButton = getById(utils.container, "Next");
    fireEvent.click(nextButton);

    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(screen.queryByText("Invoice")).not.toBeInTheDocument();
    expect(screen.queryByText("Movie Name :")).not.toBeInTheDocument();
    expect(screen.queryByText("SCREAM 5")).not.toBeInTheDocument();
    expect(screen.queryByText("No. of Seats :")).not.toBeInTheDocument();
    expect(screen.queryByText("Apply Promo Code")).not.toBeInTheDocument();
    expect(screen.queryByText("Total Payable")).not.toBeInTheDocument();
    expect(screen.queryByText("₹ 250 /-")).not.toBeInTheDocument();
    expect(screen.queryAllByText("Apply")).toHaveLength(0);
  });

  it("Test handleApplyCoupon function for 10%", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[1]);
    });

    const datePicker = screen.getByTestId("DateRangeIcon");
    fireEvent.click(datePicker);
    screen.getByRole("dialog");
    fireEvent.click(screen.getByText(`${new Date().getDate()}`));

    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");

    autocomplete[0].focus();
    fireEvent.change(input[0], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[0], { key: "Enter" });

    autocomplete[1].focus();
    fireEvent.change(input[1], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[1], { key: "Enter" });

    autocomplete[2].focus();
    fireEvent.change(input[2], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[2], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[2], { key: "Enter" });

    const nextButton = getById(utils.container, "Next");
    fireEvent.click(nextButton);

    const applyButton = screen.getAllByText("Apply");
    fireEvent.click(applyButton[0]);

    expect(screen.getByText("₹ 900 /-")).toBeInTheDocument();
  });

  it("Test handleApplyCoupon function for 15%", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[2]);
    });

    const datePicker = screen.getByTestId("DateRangeIcon");
    fireEvent.click(datePicker);
    screen.getByRole("dialog");
    fireEvent.click(screen.getByText(`${new Date().getDate()}`));

    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");

    autocomplete[0].focus();
    fireEvent.change(input[0], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[0], { key: "Enter" });

    autocomplete[1].focus();
    fireEvent.change(input[1], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[1], { key: "Enter" });

    autocomplete[2].focus();
    fireEvent.change(input[2], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[2], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[2], { key: "Enter" });

    const nextButton = getById(utils.container, "Next");
    fireEvent.click(nextButton);

    const applyButton = screen.getAllByText("Apply");
    fireEvent.click(applyButton[1]);

    expect(screen.getByText("₹ 2040 /-")).toBeInTheDocument();
  });

  it("Test handleProceedClick  function for 15%", async () => {
    const getById = queryByAttribute.bind(null, "id");
    const utils = render(<Movie />);
    waitForComponentToPaint(utils);
    await waitFor(() => {
      const bookNowButton = screen.getAllByTestId("Book Now");
      fireEvent.click(bookNowButton[0]);
    });

    const datePicker = screen.getByTestId("DateRangeIcon");
    fireEvent.click(datePicker);
    screen.getByRole("dialog");
    fireEvent.click(screen.getByText(`${new Date().getDate()}`));

    const autocomplete = screen.getAllByTestId("ArrowDropDownIcon");
    const input = screen.getAllByRole("combobox");

    autocomplete[0].focus();
    fireEvent.change(input[0], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[0], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[0], { key: "Enter" });

    autocomplete[1].focus();
    fireEvent.change(input[1], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[1], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[1], { key: "Enter" });

    autocomplete[2].focus();
    fireEvent.change(input[2], { target: { value: "a" } });
    expect(screen.getAllByRole("option")).toBeTruthy();
    fireEvent.keyDown(autocomplete[2], { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete[2], { key: "Enter" });

    const nextButton = getById(utils.container, "Next");
    fireEvent.click(nextButton);

    const proceedButton = screen.getByText("Proceed");
    fireEvent.click(proceedButton);

    await waitFor(() => {
      expect(screen.queryByText("Invoice")).not.toBeInTheDocument();
      expect(screen.queryByText("Movie Name :")).not.toBeInTheDocument();
      expect(screen.queryByText("SCREAM 5")).not.toBeInTheDocument();
      expect(screen.queryByText("No. of Seats :")).not.toBeInTheDocument();
      expect(screen.queryByText("Apply Promo Code")).not.toBeInTheDocument();
      expect(screen.queryByText("Total Payable")).not.toBeInTheDocument();
      expect(screen.queryByText("₹ 250 /-")).not.toBeInTheDocument();
      expect(screen.queryAllByText("Apply")).toHaveLength(0);
      expect(utils.container.querySelectorAll("img")).toHaveLength(19);
      expect(screen.queryAllByTestId("Book Now")).toHaveLength(12);
    });
  });
});
