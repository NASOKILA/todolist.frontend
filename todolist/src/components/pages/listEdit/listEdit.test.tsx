import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import ListEdit from "./listEdit";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<ListEdit {...props} />);
  return component;
};

describe("ListEdit component", () => {
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

    test("Should have .listEditPage class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".listEditPage"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [controlId='formBasicTitle'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formBasicTitle']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [placeholder='Enter title'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter title']"
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
