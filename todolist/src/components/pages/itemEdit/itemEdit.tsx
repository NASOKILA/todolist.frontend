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
import { TodoItemPropertiesType } from "../../../types/types";
import * as ItemRequests from "../../../apis/todolistApi/itemRequests";
import { toast } from "react-toastify";
import ErrorModal from "../../modal/errorModal";
import "./itemEdit.scss";

//Functional Component managing state, React Hooks
const ItemEdit: FunctionComponent<PropsWithChildren<any>> = (
  props: PropsWithChildren<any>
) => {
  const [ItemData, setItemData] = useState<TodoItemPropertiesType>({
    description: "",
    isDone: false,
    isShared: false
  });
  const [description, setDescription] = useState<string>("");
  const [isDone, setIsDone] = useState<Boolean>(false);
  const [isShared, setIsShared] = useState<Boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [showErrorModal, setShowErrorModal] = useState<Boolean>(false);

  useEffect(() => {
    const {
      match: { params }
    } = props;

    const itemId = Number(params.id);

    setItemInfo(itemId);
  }, []);

  const setItemInfo: Function = (id: number): void => {
    ItemRequests.GetItem(id)
      .then((res: any) => {
        const ItemReceivedData: TodoItemPropertiesType = res.data;
        setItemData(ItemReceivedData);
        setDescription(ItemReceivedData.description);
        setIsShared(ItemReceivedData.isShared);
        setIsDone(ItemReceivedData.isDone);
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
    setDescription("");
    setIsShared(false);
    setIsDone(false);
  };

  const redirectBack = (): void => {
    let urlParams = new URLSearchParams(window.location.search);
    let redirectUrl: string | null = urlParams.get("redirect");
    props.history.push(`/${redirectUrl}`);
  };

  const ItemUpdate = (e: any): void => {
    e.preventDefault();

    let data: TodoItemPropertiesType = {
      description: description,
      isShared: isShared,
      isDone: isDone
    };

    const itemId = Number(props.match.params.id);

    ItemRequests.UpdateItem(data, itemId)
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

  const descriptionOnChangeHandler = (e: any): void => {
    setDescription(e.target.value);
  };

  const isFormTouched: Function = (): Boolean => {
    if (
      ItemData.description === description &&
      ItemData.isDone === isDone &&
      ItemData.isShared === isShared
    ) {
      return false;
    }
    return true;
  };

  const isSharedOnChangeHandler = (): void => {
    setIsShared(!isShared);
  };

  const isDoneOnChangeHandler = (): void => {
    setIsDone(!isDone);
  };

  return (
    <Card className="text-center ItemEditPage page">
      <h3>Edit Item</h3>
      <Card.Body>
        <ul className="errorItem">
          {errorMessages.map((error, i) => {
            return (
              <li key={i} className="errorItem">
                {error}
              </li>
            );
          })}
        </ul>
        <Form onSubmit={ItemUpdate}>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter description"
              onChange={descriptionOnChangeHandler}
              value={description}
            />
          </Form.Group>

          <Form.Group controlId="formItemIsShared">
            <Form.Check
              type="checkbox"
              label="Is Shared"
              onChange={isSharedOnChangeHandler}
              checked={isShared ? true : false}
            />
          </Form.Group>

          <Form.Group controlId="formItemIsDone">
            <Form.Check
              type="checkbox"
              label="Is Done"
              onChange={isDoneOnChangeHandler}
              checked={isDone ? true : false}
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

export default ItemEdit;
