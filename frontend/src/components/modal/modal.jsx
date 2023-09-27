import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '20px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const BUTTON_CONTAINER = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
};

const BUTTON_STYLE = {
  padding: '8px 12px',
  marginRight: '10px',
  cursor: 'pointer',
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div className= "modal-container" style={MODAL_STYLES}>
        <div style={BUTTON_CONTAINER}>
          <button  className="button-modal" style={BUTTON_STYLE} onClick={onClose}>
            
          </button>
        </div>

       
        <div>{children}</div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
