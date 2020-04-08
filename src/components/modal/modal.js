// @flow
import React, { type Node } from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

type Props = {|
  +isShowing: boolean,
  +onClose: () => void,
  children?: Node | string,
|};

function Modal(props: Props) {
  const { isShowing, onClose, children } = props;

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;
}

export default Modal;
