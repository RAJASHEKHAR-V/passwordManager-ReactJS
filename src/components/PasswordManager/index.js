import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PassowordItem'

import './index.css'

const colorsList = [
  'orange',
  'green',
  'tiger-orange',
  'teal',
  'dark-red',
  'white',
  'sky-blue',
  'grey',
]

class PasswordManager extends Component {
  state = {
    userDetailsList: [],
    websiteName: '',
    userName: '',
    userPassword: '',
    searchInput: '',
    isCheckBoxTicked: false,
  }

  onAddButton = event => {
    event.preventDefault()
    const {websiteName, userName, userPassword} = this.state
    const colorClass =
      colorsList[Math.ceil(Math.random() * (colorsList.length - 1))]
    const newUserDetails = {
      id: uuidv4(),
      websiteName,
      userName,
      userPassword,
      colorClass,
    }

    this.setState(prevState => ({
      userDetailsList: [...prevState.userDetailsList, newUserDetails],
      websiteName: '',
      userName: '',
      userPassword: '',
    }))
  }

  onCheckbox = event => {
    this.setState({isCheckBoxTicked: event.target.checked})
  }

  onDeleteIcon = id => {
    this.setState(prevState => ({
      userDetailsList: prevState.userDetailsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  onChangeOfWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeOfUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeOfPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  onChangeOfSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filterDetails = () => {
    const {userDetailsList, searchInput} = this.state
    const filterList = userDetailsList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filterList
  }

  render() {
    const {
      websiteName,
      userName,
      userPassword,
      searchInput,
      isCheckBoxTicked,
    } = this.state
    const filterUserDetailsList = this.filterDetails()
    const passwordCount = filterUserDetailsList.length

    return (
      <div className="bg-container">
        <div className="log-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
        </div>
        <div className="user-details-manager-card">
          <div className="user-card">
            <h1 className="add-password-heading">Add New Password</h1>
            <form className="form-el" onSubmit={this.onAddButton}>
              <div className="input-card">
                <div className="logo-card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="logo"
                    alt="website"
                  />
                </div>
                <input
                  placeholder="Enter Website"
                  type="text"
                  className="input"
                  value={websiteName}
                  onChange={this.onChangeOfWebsiteName}
                />
              </div>
              <div className="input-card">
                <div className="logo-card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="logo"
                    alt=" username"
                  />
                </div>
                <input
                  placeholder="Enter Username"
                  type="text"
                  className="input"
                  value={userName}
                  onChange={this.onChangeOfUserName}
                />
              </div>
              <div className="input-card">
                <div className="logo-card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="logo"
                    alt="password"
                  />
                </div>
                <input
                  placeholder="Enter Password"
                  type="password"
                  className="input"
                  value={userPassword}
                  onChange={this.onChangeOfPassword}
                />
              </div>
              <div className="align-button">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <picture className="picture">
            <source
              media="(max-width:767px)"
              srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
            <source
              media="(min-width:768px)"
              srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
            <img className="password-manager-img" alt="password manager" />
          </picture>
        </div>
        <div className="password-item-manager-card">
          <div className="password-count-search-input-card">
            <div className="password-count-card">
              <h1 className="password-para">Your Passwords</h1>
              <p className="password-count">{passwordCount}</p>
            </div>
            <div className="search-input-card">
              <div className="search-img-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="search-image"
                  alt="search"
                />
              </div>
              <input
                placeholder="Search"
                type="search"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeOfSearchInput}
              />
            </div>
          </div>
          <hr className="horizontal-rule" />
          <div className="checkbox-card">
            <input
              type="checkbox"
              className="check-box"
              id="check"
              onClick={this.onCheckbox}
            />
            <label htmlFor="check" className="checkbox-label">
              Show Passwords
            </label>
          </div>
          {filterUserDetailsList.length > 0 ? (
            <ul className="password-item-card">
              {filterUserDetailsList.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  passwordItem={eachItem}
                  isCheckBoxTicked={isCheckBoxTicked}
                  onDeleteIcon={this.onDeleteIcon}
                />
              ))}
            </ul>
          ) : (
            <div className="no-password-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="no-password-image"
                alt="no passwords"
              />
              <p className="no-password-para">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
