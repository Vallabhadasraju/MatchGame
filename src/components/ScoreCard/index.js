import './index.css'

const ScoreCard = ({score, onPlayAgain}) => (
  <div className="score-card-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      alt="trophy"
      className="trophy"
    />
    <p className="your-score-text">YOUR SCORE</p>
    <p className="final-score">{score}</p>
    <button type="button" className="play-again-button" onClick={onPlayAgain}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        alt="reset"
        className="reset-icon"
      />
      PLAY AGAIN
    </button>
  </div>
)

export default ScoreCard
