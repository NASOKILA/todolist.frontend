import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import Main from "./main";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<Main history={""} />);
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
      expect(wrapper.length).toBe(2);
    });

    test("Should have .authBtn class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".authBtn");
      expect(wrapper.length).toBe(2);
    });

    test("Should have .loginBtn class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".loginBtn");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .registerBtn class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".registerBtn"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have size=lg on an existing button", () => {
      const wrapper: Array<any> = findByTestAttribute(component, "[size='lg']");
      expect(wrapper.length).toBe(2);
    });
  });
});
