import React, { FunctionComponent } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "./errorModal.scss";

const ErrorModal: FunctionComponent<any> = props => {
  return (
    <Modal
      style={{ textAlign: "center" }}
      show={props.isOpen}
      onHide={props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">OOOps!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FontAwesomeIcon className="fa-lg" icon={faExclamationCircle} />
        <h4>Something went wrong!</h4>
        <p>The page did not load correctly!</p>
      </Modal.Body>
    </Modal>
  );
};

export default ErrorModal;
