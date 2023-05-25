import {useState} from 'react';
import styles from './index.module.css';
import React, { useEffect } from 'react';


const Home = () => {
  const [BombMap,setBombMap] = useState([
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ]);
  const [UserInput,setUserInput] = useState([
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ]);
  const board = [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  ];
  //-1 ->石
  //0 ->画像なしセル
  //1~8 ->数字セル
  //9 ->石＋はてな
  //10 ->石＋旗
  //11 ->ボムセル  

  useEffect(() => {
    console.log(BombMap);
  }, [BombMap]);
  

  const clickCell = (x: number, y: number) => {
    const newBombMap: number[][] = JSON.parse(JSON.stringify(BombMap));
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    const newUserInput: number[][] = JSON.parse(JSON.stringify(UserInput));
    newUserInput[y][x] = -1;
    setUserInput(newUserInput);
//機能してない
    for(const row of UserInput) {
      for (const cell of row) {
        if (cell === -1) {
          for (let i = 0; i < 10; i++) {
            newBombMap[Math.floor(Math.random()*9)][Math.floor(Math.random()*9)] = 1
          setBombMap(BombMap);
          }
        };
      }
    }
};
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row,y) =>
          row.map((block,x) => (
            <div className={styles.cell_block} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
              {block !== -1 && (
                <div 
                  className={styles.stone_type1}
                  style={{ backgroundPosition: (block * -30)+30}}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default Home;
