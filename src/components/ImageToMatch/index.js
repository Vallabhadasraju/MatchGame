import './index.css'

const ImageToMatch = ({imageUrl}) => (
  <div className="match-image-container">
    <img src={imageUrl} alt="match" className="match-image" />
  </div>
)

export default ImageToMatch
