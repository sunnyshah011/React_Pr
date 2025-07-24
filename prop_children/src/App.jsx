import React, { useState } from 'react'
import Card from './Card'

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Card isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App
