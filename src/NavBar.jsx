import { Link } from 'react-router-dom';
import "./NavBar.css"


export default function NavBar(){

  return (
    <div className="App">
      <nav>
        <ul className="squircles">
          <li className="squircle white-one"></li>
          <li className="divider"></li>
          <li className="squircle purple-one">
            <div className="popup">
              <h4 className="popup-text">JAM HQ</h4>
            </div>
          </li>
          <li className="squircle purple-one">
            <div className="popup">
              <h4 className="popup-text">CREW</h4>
            </div>
          </li>
          <li className="squircle green-one">
            <div className="popup">
              <h4 className="popup-text">GYM SQUAD</h4>
            </div>
          </li>
          <li className="squircle green-one">
            <div className="popup">
              <h4 className="popup-text">CODERS</h4>
            </div>
          </li>
          <li className="squircle purple-one">
            <div className="popup">
              <h4 className="popup-text">THE DEFTONES</h4>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}