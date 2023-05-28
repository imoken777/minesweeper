import {useState} from 'react';
import styles from './index.module.css';
import React, { useEffect } from 'react';


const Home = () => {
  const [bombMap,setBombMap] = useState([
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
    const newBombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
    const newUserInput: number[][] = JSON.parse(JSON.stringify(UserInput));
    newUserInput[y][x] = 1;
    setUserInput(newUserInput);

    let BombExist = false; 
    for (const row of bombMap) {
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
      console.table(newBombMap);

    }
    if (!BombExist) {
      SetBomb()
    }
  };
  
  const around8 = (x: number, y: number) => {
    const offsets = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    let around_bomb_count = 0
    for (let [dx, dy] of offsets) {
      let nx = x + dx
      let ny = y + dy
      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
        if (bombMap[ny][nx] === 1) {
          around_bomb_count ++
        }
        board[y][x] = around_bomb_count;
      }
    }
    if (board[y][x] === 0) {
      for (let [dx, dy] of offsets) {
        let nx = x + dx
        let ny = y + dy
        if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length && board[ny][nx] === -1) {
          around8(nx,ny)
        }
      }
    }
  }
  UserInput.map((row,y)=>
  {row.map((cell,x)=>
    {if (UserInput[y][x] === 1) {
      around8(x,y)
     }
    })
  }) 
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
