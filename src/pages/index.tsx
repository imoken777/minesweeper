import {useState} from 'react';
import styles from './index.module.css';

const Home = () => {
  const [board,setBoard] = useState([
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,2,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ]);
  const clickCell = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
  }
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row,y) =>
          row.map((color,x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
              {color !== 0 && (
                <div 
                  className={styles.stone}
                  style={{background: color === 1 ? "~/asset/images/icon.png" : '~/asset/images/icon.png'}}/>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
