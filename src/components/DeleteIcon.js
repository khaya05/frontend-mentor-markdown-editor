import deleteIcon from '../assets/icon-delete.svg';

import './DeleteIcon.css'

const DeleteIcon = () => {
  return (
    <button className="delete-btn">
      <img src={deleteIcon} alt="delete" />
    </button>
  );
};

export default DeleteIcon;
