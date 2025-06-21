import './index.css'

const ThumbnailsList = ({imagesList, onClickThumbnail}) => (
  <ul className="thumbnails-list">
    {imagesList.map(({id, thumbnailUrl}) => (
      <li key={id}>
        <button
          type="button"
          className="thumbnail-button"
          onClick={() => onClickThumbnail(id)}
        >
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        </button>
      </li>
    ))}
  </ul>
)

export default ThumbnailsList
