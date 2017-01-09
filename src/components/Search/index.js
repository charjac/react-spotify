import React, { PureComponent, PropTypes } from 'react'
import styles from './index.css'

class Search extends PureComponent {
  static propTypes = {
    onSearch: PropTypes.func
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.onSearch(this.state.query)
  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <form className={styles.Search} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" onChange={this.handleChange} value={this.state.query} placeholder="Search" />
        </div>
      </form>
    )
  }
}

export default Search
