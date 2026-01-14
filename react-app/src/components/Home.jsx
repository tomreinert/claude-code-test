import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <h1>Hello, World!</h1>
      <div className="poem">
        <p>
          In lines of code, a world takes shape,<br />
          From nothing more than thought and tape.<br />
          The cursor blinks, the logic flows,<br />
          A digital garden softly grows.<br />
          <br />
          Each function holds a quiet dream,<br />
          Of something more than what things seem.<br />
          Hello, world! — the first we say,<br />
          As we begin to find our way.
        </p>
        <p className="author">— A Coder's Greeting</p>
      </div>
      <Link to="/game" className="game-link">
        Play Tic-Tac-Toe
      </Link>
    </div>
  )
}

export default Home
