import './index.css'
import {Component} from 'react'

class Login extends Component {
  state = {checkBoxClicked: false, usernameInput: '', passwordInput: ''}

  onClickCheckBox = () => {
    this.setState(prevState => ({checkBoxClicked: !prevState.checkBoxClicked}))
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {usernameInput, passwordInput} = this.state
    const userDetails = {usernameInput, passwordInput}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const {checkBoxClicked} = this.state
    return (
      <div className="bgContainer">
        <form className="loginForm" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="logoImage"
          />
          <div className="inputContainer">
            <label htmlFor="username" className="labelText">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="inputBox"
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password" className="labelText">
              PASSWORD
            </label>
            <input
              type={checkBoxClicked ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className="inputBox"
              onChange={this.onChangePassword}
            />
          </div>

          <div className="checkBoxContainer">
            <input
              type="checkbox"
              id="checkBox"
              onClick={this.onClickCheckBox}
            />
            <label htmlFor="checkBox">Show Password</label>
          </div>
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
