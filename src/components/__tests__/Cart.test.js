import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Drinks (9)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(9);
  const addBtn = screen.getAllByRole("button", { naame: "Add +" });
  fireEvent.click(addBtn[3]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(10); // here 10 is 9 from Restaurant Menu + 1 from cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(9);
  expect(screen.getByText("Cart is Empty. Add your items!")).toBeInTheDocument();
});
