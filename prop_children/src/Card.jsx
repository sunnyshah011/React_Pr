import React from 'react'

function Card({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>This is a modal content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Card
