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
import {
  faPenAlt,
  faHandPaper,
  faBackward
} from "@fortawesome/free-solid-svg-icons";
import { TodoListPropertiesType } from "../../../types/types";
import * as ListRequests from "../../../apis/todolistApi/listRequests";
import { toast } from "react-toastify";
import ErrorModal from "../../modal/errorModal";
import "./listEdit.scss";

//Functional Component managing state, React Hooks
const ListEdit: FunctionComponent<PropsWithChildren<any>> = (
  props: PropsWithChildren<any>
) => {
  const [listData, setListData] = useState<TodoListPropertiesType>({
    title: ""
  });
  const [title, setTitle] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [showErrorModal, setShowErrorModal] = useState<Boolean>(false);

  useEffect(() => {
    const {
      match: { params }
    } = props;

    const userId = Number(params.id);

    setListInfo(userId);
  }, []);

  const setListInfo: Function = (id: number): void => {
    ListRequests.GetList(id)
      .then((res: any) => {
        const listReceivedData: TodoListPropertiesType = res.data;
        setListData(listReceivedData);
        setTitle(listReceivedData.title);
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
    setTitle("");
  };

  const redirectBack = () => {
    let uslParams = new URLSearchParams(window.location.search);
    let redirectUrl: string | null = uslParams.get("redirect");
    props.history.push(`/${redirectUrl}`);
  };

  const listUpdate = (e: any): void => {
    e.preventDefault();

    let data: TodoListPropertiesType = {
      title: title
    };

    const userId = Number(props.match.params.id);

    ListRequests.UpdateList(data, userId)
      .then((res: any) => {
        clearForm();
        toast(res.data);
        redirectBack();
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const closeErrorModal: Function = (): void => {
    setShowErrorModal(!showErrorModal);
  };

  const titleOnChangeHandler = (e: any): void => {
    setTitle(e.target.value);
  };

  const isFormTouched: Function = (): Boolean => {
    if (listData.title === title) {
      return false;
    }
    return true;
  };

  return (
    <Card className="text-center listEditPage page">
      <h3>Edit List</h3>
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
        <Form onSubmit={listUpdate}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={titleOnChangeHandler}
              value={title}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={redirectBack}>
            <FontAwesomeIcon icon={faBackward} />
            {" Back"}
          </Button>
          {isFormTouched() ? (
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faPenAlt} />
              {" Update"}
            </Button>
          ) : (
            <Button
              variant="danger"
              disabled
              className="disabled-submit-buton"
              type="submit"
            >
              <FontAwesomeIcon icon={faHandPaper} />
              {" Update"}
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

export default ListEdit;
