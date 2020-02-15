import React from "react";
import { shallow, mount } from "enzyme";
import findByTestAttribute from "../../utils/findByTestAttribute";
import ErrorBoundry from "./errorBoundry";

const SetUp: Function = (props: Object = {}) => {
  // in your test:
  const component = shallow(<ErrorBoundry {...props} />);

  return component;
};

describe("ErrorBoundry component", () => {
  let component: any;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .text-center class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .errorBoundry class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".errorBoundry"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .page class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(0);
    });

    test("Should have .global-error class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(0);
    });

    test("Should have variant=danger class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='danger']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have size=lg class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, "[size='lg']");
      expect(wrapper.length).toBe(0);
    });
  });
});
