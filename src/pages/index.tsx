import React, { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [userInput, setUserInput] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const initialBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  
  const board = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  //-1 ->石
  //0 ->画像なしセル
  //1~8 ->数字セル
  //9 ->石＋はてな
  //10 ->石＋旗
  //11 ->ボムセル
  let faceCount = 12;
  const clickCell = (x: number, y: number) => {
    const newBombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
    const newUserInput: number[][] = JSON.parse(JSON.stringify(userInput));
    newUserInput[y][x] = 1;
    setUserInput(newUserInput);

    let BombExist = false;
    for (const row of bombMap) {
      for (const cell of row) {
        if (cell === 1) {
          BombExist = true;
          break;
        }
      }
    }
    const SetBomb = () => {
      let Bombcount = 0;
      while (Bombcount < 10) {
        const randomY = Math.floor(Math.random() * 9);
        const randomX = Math.floor(Math.random() * 9);
        if (newBombMap[randomY][randomX] !== 1 && randomX !== x && randomY !== y) {
          newBombMap[randomY][randomX] = 1;
          Bombcount++;
        }
      }
      setBombMap(newBombMap);
    };
    if (!BombExist) {
      SetBomb();
    }
  };
  const rightClick = (x: number, y: number, event: React.MouseEvent) => {
    const newUserInput: number[][] = JSON.parse(JSON.stringify(userInput));
    event.preventDefault(); // デフォルトの右クリックメニューを無効化
    console.log('Right click is triggered');
    if (userInput[y][x] !== 10) {
      newUserInput[y][x] = 10;
    } else {
      newUserInput[y][x] = -1;
    }
    setUserInput(newUserInput);
  };

  const around8 = (x: number, y: number) => {
    const offsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    let around_bomb_count = 0;
    if (bombMap[y][x] === 1) {
      bombMap.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (bombMap[rowIndex][cellIndex] === 1) {
            board[rowIndex][cellIndex] = 11;
            faceCount = 14;
          }
        });
      });
      board[y][x] = 15
    } else {
      for (const [dx, dy] of offsets) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
          if (bombMap[ny][nx] === 1) {
            around_bomb_count++;
          }
          board[y][x] = around_bomb_count;
        }
      }
    }
    if (board[y][x] === 0) {
      for (const [dx, dy] of offsets) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length && board[ny][nx] === -1) {
          around8(nx, ny);
        }
      }
    }
  };
  userInput.map((row, y) => {
    row.map((cell, x) => {
      if (userInput[y][x] === 1) {
        around8(x, y);
      }
      if (userInput[y][x] > 8) {
        board[y][x] = userInput[y][x];
      }
    });
  });
  let gameEndCount = 0
  board.map((row, y) => {
    row.map((cell, x) => {
      if (board[y][x] !== -1) {
        gameEndCount++
        if(gameEndCount === 81) {
          faceCount = 13
        }
      }
    })
  })
  const handleFaceClick = () => {
    setUserInput(initialBoard)
    setBombMap(initialBoard)
  };
  console.table(board)
  return (
    <div className={styles.container}>
      <div
        className={styles.face}
        onClick={() => handleFaceClick()}
        style={{ backgroundPosition: faceCount * -30 + 30 }}
      />
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((block, x) => (
            <div
              className={block === -1 ? styles.cell_block : styles.cell}
              key={`${x}-${y}`}
              onClick={() => clickCell(x, y)}
              onContextMenu={(event) => rightClick(x, y, event)}
            >
              {block !== -1 && (
                <div
                  className={styles.stone_type1}
                  style={{ 
                    backgroundPosition: (block === 15) ? 11 * -30 + 30:block * -30 + 30 ,
                    backgroundColor: (block === 15) ? 'red' : undefined
                  }}
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
