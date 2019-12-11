import React from "react";
import GoHome from '../component/GoHome';
import data from '../data/UserData';
import { Link } from 'react-router-dom';

const Todo = (props) => {
  return (
    <div>
      <GoHome />
      <h2>Todo</h2>
      <table>
        <tbody>
          유저리스트
          {data.map(user => (     
            <tr>       
            <Link to={"/User/" + user.id}>{user.name}</Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;