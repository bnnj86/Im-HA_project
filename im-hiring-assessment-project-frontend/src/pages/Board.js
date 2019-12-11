import React from 'react';
import GoHome from '../component/GoHome';

const Board = ({ match }) => {
  return (
    <div>
      <GoHome />
      <h2>보드 {match.params.list}</h2>
    </div>
  );
};

export default Board;