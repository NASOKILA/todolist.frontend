import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBackward } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import * as ItemRequests from "../../../apis/todolistApi/itemRequests";
import {
  OfficialPropsType,
  CreateItemsStateType,
  CreateItemsType
} from "../../../types/types";
import { toast } from "react-toastify";
import ErrorModal from "../../modal/errorModal";
import "./createItems.scss";

//Component is using Redux store to keep and modify the state
class CreateItems extends Component<OfficialPropsType, CreateItemsStateType> {
  constructor(props: OfficialPropsType) {
    super(props);

    this.state = {
      form: {
        description: "",
        isNew: false,
        isShared: false,
        listId: -1
      },
      showErrorModal: false
    };
  }

  componentDidMount() {
    this.setListId();
  }

  setListId: Function = (): void => {
    let uslParams = new URLSearchParams(window.location.search);
    let listId: string | null = uslParams.get("listId");
    let newState: CreateItemsStateType = { ...this.state };
    newState.form.listId = Number(listId);
    this.setState(newState);
  };

  getFormDataObject: Function = (): CreateItemsType => {
    let data: CreateItemsType = {
      description: this.state.form.description,
      isNew: this.state.form.isNew,
      isShared: this.state.form.isShared,
      listId: this.state.form.listId
    };
    return data;
  };

  clearForm: Function = (): void => {
    let newState: CreateItemsStateType = { ...this.state };
    newState.form.description = "";
    newState.form.isNew = false;
    newState.form.isShared = false;
    newState.form.listId = -1;
  };

  createItem = (e: any): void => {
    e.preventDefault();

    const data: CreateItemsType = this.getFormDataObject();
    ItemRequests.AddItem(data)
      .then((res: any) => {
        this.clearForm();
        toast(res.data);
        let uslParams = new URLSearchParams(window.location.search);
        let redirectUrl: string | null = uslParams.get("redirect");
        this.props.history.push(`/${redirectUrl}`);
      })
      .catch((err: any) => {
        console.log(err);
        let newState: CreateItemsStateType = { ...this.state };
        newState.showErrorModal = true;
        this.setState(newState);
      });
  };

  descriptionOnChangeHandler = (e: any): void => {
    let newState: CreateItemsStateType = { ...this.state };
    newState.form.description = e.target.value;
    this.setState(newState);
  };

  isSharedOnChangeHandler = (): void => {
    let newState: CreateItemsStateType = { ...this.state };
    newState.form.isShared = !this.state.form.isShared;
    this.setState(newState);
  };

  isFormFilled: Function = (): Boolean => {
    let currentState: CreateItemsStateType = { ...this.state };

    if (
      currentState.form.description === "" &&
      currentState.form.listId === -1 &&
      currentState.form.isShared === false
    ) {
      return false;
    }
    return true;
  };

  closeErrorModal: Function = (): void => {
    let newState: CreateItemsStateType = { ...this.state };
    newState.showErrorModal = !this.state.showErrorModal;
    this.setState(newState);
  };

  render() {
    return (
      <Card className="text-center createItemsPage page">
        <h3>Create Item</h3>
        <br />
        <Card.Body>
          <Form onSubmit={this.createItem}>
            <Form.Group controlId="formItemDescription">
              <Form.Label>Item description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={this.descriptionOnChangeHandler}
                value={this.state.form.description}
              />
            </Form.Group>
            <Form.Group controlId="formItemIsShared">
              <Form.Check
                type="checkbox"
                label="Share Item"
                onChange={this.isSharedOnChangeHandler}
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                className="btn back-button"
                type="button"
                onClick={() => {
                  this.props.history.push("/myLists");
                }}
              >
                <FontAwesomeIcon icon={faBackward} /> Back
              </Button>
              {this.isFormFilled() ? (
                <Button
                  variant="success"
                  className="btn submit-button"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faPlus} /> Create
                </Button>
              ) : (
                <Button
                  variant="danger"
                  disabled
                  className="btn disabled-submit-button"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faHandPaper} /> Create
                </Button>
              )}
            </Form.Group>
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

export default CreateItems;
