import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
      <div className="buttons">
        <button className ="todoButton">
          <Link to="/Todo">Todo</Link>
        </button>
        <button className = "boardButton">
        <Link to="/Board">Board</Link>
        </button>
      </div>
    );
};

export default Menu;