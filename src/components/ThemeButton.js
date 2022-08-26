import dark from '../assets/icon-dark-mode.svg'
import light from '../assets/icon-light-mode.svg'
import './ThemeButton.css'

const ThemeButton = () => {
  return (
    <div className='theme-toggle-container'>
      <div>
        <img src={dark} className="theme-icon" />
      </div>
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        <img src={light} className="theme-icon" />
      </div>
    </div>
  );
}

export default ThemeButton