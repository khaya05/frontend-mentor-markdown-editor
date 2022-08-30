import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import OrangeBtn from './UI/OrangeBtn';

import './DeleteModal.css';

const Modal = ({ showModal, toggleModal }) => {
  return (
    <div
      className={`modal-overlay ${showModal ? 'open-modal' : ''}`}
      onClick={toggleModal}
    >
      <div className="modal-container">
        <h3 className="modal-title">delete this document?</h3>
        <p>
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <OrangeBtn>confirm & delete</OrangeBtn>
      </div>
    </div>
  );
};

const DeleteModal = ({ showModal, toggleModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modal showModal={showModal} toggleModal={toggleModal} />,
        document.querySelector('#modal')
      )}
    </Fragment>
  );
};

export default DeleteModal;
