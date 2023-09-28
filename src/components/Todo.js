import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true)
        console.log('Clicked.');
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {/* { ModalIsOpen ? <Modal /> : null } */}
      { modalIsOpen && <Modal /> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
    </div>
  );
}

export default Todo;
