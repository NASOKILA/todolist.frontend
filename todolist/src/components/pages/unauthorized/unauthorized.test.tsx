import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import Unauthorized from "./unauthorized";
import { OfficialPropsType } from "../../../types/types";

const SetUp: Function = (
  props: OfficialPropsType = { children: "", history: "" }
) => {
  const component: Object = shallow(<Unauthorized {...props} />);
  return component;
};

describe("unauthorized component", () => {
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

    test("Should have .unauthorizedpage on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".unauthorizedpage"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .page on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .error-details on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".error-details"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .error-actions on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".error-actions"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have variant=primary on a Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='primary']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
