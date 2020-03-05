import React from 'react'
import { Link } from 'gatsby'

import github from '../img/github-icon.svg'
import instagram from '../img/social/instagram.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container ">
            <div className="columns">
              <div className="column is-12">
                <section className="menu">
                    <div className="columns">
                      <div class="column has-text-centered">
                        <Link to="/" className="navbar-item is-inline">
                          Home
                        </Link>
                        <Link className="navbar-item is-inline" to="/about">
                          About
                        </Link>
                        <Link className="navbar-item is-inline" to="/projects">
                          Projects
                        </Link>
                      </div>
                    </div>
                </section>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4"></div>
              <div className="column is-4 social has-text-centered">
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/maxlindig/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4"></div>
              <div className="column is-4 has-text-centered text-is-black">
                <span>Made with ❤️ in Gatsby.js</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
