import saveIcon from '../assets/icon-save.svg';
import OrangeBtn from './UI/OrangeBtn';

import './SaveChangesBtn.css';
import FileIcon from './FileIcon';
const SaveChangesBtn = () => {
  const saveChanges = () => {
    console.log('changes saved');
  };

  return (
    <OrangeBtn>
      <img src={saveIcon} alt="save-icon" className="save-icon" />
      <span className="save-changes">save changes</span>
    </OrangeBtn>
  );
};

export default SaveChangesBtn;
// <button className="save-btn">
//   <img src={saveIcon} alt="save" />
// </button>
