import React, { FunctionComponent, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faRegistered,
  faShareAltSquare,
  faCheck,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  isUserLoggedIn,
  isUserAdmin,
  isCurrentUser,
  userLogout
} from "../../../utils/Auth";
import { toast } from "react-toastify";
import * as UserRequests from "../../../apis/todolistApi/userRequests";
import * as ListRequests from "../../../apis/todolistApi/listRequests";
import * as ItemRequests from "../../../apis/todolistApi/itemRequests";
import {
  UserType,
  TodoListType,
  TodoItemsType,
  OfficialPropsType
} from "../../../types/types";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import ErrorModal from "../../modal/errorModal";
import Card from "react-bootstrap/Card";
import "react-toastify/dist/ReactToastify.css";
import "./users.scss";

const Users: FunctionComponent<OfficialPropsType> = (
  props: OfficialPropsType
) => {
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [showErrorModal, setShowErrorModal] = useState<Boolean>(false);

  useEffect(() => {
    if (isUserLoggedIn() && isUserAdmin()) {
      getAllUsers();
    }
  }, []);

  const getAllUsers: Function = (): void => {
    UserRequests.GetAllUsers()
      .then((res: any) => {
        const users: UserType[] = res.data;
        setAllUsers(users);
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const deleteUser: Function = (id: number): void => {
    //Send delete request for user deletion
    UserRequests.DeleteUser(id)
      .then((res: any) => {
        getAllUsers();
        toast(res.data);
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const deletePersonalAccount: Function = (email: string, id: number): void => {
    UserRequests.DeleteUser(id)
      .then((res: any) => {
        userLogout();
        setTimeout(() => {
          window.location.href = "/login";
        }, 500);
        toast("User Unregistered.");
      })
      .catch((err: any) => {
        console.log(err);
        setShowErrorModal(true);
      });
  };

  const toggleUserAdmin: Function = (isAdmin: Boolean, id: number): void => {
    let data: Object = { isAdmin, id };
    UserRequests.ToggleUserAdmin(data)
      .then((res: any) => {
        getAllUsers();
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
        getAllUsers();
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
        toast(res.data);
        getAllUsers();
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
        getAllUsers();
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
        getAllUsers();
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
    <Card className="text-center userspage page">
      <h3>All Users</h3>
      <Card.Body>
        {allUsers.map((user: UserType, i: number) => {
          return (
            <Card key={i} style={{ margin: "0.5rem" }}>
              <Card.Body>
                <Card.Title>
                  <h1>
                    {user.firstName} {user.lastName}
                  </h1>
                </Card.Title>
                <Card.Text>
                  {user.email}
                  <br />
                  {user.isAdmin ? "Admin" : "Not admin"}
                </Card.Text>
                <div className="user-buttons">
                  <Button
                    variant="warning"
                    className="user-btn"
                    onClick={() => props.history.push(`/users/edit/${user.id}`)}
                  >
                    <FontAwesomeIcon icon={faUserEdit} /> Modify
                  </Button>
                  {user.isAdmin ? (
                    <Button
                      variant="primary"
                      onClick={() => {
                        toggleUserAdmin(user.isAdmin, user.id);
                        if (isCurrentUser(user.email)) {
                          userLogout();
                          setTimeout(() => {
                            window.location.href = "/login";
                          }, 500);
                        }
                      }}
                      id={`user-btn user-admin-${i}`}
                    >
                      <FontAwesomeIcon icon={faUserAlt} /> Make User
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      onClick={() => toggleUserAdmin(user.isAdmin, user.id)}
                      className="user-btn"
                    >
                      <FontAwesomeIcon icon={faUserAlt} /> Make Admin
                    </Button>
                  )}
                  {isCurrentUser(user.email) ? (
                    <Button
                      variant="secondary"
                      onClick={() => deletePersonalAccount(user.email, user.id)}
                      className="user-btn"
                    >
                      <FontAwesomeIcon icon={faRegistered} /> Unregister
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => deleteUser(user.id)}
                      className="user-btn"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} /> Delete
                    </Button>
                  )}
                </div>

                {user.lists.map((list: TodoListType, ii: number) => {
                  return (
                    <Card className="user-list-card" key={ii}>
                      <Accordion defaultActiveKey="0" className="user-list">
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            <span className="list-title">{list.title}</span>
                            <span> ({list.items.length})</span>
                          </Accordion.Toggle>
                          {list.items.length === 0 && (
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>
                                <span>No items in the list.</span>
                              </Card.Body>
                            </Accordion.Collapse>
                          )}
                          {list.items.map(
                            (item: TodoItemsType, iii: number) => {
                              return (
                                <Accordion.Collapse key={iii} eventKey="1">
                                  <Card.Body>
                                    <div>
                                      <strong>{item.description}</strong>
                                    </div>
                                    <span>{item.isDone ? "Done" : "New"}</span>
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
                                            `/items/edit/${item.id}?redirect=users`
                                          )
                                        }
                                      >
                                        <FontAwesomeIcon icon={faEdit} />
                                      </Button>
                                      {!item.isDone ? (
                                        <Button
                                          variant="success"
                                          className="item-btn"
                                          onClick={() =>
                                            shareCompleteItem(item.id)
                                          }
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Complete
                                        </Button>
                                      ) : (
                                        <Button
                                          variant="secondary"
                                          className="item-btn"
                                          onClick={() =>
                                            shareCompleteItem(item.id)
                                          }
                                        >
                                          <FontAwesomeIcon icon={faPlus} /> Undo
                                        </Button>
                                      )}

                                      {!item.isShared ? (
                                        <Button
                                          variant="primary"
                                          className="item-btn"
                                          onClick={() =>
                                            shareToggleItem(item.id)
                                          }
                                        >
                                          <FontAwesomeIcon
                                            icon={faShareAltSquare}
                                          />{" "}
                                          Share
                                        </Button>
                                      ) : (
                                        <Button
                                          variant="secondary"
                                          className="item-btn"
                                          onClick={() =>
                                            shareToggleItem(item.id)
                                          }
                                        >
                                          <FontAwesomeIcon
                                            icon={faShareAltSquare}
                                          />{" "}
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
                            }
                          )}
                        </Card>
                      </Accordion>
                      <div className="list-buttons">
                        <Button
                          variant="warning"
                          className="list-btn"
                          onClick={() =>
                            props.history.push(
                              `/lists/edit/${list.id}?redirect=users`
                            )
                          }
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>

                        <Button
                          variant="danger"
                          className="list-btn"
                          onClick={() => deleteList(list.id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </Card.Body>
            </Card>
          );
        })}
      </Card.Body>
      {showErrorModal && (
        <ErrorModal isOpen={showErrorModal} handleClose={closeErrorModal} />
      )}
    </Card>
  );
};

export default Users;
