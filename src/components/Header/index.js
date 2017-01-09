import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
import Search from '../Search'

import styles from './index.css'

class Header extends PureComponent {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSearch(query) {
    this.context.router.push(`/search/${query}`)
  }

  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
  }

  render() {
    return (
      <div className={styles.Header}>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to='/' className='navbar-brand'>Spotify --</Link>
            </div>
              <ul className="nav navbar-nav navbar-right">
                <li><Search onSearch={this.handleSearch} /></li>
                <li><a href="#">Signin</a></li>
              </ul>
            </div>
          </nav>
      </div>
    )
  }
}

export default Header
