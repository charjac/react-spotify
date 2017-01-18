import React, {PureComponent, PropTypes} from 'react'

import Header from 'components/Header'
import Sidebar from 'containers/Sidebar'

import styles from './index.css'

class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
    <div className={styles.App}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {this.props.children}
      </div>
    </div>
    )
  }
}

export default App
