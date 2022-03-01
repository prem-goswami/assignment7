import './index.css'

const Header = () => (
  <div className="headerContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="website logo"
    />
    <div className="optionsContainer">
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
      </button>
      <button type="button">Logout</button>
    </div>
  </div>
)

export default Header
