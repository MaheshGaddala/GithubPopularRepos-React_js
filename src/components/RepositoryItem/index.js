// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryDetails

  return (
    <li className="repo-list-item-container">
      <img className="avatar-image" src={avatarUrl} alt={name} />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-count-container">
        <img
          className="count-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="repo-count-description">{starsCount} stars</p>
      </div>
      <div className="repo-count-container">
        <img
          className="count-icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="repo-count-description">{forksCount} forks</p>
      </div>
      <div className="repo-count-container">
        <img
          className="count-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="repo-count-description">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
