import React, { FunctionComponent, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAltSquare,
  faCheck,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { isUserLoggedIn } from "../../../utils/Auth";
import { toast } from "react-toastify";
import * as ItemRequests from "../../../apis/todolistApi/itemRequests";
import { OfficialPropsType, TodoItemsType } from "../../../types/types";
import Button from "react-bootstrap/Button";
import ErrorModal from "../../modal/errorModal";
import Card from "react-bootstrap/Card";
import "react-toastify/dist/ReactToastify.css";
import "./shared.scss";

const Shared: FunctionComponent<OfficialPropsType> = (
  props: OfficialPropsType
) => {
  const [allSharedItems, setAllSharedItems] = useState<TodoItemsType[]>([]);
  const [showErrorModal, setShowErrorModal] = useState<Boolean>(false);

  useEffect(() => {
    if (isUserLoggedIn()) {
      getAllSharedItems();
    }
  }, []);

  const getAllSharedItems: Function = (): void => {
    ItemRequests.GetSharedItems()
      .then((res: any) => {
        const sharedItems: TodoItemsType[] = res.data;
        setAllSharedItems(sharedItems);
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
        getAllSharedItems();
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
        getAllSharedItems();
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
        getAllSharedItems();
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
    <Card className="text-center sharedPage page">
      <h3>Shared Items</h3>
      <Card.Body>
        {allSharedItems.map((item: TodoItemsType, iii: number) => {
          return (
            <Card.Body>
              <h5>{item.description}</h5>
              <span>{item.isDone ? "Item Done" : "New Item"}</span>
              <br />
              <span>{item.isShared ? "Shared" : "Not Shared"}</span>
              <div className="item-buttons">
                <Button
                  variant="warning"
                  className="item-btn"
                  onClick={() =>
                    props.history.push(`/items/edit/${item.id}?redirect=Shared`)
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
                    <FontAwesomeIcon icon={faShareAltSquare} /> Share
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="item-btn"
                    onClick={() => shareToggleItem(item.id)}
                  >
                    <FontAwesomeIcon icon={faShareAltSquare} /> Unshare
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
          );
        })}
        {allSharedItems.length === 0 && <span>There are no shared items.</span>}
      </Card.Body>
      {showErrorModal && (
        <ErrorModal isOpen={showErrorModal} handleClose={closeErrorModal} />
      )}
    </Card>
  );
};

export default Shared;
