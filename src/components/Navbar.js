import React from 'react'
import { Link } from 'gatsby'
import twitter from '../img/twitter-icon.svg'
import logo from '../img/robbie-pike-logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Robbie Pike" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://twitter.com/RunMtns4Life"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
