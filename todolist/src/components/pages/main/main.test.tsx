import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import Main from "./main";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<Main />);
  return component;
};

describe("Main component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .page class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .mainpage class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".mainpage");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .text-center class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have variant=primary on an existing button", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='primary']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
