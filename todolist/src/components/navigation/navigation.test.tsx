import React from "react";
import { shallow } from "enzyme";
import findByTestAttribute from "../../utils/findByTestAttribute";
import Navigation from "./navigation";

const SetUp: Function = (props: Object = {}) => {
  const component: Object = shallow(<Navigation />);
  return component;
};

describe("navigation component", () => {
  let component: Object;
  beforeEach(() => {
    component = SetUp();
  });

  describe("Classes and properties checks", () => {
    test("Should have bg=light on a Navbar", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[bg='light']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .home class on a Navbar", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".home");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .login class on a Navbar", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".login");
      expect(wrapper.length).toBe(1);
    });

    test("Should have .register class on a Navbar", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".register");
      expect(wrapper.length).toBe(1);
    });

    test("Should have expand=lg on a Navbar", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[expand='lg']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have aria-controls=basic-navbar-nav on a Navbar.Toggle", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[aria-controls='basic-navbar-nav']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have id=basic-navbar-nav on a Nav.Collapse ", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[id='basic-navbar-nav']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have .mr-auto class on an existing Nav", () => {
      const wrapper: Array<any> = findByTestAttribute(component, ".mr-auto");
      expect(wrapper.length).toBe(1);
    });

    test("Should have to=/home property on an existing Link", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[to='/home']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have to=/create property on an existing Link", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[to='/createList']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have to=/lists property on an existing Link", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[to='/lists']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have to=/shared property on an existing Link", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[to='/shared']"
      );
      expect(wrapper.length).toBe(0);
    });
    test("Should have to=/login property on an existing Link", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[to='/login']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have to=/register property on an existing Link", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[to='/register']"
      );
      expect(wrapper.length).toBe(1);
    });

    test("Should have to=/register property on an existing Link", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        "[to='/logout']"
      );
      expect(wrapper.length).toBe(0);
    });

    test("Should have .welcome-name property on aspan element", () => {
      const wrapper: Array<any> = findByTestAttribute(
        component,
        ".welcome-name"
      );
      expect(wrapper.length).toBe(0);
    });
  });
});
