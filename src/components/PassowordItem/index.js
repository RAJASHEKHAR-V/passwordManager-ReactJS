import './index.css'

const PasswordItem = props => {
  const {passwordItem, isCheckBoxTicked, onDeleteIcon} = props
  const {id, websiteName, userName, userPassword, colorClass} = passwordItem
  const onDelete = () => {
    onDeleteIcon(id)
  }
  const addPassword = isCheckBoxTicked ? (
    <p className="user-password">{userPassword}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="start-image"
      alt="stars"
    />
  )
  const websiteFirstLetter = websiteName.slice(0, 1)
  return (
    <li className="password-item">
      <div className="user-details-card">
        <p className={`website-first-letter ${colorClass}`}>
          {websiteFirstLetter}
        </p>
        <div className="user-details">
          <p className="website-name">{websiteName}</p>
          <p className="user-name">{userName}</p>
          {addPassword}
        </div>
      </div>
      <div>
        <button
          className="delete-button"
          type="submit"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
