import files from '../current-files'
import FileIcon from './FileIcon';

import './AsideDocumentsInfo.css';
import OrangeBtn from './UI/OrangeBtn';

const AsideDocumentsInfo = () => {
  return (
    <div className='docs-info'>
      <h3>my documents</h3>
      <OrangeBtn>+ new document</OrangeBtn>
      <section className='current-docs'>
        {files.map(item => {
          const { date, title, id } = item;
          return (
            <div className='file-block' key={id}>
              <div className='icon-container'>
                <FileIcon />
              </div>
              <div className='file-info-container'>
                <p className='date'>{date}</p>
                <p className='file-name'>{title}</p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default AsideDocumentsInfo