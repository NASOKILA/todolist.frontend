import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import ItemEdit from "./itemEdit";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<ItemEdit {...props} />);
  return component;
};

describe("ItemEdit component", () => {
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

    test("Should have .ItemEditPage class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".ItemEditPage"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .errorItem class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".errorItem");
      expect(wrapper.length).toBe(1);
    });

    test("Should have [controlId='formBasicDescription'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formBasicDescription']"
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
      expect(wrapper.length).toBe(2);
    });

    test("Should have [label='Is Shared'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[label='Is Shared']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [controlId='formItemIsDone'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formItemIsDone']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have [label='Is Done'] property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[label='Is Done']"
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

    test("Should have [type='button'] property", () => {
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
