import { useState } from "react";
import "./Modal.scss";
function Modal() {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  return (
    <>
      <button onClick={open}>Click</button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <button className="modal__close" onClick={close}>
              X
            </button>
            <div className="modal__content">Nội dung ...</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
