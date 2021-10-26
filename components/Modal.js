import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ cn, show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true));

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="modal p-5">
      <div className="modal-content rounded-xl overflow-hidden bg-white max-w-xl justify-self-center">
        <div></div>
        <div
          className={`${title && 'bg-primary-200 text-white'} header px-3 p-2`}
        >
          <div className="relative">
            <a className="absolute right-0" href="#" onClick={handleClose}>
              <FaTimes className="text-xl" />
            </a>
          </div>
          {title && <div>{title}</div>}
        </div>
        <div className="modal-body px-3 py-3 ">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}

// https://devrecipes.net/modal-component-with-next-js/
