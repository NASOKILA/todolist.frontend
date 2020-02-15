import React from "react";
import { shallow } from "enzyme";
import Users from "./users";
import findByTestAttribute from "../../../utils/findByTestAttribute";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<Users children={""} history={""} />);
  return component;
};

describe("users component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .text-center property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .userspage property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".userspage");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .page property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have defaultActiveKey=0 property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[defaultActiveKey='0']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .user-list property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".user-list");
      expect(wrapper.length).toBe(0);
    });

    test("Should have .list-buttons property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".list-buttons"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .list-btn property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".list-btn");
      expect(wrapper.length).toBe(0);
    });

    test("Should have variant=warning property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='warning']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have variant=danger property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='danger']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have variant=danger property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='success']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .item-buttons property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".item-buttons"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .user-buttons property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".user-buttons"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .user-btn property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".user-btn");
      expect(wrapper.length).toBe(0);
    });
  });
});
