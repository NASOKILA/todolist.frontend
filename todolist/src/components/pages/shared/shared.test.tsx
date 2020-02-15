import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import Shared from "./shared";
import { OfficialPropsType } from "../../../types/types";

const SetUp: Function = (
  props: OfficialPropsType = { children: "", history: "" }
) => {
  const component: Object = shallow(<Shared {...props} />);
  return component;
};

describe("Shared component", () => {
  let component: Object;
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

    test("Should have .sharedPage on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".sharedPage");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .page on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .item-buttons class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".item-buttons"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have variant=warning property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='warning']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have variant=danger property", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='danger']"
      );
      expect(wrapper.length).toBe(0);
    });
  });
});
