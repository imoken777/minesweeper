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
  
  const clickCell = (x: number, y: number) => {
    const newBombMap: number[][] = JSON.parse(JSON.stringify(BombMap));
    const newUserInput: number[][] = JSON.parse(JSON.stringify(UserInput));
    newUserInput[y][x] = 1;
    setUserInput(newUserInput);

    let BombExist = false; 
    for (const row of BombMap) {
      for (const cell of row) {
        if (cell === 1) {
          BombExist = true
          break
        }
      }
    };
    const SetBomb = () => {
      let Bombcount = 0
      while (Bombcount < 10) {
        let randomY = Math.floor(Math.random()*9)
        let randomX = Math.floor(Math.random()*9)
        if (newBombMap[randomY][randomX] !== 1) {
          newBombMap[randomY][randomX] = 1
          Bombcount ++
        }
      }
      setBombMap(newBombMap);
    }
    if (!BombExist) {
      SetBomb()
    }
  };
  
  const around8 = () => {
    const offsets = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    let around_bomb_count = 0
    for (let row of UserInput) {
      for (let cell of row) {
        for (let [dx, dy] of offsets) {
          let nx = cell + dx
          let ny = cell + dy
          if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
            if (BombMap[ny][nx] === 1) {
              around_bomb_count ++
            }
          }
        }
      }
    }
    return around_bomb_count;
  }
  console.table(board);
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row,y) =>
          row.map((block,x) => (
              <div className={block === -1 ? styles.cell_block : ""} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
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
