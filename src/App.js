import React from 'react';
import Matrix from './components/Matrix';
import './styles/Matrix.css';

function App() {
  return (
    <div className="App">
      <div className='heading'>
      <h1 className=''>3x3 Matrix Game <a href='https://github.com/Vimal2023/3x3-Matrix-Game'target="_blank" rel="noreferrer"><span className='me'>(CODE)</span></a></h1>
      <h2 className='second'>develop by <a href='https://portfolio-c-vimal-anand.vercel.app/' target="_blank" rel="noreferrer"><span className='me' >@Vimal-Anand</span></a></h2>
      </div>
      <Matrix />
    </div>
  );
}

export default App;