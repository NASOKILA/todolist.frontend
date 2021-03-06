import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import UserEdit from "./userEdit";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<UserEdit {...props} />);
  return component;
};

describe("UserEdit component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .text-center class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .page class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .usereditpage class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".usereditpage"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [controlId='formBasicFirstName'] class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formBasicFirstName']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [type='text'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='text']"
      );
      expect(wrapper.length).toBe(3);
    });

    test("Should have [placeholder='Enter first name'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter first name']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [placeholder='Enter last name'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter last name']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [placeholder='Enter email'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter email']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [variant='danger'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='danger']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .disabled-submit-buton class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".disabled-submit-buton"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [type='submit'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='submit']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
