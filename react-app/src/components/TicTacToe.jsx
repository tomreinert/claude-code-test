import { useState } from 'react'
import { Link } from 'react-router-dom'
import './TicTacToe.css'

function Square({ value, onClick, isWinner }) {
  return (
    <button
      className={`square ${isWinner ? 'winner' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

function Board({ squares, onClick, winningLine }) {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClick={() => onClick(i)}
          isWinner={winningLine && winningLine.includes(i)}
        />
      ))}
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diagonals
  ]
  for (let line of lines) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line }
    }
  }
  return null
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const result = calculateWinner(squares)
  const winner = result?.winner
  const winningLine = result?.line
  const isDraw = !winner && squares.every(s => s !== null)

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (isDraw) {
    status = "It's a draw!"
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  function handleClick(i) {
    if (squares[i] || winner) return
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  function resetGame() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <Board
        squares={squares}
        onClick={handleClick}
        winningLine={winningLine}
      />
      <button className="reset-btn" onClick={resetGame}>
        New Game
      </button>
      <div className="back-link">
        <Link to="/">&larr; Back to Home</Link>
      </div>
    </div>
  )
}

export default TicTacToe
