import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import Register from "./register";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<Register history={""} children={""} />);
  return component;
};

describe("register component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .page class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .registerpage class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".registerpage"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .text-center class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have controlId=formBasicFirstName on an existing form.group", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formBasicFirstName']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have placeholder=Enter first name on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter first name']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have type=text email on an existing form.text", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='text']"
      );
      expect(wrapper.length).toBe(2);
    });

    test("Should have controlId=formBasicLastName on an existing form.group", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formBasicLastName']"
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

    test("Should have .text-muted on an existing form.group", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".text-muted");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .errorList on an existing form.group", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".errorList");
      expect(wrapper.length).toBe(3);
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
      expect(wrapper.length).toBe(2);
    });

    test("Should have placeholder=Password on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Password']"
      );
      expect(wrapper.length).toBe(1);
    });
  });

  test("Should have controlId=formBasicConfirmPassword on an existing form.group", () => {
    const wrapper: Array<any> = findByTestAttribute(
      component,
      "[controlId='formBasicConfirmPassword']"
    );
    expect(wrapper.length).toBe(1);
  });

  test("Should have variant=danger on an existing button", () => {
    const wrapper: Array<any> = findByTestAttribute(
      component,
      "[variant='danger']"
    );
    expect(wrapper.length).toBe(1);
  });

  test("Should have type=submit on an existing button", () => {
    const wrapper: Array<any> = findByTestAttribute(
      component,
      "[type='submit']"
    );
    expect(wrapper.length).toBe(1);
  });
  test("Should have .disabled-submit-buton on an existing button", () => {
    const wrapper: Array<any> = findByTestAttribute(
      component,
      ".disabled-submit-buton"
    );
    expect(wrapper.length).toBe(1);
  });
});
