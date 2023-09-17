import React, { ReactNode } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";

// define props for the Modal component

interface ModalProps {
  onClose?: () => void; // optional function to close the modal
  children?: ReactNode; // content to be displayed within the modal
}

// backdrop component represents the semi-transparent background of the modal

const Backdrop: React.FC<ModalProps> = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose} />; // close modal on click
};

// modalOverlay component represents the actual content of the modal

const ModalOverlay: React.FC<ModalProps> = ({ children }) => {
  return <div className="modal">{children}</div>; // render modal content
};

// modal component combines Backdrop and ModalOverlay

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <>
      {/* use createPortal to render Backdrop outside the normal DOM hierarchy */}

      {createPortal(
        <Backdrop onClose={onClose} />, // pass onClose function to Backdrop
        document.getElementById("overlays")! // render in the "overlays" DOM element
      )}

      {/* use createPortal to render ModalOverlay outside the normal DOM hierarchy */}

      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>, // render children within ModalOverlay
        document.getElementById("overlays")! // render in the "overlays" DOM element
      )}
    </>
  );
};

export default Modal;
