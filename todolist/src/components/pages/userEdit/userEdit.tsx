import React, {
  FunctionComponent,
  useState,
  PropsWithChildren,
  useEffect
} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { UserEditType } from "../../../types/types";
import * as UserRequests from "../../../apis/todolistApi/userRequests";
import { toast } from "react-toastify";
import ErrorModal from "../../modal/errorModal";
import "./userEdit.scss";
import { isCurrentUser, userLogout } from "../../../utils/Auth";

//Functional Component managing state, React Hooks
const UserEdit: FunctionComponent<PropsWithChildren<any>> = (
  props: PropsWithChildren<any>
) => {
  const [userData, setUserData] = useState<UserEditType>({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [showErrorModal, setShowErrorModal] = useState<Boolean>(false);

  useEffect(() => {
    const {
      match: { params }
    } = props;

    const userId = Number(params.id);

    setUserInfo(userId);
  }, []);

  const setUserInfo: Function = (id: number): void => {
    UserRequests.GetUserById(id)
      .then((res: any) => {
        const userReceivedData = res.data;
        setUserData(userReceivedData);
        setFirstName(userReceivedData.firstName);
        setLastName(userReceivedData.lastName);
        setEmail(userReceivedData.email);
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

  const clearForm: Function = (): void => {
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  const userUpdate = (e: any): void => {
    e.preventDefault();

    let data: UserEditType = {
      firstName: firstName,
      lastName: lastName,
      email: email
    };

    const userId = Number(props.match.params.id);

    UserRequests.UpdateUser(data, userId)
      .then((res: any) => {
        if (isCurrentUser(userData.email)) {
          userLogout();
          setTimeout(() => {
            window.location.href = "/login";
          }, 500);
        } else {
          clearForm();
          toast(res.data);
          props.history.push("/users");
        }
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

  const firstNameOnChangeHandler = (e: any): void => {
    setFirstName(e.target.value);
  };

  const lastNameOnChangeHandler = (e: any): void => {
    setLastName(e.target.value);
  };

  const emailOnChangeHandler = (e: any): void => {
    setEmail(e.target.value);
  };

  const isFormTouched: Function = (): Boolean => {
    if (
      userData.email === email &&
      userData.firstName === firstName &&
      userData.lastName === lastName
    ) {
      return false;
    }
    return true;
  };

  return (
    <Card className="text-center usereditpage page">
      <h3>Edit User</h3>
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
        <Form onSubmit={userUpdate}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter first name"
              onChange={firstNameOnChangeHandler}
              value={firstName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              onChange={lastNameOnChangeHandler}
              value={lastName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              onChange={emailOnChangeHandler}
              value={email}
            />
          </Form.Group>

          {isFormTouched() ? (
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faPenAlt} /> Update
            </Button>
          ) : (
            <Button
              variant="danger"
              disabled
              className="disabled-submit-buton"
              type="submit"
            >
              <FontAwesomeIcon icon={faHandPaper} /> Update
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

export default UserEdit;
