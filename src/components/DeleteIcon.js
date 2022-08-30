import deleteIcon from '../assets/icon-delete.svg';

import './DeleteIcon.css'

const DeleteIcon = ({toggleModal}) => {
  return (
    <button className="delete-btn" onClick={() => toggleModal()}>
      <img src={deleteIcon} alt="delete" />
    </button>
  );
};

export default DeleteIcon;
