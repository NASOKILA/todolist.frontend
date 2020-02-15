import React, { FunctionComponent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import {
  LoginPropsType,
  LoginCredentialsType,
  UserDetailsAuthDataType
} from "../../../types/types";
import * as AuthRequests from "../../../apis/todolistApi/authRequests";
import { toast } from "react-toastify";
import { userLogin } from "../../../utils/Auth";
import "./login.scss";
import ErrorModal from "../../modal/errorModal";

//Functional Component managing state, React Hooks
const Login: FunctionComponent<LoginPropsType> = (props: LoginPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState<Boolean>(false);

  const login = (e: any): void => {
    e.preventDefault();

    let data: LoginCredentialsType = {
      email: email,
      password: password
    };

    AuthRequests.Login(data)
      .then((res: any) => {
        const userDetailsData: UserDetailsAuthDataType = res.data;
        userLogin(userDetailsData);
        setEmail("");
        setPassword("");
        toast("Login successfull!");
        setTimeout(() => {
          window.location.href = "/home"; //NO WAY TO RERENDER NAVIGATION
        }, 500);
      })
      .catch((err: any) => {
        if (err.response !== undefined) {
          const receivedError = err.response.data;
          let errorMessages: any = [];
          errorMessages.push(receivedError);
          setErrorMessages(errorMessages);
        } else {
          console.log(err);
          setShowErrorModal(true);
        }
      });
  };

  const closeErrorModal: Function = (): void => {
    setShowErrorModal(!showErrorModal);
  };

  const emailOnChangeHandler = (e: any): void => {
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e: any): void => {
    setPassword(e.target.value);
  };

  const isFormFilled: Function = (): Boolean => {
    if (email === "" || password === "") {
      return false;
    }
    return true;
  };

  return (
    <Card className="text-center loginpage page">
      <h3>Login</h3>
      <Card.Body>
        <ul className="errorList">
          {errorMessages.map((error, i) => {
            return (
              <li key={i} className="errorItem">
                {error}
              </li>
            );
          })}
        </ul>
        <Form onSubmit={login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={emailOnChangeHandler}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={passwordOnChangeHandler}
              value={password}
            />
          </Form.Group>
          {isFormFilled() ? (
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faPlus} /> Login
            </Button>
          ) : (
            <Button
              variant="danger"
              disabled
              className="disabled-submit-buton"
              type="submit"
            >
              <FontAwesomeIcon icon={faHandPaper} /> Login
            </Button>
          )}
        </Form>
      </Card.Body>
      {showErrorModal && (
        <ErrorModal isOpen={showErrorModal} handleClose={closeErrorModal} />
      )}
    </Card>
  );
};

export default Login;
