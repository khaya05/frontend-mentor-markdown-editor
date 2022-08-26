import documentIcon from '../assets/icon-document.svg';

import './FileIcon.css';

const FileIcon = () => {
  return (
    <div className="document-icon">
      <img src={documentIcon} alt="document icon" />
    </div>
  );
};

export default FileIcon;
