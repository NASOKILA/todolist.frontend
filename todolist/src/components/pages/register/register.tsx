import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import {
  RegisterPropsType,
  RegisterStateType,
  RegisterCredentialsType,
  UserDetailsAuthDataType
} from "../../../types/types";
import * as AuthRequests from "../../../apis/todolistApi/authRequests";
import { toast } from "react-toastify";
import { userLogin } from "../../../utils/Auth";
import ErrorModal from "../../modal/errorModal";
import "./register.scss";

class Register extends Component<RegisterPropsType, RegisterStateType> {
  constructor(props: RegisterPropsType) {
    super(props);

    this.state = {
      form: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        isAdmin: false
      },
      errorMessages: [],
      showErrorModal: false
    };
  }

  validateForm: Function = (): Boolean => {
    let newState: RegisterStateType = { ...this.state };
    newState.errorMessages = []; //Empty the existing error messages

    if (newState.form.password.match(/^(?=.*[a-z])/g) === null) {
      newState.errorMessages.push(
        "Password must contain at least 1 lowercase alphabetical character."
      );
    }

    if (newState.form.password.match(/^(?=.*[A-Z])/g) === null) {
      newState.errorMessages.push(
        "Password must contain at least 1 uppercase alphabetical character."
      );
    }

    if (newState.form.password.match(/^(?=.*[0-9])/g) === null) {
      newState.errorMessages.push(
        "Password must contain at least 1 numeric character."
      );
    }

    if (newState.form.password.match(/^(?=.{8,})/g) === null) {
      newState.errorMessages.push("Password must be 8 characters or longer.");
    }

    if (newState.form.password !== newState.form.confirmPassword) {
      newState.errorMessages.push("Passwords do not match!");
    }

    if (newState.errorMessages.length > 0) {
      this.setState(newState);
    }

    return newState.errorMessages.length === 0;
  };

  register = (e: any): void => {
    e.preventDefault();

    let data: RegisterCredentialsType = {
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName,
      email: this.state.form.email,
      password: this.state.form.password,
      isAdmin: this.state.form.isAdmin
    };

    let isFormValid = this.validateForm();
    if (isFormValid) {
      AuthRequests.Register(data)
        .then((res: any) => {
          const userDetailsData: UserDetailsAuthDataType = res.data;
          userLogin(userDetailsData);
          toast("Registration successfull!");
          setTimeout(() => {
            window.location.href = "/home";
          }, 500);
        })
        .catch((err: any) => {
          let newState = { ...this.state };
          if (err.response !== undefined) {
            newState.errorMessages.push("User with this email already exists.");
          } else {
            newState.showErrorModal = true;
          }
          this.setState(newState);
        });
    }
  };

  firstNameOnChangeHandler = (e: any): void => {
    let newForm = { ...this.state.form };
    newForm.firstName = e.target.value;
    this.setState({ form: newForm });
  };

  lastNameOnChangeHandler = (e: any): void => {
    let newForm = { ...this.state.form };
    newForm.lastName = e.target.value;
    this.setState({ form: newForm });
  };

  emailOnChangeHandler = (e: any): void => {
    //call API and check if email is not been used
    let newForm = { ...this.state.form };
    newForm.email = e.target.value;
    this.setState({ form: newForm });
  };

  passwordOnChangeHandler = (e: any): void => {
    //Check if password is valid
    let newForm = { ...this.state.form };
    newForm.password = e.target.value;
    this.setState({ form: newForm });
  };

  confirmPasswordOnChangeHandler = (e: any): void => {
    let newForm = { ...this.state.form };
    newForm.confirmPassword = e.target.value;
    this.setState({ form: newForm });
  };

  isFormFilled: Function = (): Boolean => {
    if (
      this.state.form.firstName === "" ||
      this.state.form.lastName === "" ||
      this.state.form.email === "" ||
      this.state.form.password === "" ||
      this.state.form.confirmPassword === ""
    ) {
      return false;
    }
    return true;
  };

  makeAdminOnChangeHandler = (): void => {
    let newForm = { ...this.state.form };
    newForm.isAdmin = !newForm.isAdmin;
    this.setState({ form: newForm });
  };

  closeErrorModal: Function = (): void => {
    let newState = { ...this.state };
    newState.showErrorModal = false;
    this.setState(newState);
  };

  render() {
    return (
      <Card className="text-center registerpage page">
        <h3>Register</h3>
        <Card.Body>
          <Form onSubmit={this.register}>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={this.firstNameOnChangeHandler}
                value={this.state.form.firstName}
              />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                onChange={this.lastNameOnChangeHandler}
                value={this.state.form.lastName}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.emailOnChangeHandler}
                value={this.state.form.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <ul className="errorList">
                {this.state.errorMessages
                  .filter(e => e.includes("email"))
                  .map((error, i) => {
                    return (
                      <li key={i} className="errorItem">
                        {error}
                      </li>
                    );
                  })}
              </ul>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.passwordOnChangeHandler}
                value={this.state.form.password}
              />
              <ul className="errorList">
                {this.state.errorMessages
                  .filter(e => e.includes("character"))
                  .map((error, i) => {
                    return (
                      <li key={i} className="errorItem">
                        {error}
                      </li>
                    );
                  })}
              </ul>
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="ConfirmPassword"
                onChange={this.confirmPasswordOnChangeHandler}
                value={this.state.form.confirmPassword}
              />
              <ul className="errorList">
                {this.state.errorMessages
                  .filter(e => e.includes("match"))
                  .map((error, i) => {
                    return (
                      <li key={i} className="errorItem">
                        {error}
                      </li>
                    );
                  })}
              </ul>
            </Form.Group>

            <Form.Group controlId="formBasicMakeAdmin">
              <Form.Check
                type="checkbox"
                label="Make Admin"
                onChange={this.makeAdminOnChangeHandler}
              />
            </Form.Group>

            {this.isFormFilled() ? (
              <Button variant="success" type="submit">
                <FontAwesomeIcon icon={faRegistered} /> Register
              </Button>
            ) : (
              <Button
                variant="danger"
                disabled
                className="disabled-submit-buton"
                type="submit"
              >
                <FontAwesomeIcon icon={faHandPaper} /> Register
              </Button>
            )}
          </Form>
        </Card.Body>
        {this.state.showErrorModal && (
          <ErrorModal
            isOpen={this.state.showErrorModal}
            handleClose={this.closeErrorModal}
          />
        )}
      </Card>
    );
  }
}

export default Register;
