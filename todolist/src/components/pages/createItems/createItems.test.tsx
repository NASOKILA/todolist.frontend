import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import CreateItems from "./createItems";

const SetUp: Function = (props: any = {}) => {
  const component: any = shallow(<CreateItems {...props} />);
  return component;
};

describe("CreateItems component", () => {
  let component: any;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .page class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });
    test("Should have .createItemsPage class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".createItemsPage"
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

    test("Should have [controlId='formItemDescription'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formItemDescription']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [type='text'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='text']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [placeholder='Enter description'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter description']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [controlId='formItemIsShared'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formItemIsShared']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [type='checkbox'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='checkbox']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [label='Share Item'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[label='Share Item']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [variant='primary'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='primary']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .btn class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".btn");
      expect(wrapper.length).toBe(2);
    });

    test("Should have .back-button class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".back-button"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [type='button'] class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='button']"
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

    test("Should have .disabled-submit-button class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".disabled-submit-button"
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
