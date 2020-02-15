import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import MyLists from "./myLists";

const SetUp: Function = (props: any = {}) => {
  const component: any = shallow(<MyLists {...props} />);
  return component;
};

describe("MyLists component", () => {
  let component: any;
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

    test("Should have .myListsPage on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".myListsPage"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .page on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have [defaultActiveKey='0'] on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[defaultActiveKey='0']"
      );
      expect(wrapper.length).toBe(0);
    });
  });
});
