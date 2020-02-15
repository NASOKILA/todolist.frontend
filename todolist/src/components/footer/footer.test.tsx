import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../utils/findByTestAttribute";
import Footer from "./footer";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<Footer />);
  return component;
};

describe("footer component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have className=blockquote-footer on a Footer", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".blockquote-footer"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have className=todofooter on a Footer", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".todofooter");
      expect(wrapper.length).toBe(1);
    });

    test("Should have title=Source Title on a cite element", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[title='Source Title']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
