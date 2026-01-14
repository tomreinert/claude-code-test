import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TicTacToe from './components/TicTacToe'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<TicTacToe />} />
      </Routes>
    </Router>
  )
}

export default App
