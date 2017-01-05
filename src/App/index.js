import React, {PureComponent} from 'react'
import styles from './index.css'

class App extends PureComponent {

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className='navbar-brand' href="#">Spotify --</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <input className="form-control" type="search" placeholder="Search"/>
                </li>
                <li><a href="#">Signin</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <div className={styles.sidebar}>

        </div>
        <div className={styles.main}>
          Hello world
        </div>
      </div>
    )
  }
}

export default App
