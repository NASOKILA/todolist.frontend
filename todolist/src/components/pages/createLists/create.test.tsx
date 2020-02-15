import React from "react";
import { mount } from "enzyme";
import findByTestAttribute from "../../../utils/findByTestAttribute";
import CreateLists from "./createLists";
import { Provider } from "react-redux";
import { store } from "../../../redux/store/createStore";

const SetUp: Function = (props: any = {}) => {
  const component: any = mount(
    <Provider store={store}>
      <CreateLists {...props} />
    </Provider>
  );
  return component;
};

describe("Create component", () => {
  let component: any;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have .page class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".page");
      expect(wrapper.length).toBe(2);
    });
    test("Should have .createpage class", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".createpage");
      expect(wrapper.length).toBe(2);
    });
    test("Should have .text-center class", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".text-center"
      );
      expect(wrapper.length).toBe(2);
    });
    test("Should have controlId=formListTitle on an existing form.group", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[controlId='formListTitle']"
      );
      expect(wrapper.length).toBe(1);
    });
    test("Should have type=text on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='text']"
      );
      expect(wrapper.length).toBe(2);
    });
    test("Should have placeholder=Enter title on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[placeholder='Enter title']"
      );
      expect(wrapper.length).toBe(2);
    });
    test("Should have type=submit on an existing form.control", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[type='submit']"
      );
      expect(wrapper.length).toBe(2);
    });
    test("Should have variant=danger on an existing button", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[variant='danger']"
      );
      expect(wrapper.length).toBe(1);
    });
  });
});
