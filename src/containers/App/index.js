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
                <a className="navbar-brand" href="#">Spotify --</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <div className="Search">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                  </div>
                </li>
                <li><a href="#">Signin</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <aside className={styles.sidebar}>
          <div>
            <h6 className={styles.title}>Ma musique</h6>
            <a href="/" className={styles.link} >Tous</a>
            <a href="/category/rock" className={styles.link}>Rock</a>
            <a href="/category/pop" className={styles.link}>Pop</a>
            <a href="/category/electro" className={styles.link}>Electro</a>
            <a href="/category/latina" className={styles.link}>Latina</a>
            <a href="/category/rap" className={styles.link}>Rap</a>

            <h6 className={styles.title}>Playlist</h6>
            <a className={styles.link} href="#">Ma musique</a>
            <a className={styles.link} href="#">2016</a>
          </div>
        </aside>
        <div className={styles.main}>
          Hello world
        </div>
      </div>
    )
  }
}

export default App
