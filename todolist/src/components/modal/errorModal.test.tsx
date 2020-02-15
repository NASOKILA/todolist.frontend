import React from "react";
import { shallow } from "enzyme";
import ErrorModal from "./errorModal";
import findByTestAttribute from "../../utils/findByTestAttribute";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<ErrorModal children={""} history={""} />);
  return component;
};

describe("Error Modal component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .fa-lg property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".fa-lg");
      expect(wrapper.length).toBe(1);
    });

    test("Should have id=contained-modal-title-vcenter property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[id='contained-modal-title-vcenter']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have size=lg property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(component, "[size='lg']");
      expect(wrapper.length).toBe(1);
    });

    test("Should have aria-labelledby=contained-modal-title-vcenter property on Card", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[aria-labelledby='contained-modal-title-vcenter']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
