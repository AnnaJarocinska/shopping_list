import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (  
        <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/making_list">Make list</Link>
                </li>
                <li>
                  <Link to="/adding_recipent">Add recipent</Link>
                </li>
                <li>
                  <Link to="/sending_list">Send list</Link>
                </li>
              </ul>
            </nav>
    );
}
 
export default Navigation;