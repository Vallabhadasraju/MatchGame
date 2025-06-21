import './index.css'

const Navbar = ({score, time}) => (
  <nav className='navbar'>
    <img
      src='https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
      alt='website logo'
      className='logo'
    />
    <ul className='navbar-info'>
      <li>
        <p className='score'>
          Score: <span>{score}</span>
        </p>
      </li>
      <li className='timer-box'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png'
          alt='timer'
          className='timer-icon'
        />
        <p className='timer'>{time} sec</p>
      </li>
    </ul>
  </nav>
)

export default Navbar
