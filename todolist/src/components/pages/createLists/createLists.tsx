import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { createListsPageAction } from "../../../redux/actions/createListsPageAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHandPaper, faHome } from "@fortawesome/free-solid-svg-icons";
import * as ListRequests from "../../../apis/todolistApi/listRequests";
import {
  CreateListsPropsType,
  CreateListsStateType
} from "../../../types/types";
import "./createLists.scss";
import ErrorModal from "../../modal/errorModal";
import { getUserUniqueToken } from "../../../utils/Auth";

//Component is using Redux store to keep and modify the state
class CreateLists extends Component<
  CreateListsPropsType,
  CreateListsStateType
> {
  constructor(props: CreateListsPropsType) {
    super(props);

    this.state = {
      form: {
        title: ""
      },
      showErrorModal: false
    };

    props.setCreateListsPageState({ ...this.state });
  }

  getFormDataObject: Function = (): Object => {
    let listsFromRedux: CreateListsStateType = this.props.createListsPageReducer
      .result;

    const title: string = listsFromRedux.form.title;
    return { title: title };
  };

  clearForm: Function = (): void => {
    let newState: CreateListsStateType = this.props.createListsPageReducer
      .result;
    newState.form.title = "";
    this.props.setCreateListsPageState(newState);
  };

  create = (e: any): void => {
    e.preventDefault();

    const uniqueToken: string = getUserUniqueToken();
    const data = this.getFormDataObject();
    ListRequests.AddList(uniqueToken, data)
      .then((res: any) => {
        this.clearForm();
        this.props.history.push("/myLists");
      })
      .catch((err: any) => {
        console.log(err);
        let newState: CreateListsStateType = this.props.createListsPageReducer
          .result;
        newState.showErrorModal = true;
        this.props.setCreateListsPageState(newState);
      });
  };

  titleOnChangeHandler = (e: any): void => {
    //call API and check if user has this title on a list already
    let newState = this.props.createListsPageReducer.result;
    newState.form.title = e.target.value;
    this.props.setCreateListsPageState(newState);
  };

  isFormFilled: Function = (): Boolean => {
    let currentState = this.props.createListsPageReducer.result;

    if (currentState !== undefined) {
      if (this.props.createListsPageReducer.result.form.title === "") {
        return false;
      }

      return true;
    }
    return false;
  };

  closeErrorModal: Function = (): void => {
    let newState = this.props.createListsPageReducer.result;
    newState.showErrorModal = !this.props.createListsPageReducer.result
      .showErrorModal;
    this.props.setCreateListsPageState(newState);
  };

  render() {
    return (
      <Card className="text-center createpage page">
        <h3>Create List</h3>
        <Card.Body>
          <Form onSubmit={this.create}>
            <Form.Group controlId="formListTitle">
              <Form.Label>List name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={this.titleOnChangeHandler}
                value={this.state.form.title}
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                className="btn back-button"
                type="button"
                onClick={() => {
                  this.props.history.push("/home");
                }}
              >
                <FontAwesomeIcon icon={faHome} /> Home
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
                  className="submit-buton disabled-submit-button"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faHandPaper} /> Create
                </Button>
              )}
            </Form.Group>
          </Form>
        </Card.Body>
        {this.props.createListsPageReducer.result &&
          this.props.createListsPageReducer.result.showErrorModal && (
            <ErrorModal
              isOpen={this.props.createListsPageReducer.result.showErrorModal}
              handleClose={this.closeErrorModal}
            />
          )}
      </Card>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCreateListsPageState: (list: CreateListsStateType) =>
      dispatch(createListsPageAction(list))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateLists);
