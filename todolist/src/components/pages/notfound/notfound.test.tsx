import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import NotFound from "./notfound";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<NotFound history={""} />);
  return component;
};

describe("NotFound component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .text-center on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .notfoundpage on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".notfoundpage"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .page on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .error-details on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".error-details"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .error-actions on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".error-actions"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have variant=primary on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='primary']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
