import './OrangeBtn.css'

const OrangeBtn = ({children, handleClick}) => {
  return <button className="btn" onClick={() => handleClick}>{children }</button>;
};

export default OrangeBtn;
