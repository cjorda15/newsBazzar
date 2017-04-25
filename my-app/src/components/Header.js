import React from 'react'

function Header(){
  return (
    <header className= "header-container">
      <nav className = "header-nav">
        <ul className ="nav-link-container">
          <li className = "nav-list-home nav-list-item">
            <div className ="home-icon nav-icon">
            </div>
            <a className = "nav-link" href="#">home</a>
          </li>
          <li className = "nav-list-contact nav-list-item">
          <div className ="contact-icon nav-icon">
          </div>
            <a className = "nav-link" href="#">contact</a>
          </li>
          <li className = "nav-list-about-me nav-list-item">
          <div className ="about-me-icon nav-icon">
          </div>
            <a className = "nav-link" href="#">About me</a>
          </li>
        </ul>
      </nav>
      <div className= "header-title">
        <h1>Jordan & <span>Jordan</span></h1>
        <h3><span>Your renting</span> headaches are over</h3>
      </div>
    </header>
  )
}







export default Header
