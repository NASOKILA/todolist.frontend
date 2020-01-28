import React from "react";
import { shallow } from "enzyme"; //Shallow rendering of our component
import App from "./App";

describe("App component", () => {
  test("renders whitout errors", () => {
    const component = shallow(<App />);
  });
});
