import React, { useState } from 'react';
import '../styles/Matrix.css';

const Matrix = () => {
  const initialGrid = Array(9).fill(null);
  const [clickedCells, setClickedCells] = useState([]);

  const handleCellClick = (index) => {
    if (clickedCells.some(cell => cell.index === index) || clickedCells.length === 9) {
      return;
    }

    const newClickedCells = [...clickedCells, { index, order: clickedCells.length + 1 }];
    setClickedCells(newClickedCells);

    if (newClickedCells.length === 9) {
      changeToOrangeSequentially(newClickedCells);
    }
  };

  const changeToOrangeSequentially = async (cells) => {
    const sortedCells = [...cells].sort((a, b) => a.order - b.order);
    for (const cell of sortedCells) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setClickedCells(prev => 
        prev.map(c => 
          c.index === cell.index ? { ...c, color: 'orange' } : c
        )
      );
    }
  };

  const getCellColor = (index) => {
    const cell = clickedCells.find(c => c.index === index);
    if (!cell) return 'white';
    return cell.color === 'orange' ? 'orange' : 'green';
  };

  const handleRestart = () => {
    setClickedCells([]);
  };

  return (
    <div className="container">
      {/* Sidebar with description and steps */}
      <div className="sidebar">
        <h3>Matrix Game</h3>
        <p>A fun 3x3 grid challenge.</p>
        <p>Click to test your skills!</p>
        <h4>Steps to Play:</h4>
        <ol>
          <li>Click any cell to turn it green.</li>
          <li>Fill all 9 cells one by one.</li>
          <li>On the 9th click, watch them turn orange in order.</li>
          <li>Hit "Restart" to play again!</li>
        </ol>
      </div>

      <div className="game-area">
        <div className="matrix">
          {initialGrid.map((_, index) => (
            <div
              key={index}
              className="cell"
              style={{ backgroundColor: getCellColor(index) }}
              onClick={() => handleCellClick(index)}
            />
          ))}
        </div>
        <button onClick={handleRestart}>Restart Game</button>
      </div>
    </div>
  );
};

export default Matrix;