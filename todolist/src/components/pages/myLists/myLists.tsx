import React, { FunctionComponent, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAltSquare,
  faCheck,
  faUndo,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { isUserLoggedIn, getUserUniqueToken } from "../../../utils/Auth";
import { toast } from "react-toastify";
import * as ListRequests from "../../../apis/todolistApi/listRequests";
import * as ItemRequests from "../../../apis/todolistApi/itemRequests";
import {
  TodoListType,
  OfficialPropsType,
  TodoItemsType
} from "../../../types/types";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import ErrorModal from "../../modal/errorModal";
import Card from "react-bootstrap/Card";
import "react-toastify/dist/ReactToastify.css";
import "./myLists.scss";

const MyLists: FunctionComponent<OfficialPropsType> = (
  props: OfficialPropsType
) => {
  const [allMyLists, setAllMyLists] = useState<TodoListType[]>([]);
  const [showErrorModal, setShowErrorModal] = useState<Boolean>(false);

  useEffect(() => {
    if (isUserLoggedIn()) {
      getAllMyLists();
    }
  }, []);

  const getAllMyLists: Function = (): void => {
    const userUniqueIdentifier: string = getUserUniqueToken();
    ListRequests.GetMyLists(userUniqueIdentifier)
      .then((res: any) => {
        const myLists: TodoListType[] = res.data;
        setAllMyLists(myLists);
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const deleteList: Function = (id: number): void => {
    //Send delete request for list deletion
    ListRequests.DeleteList(id)
      .then((res: any) => {
        getAllMyLists();
        toast(res.data);
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const deleteItem: Function = (id: number): void => {
    ItemRequests.DeleteItem(id)
      .then((res: any) => {
        toast(res.data);
        getAllMyLists();
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const shareToggleItem = (id: number): void => {
    ItemRequests.ShareToggleItem(id)
      .then((res: any) => {
        toast(res.data);
        getAllMyLists();
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const shareCompleteItem = (id: number): void => {
    ItemRequests.CompleteToggleItem(id)
      .then((res: any) => {
        toast(res.data);
        getAllMyLists();
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const closeErrorModal: Function = (): void => {
    setShowErrorModal(!showErrorModal);
  };

  return (
    <Card className="text-center myListsPage page">
      <h3>My lists</h3>
      <Card.Body>
        {allMyLists.map((list: TodoListType, i: number) => {
          return (
            <Card key={i} style={{ margin: "0.5rem" }}>
              <Card.Body>
                <Accordion defaultActiveKey="0" key={i}>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      <h3>
                        <span className="list-title">{list.title}</span>
                        <span> ({list.items.length})</span>
                      </h3>
                    </Accordion.Toggle>
                    {list.items.length === 0 && (
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <span>No items in the list.</span>
                        </Card.Body>
                      </Accordion.Collapse>
                    )}
                    {list.items.map((item: TodoItemsType, iii: number) => {
                      return (
                        <Accordion.Collapse key={iii} eventKey="1">
                          <Card.Body>
                            <h5>{item.description}</h5>
                            <span>
                              {item.isDone ? "Item Done" : "New Item"}
                            </span>
                            <br />
                            <span>
                              {item.isShared ? "Shared" : "Not Shared"}
                            </span>
                            <div className="item-buttons">
                              <Button
                                variant="warning"
                                className="item-btn"
                                onClick={() =>
                                  props.history.push(
                                    `/items/edit/${item.id}?redirect=myLists`
                                  )
                                }
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </Button>
                              {!item.isDone ? (
                                <Button
                                  variant="success"
                                  className="item-btn"
                                  onClick={() => shareCompleteItem(item.id)}
                                >
                                  <FontAwesomeIcon icon={faCheck} /> Complete
                                </Button>
                              ) : (
                                <Button
                                  variant="secondary"
                                  className="item-btn"
                                  onClick={() => shareCompleteItem(item.id)}
                                >
                                  <FontAwesomeIcon icon={faUndo} /> Undo
                                </Button>
                              )}

                              {!item.isShared ? (
                                <Button
                                  variant="primary"
                                  className="item-btn"
                                  onClick={() => shareToggleItem(item.id)}
                                >
                                  <FontAwesomeIcon icon={faShareAltSquare} />{" "}
                                  Share
                                </Button>
                              ) : (
                                <Button
                                  variant="secondary"
                                  className="item-btn"
                                  onClick={() => shareToggleItem(item.id)}
                                >
                                  <FontAwesomeIcon icon={faShareAltSquare} />{" "}
                                  Unshare
                                </Button>
                              )}

                              <Button
                                variant="danger"
                                className="item-btn"
                                onClick={() => deleteItem(item.id)}
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </div>
                            <hr />
                          </Card.Body>
                        </Accordion.Collapse>
                      );
                    })}
                  </Card>
                </Accordion>
                <div className="list-buttons">
                  <Button
                    variant="warning"
                    className="list-btn"
                    onClick={() =>
                      props.history.push(
                        `/lists/edit/${list.id}?redirect=myLists`
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </Button>
                  <Button
                    variant="primary"
                    className="list-btn"
                    onClick={() =>
                      props.history.push(
                        `/items/create?listId=${list.id}&redirect=myLists`
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faPlus} /> Add Item
                  </Button>
                  <Button
                    variant="danger"
                    className="list-btn"
                    onClick={() => deleteList(list.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
        {allMyLists.length === 0 && <span>You have no lists.</span>}
      </Card.Body>
      {showErrorModal && (
        <ErrorModal isOpen={showErrorModal} handleClose={closeErrorModal} />
      )}
    </Card>
  );
};

export default MyLists;
