import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import Login from "./login";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<Login history={""} children={""} />);
  return component;
};

describe("login component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .page class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .loginpage class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".loginpage");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .text-center class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have controlId=formBasicEmail on an existing form.group", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formBasicEmail']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have placeholder=Enter email on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter email']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .text-muted email on an existing form.text", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".text-muted");
      expect(wrapper.length).toBe(1);
    });

    test("Should have variant=danger on an existing button", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='danger']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have controlId=formBasicPassword on an existing form.group", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formBasicPassword']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have type=password on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='password']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have placeholder=Password on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Password']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
