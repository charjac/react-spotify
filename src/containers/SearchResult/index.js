import React, { PureComponent, PropTypes } from 'react'
import { ajax } from 'helpers/ajax'

import SearchItem from 'components/SearchItem'

class SearchResult extends PureComponent {
  static propTypes = {
    params: PropTypes.shape({
      query: PropTypes.string
    })
  }

  fetchSearch(query) {
    ajax({
      url: `/search`,
      params: {
        query,
        offset: 0,
        limit: 20,
        type: 'artist',
        market: 'US'
      }
    })
      .then((data) => {
        this.setState({
          searchResults: data.artists.items
        })
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      searchResults: []
    }
  }

  componentDidMount() {
    this.fetchSearch(this.props.params.query)
  }

  componentWillReceiveProps(props) {
    this.fetchSearch(props.params.query)
  }

  render() {
    console.log(this.state.searchResults)
    return (
      <div>
        {
          this.state.searchResults.map((result) => {
            return (
              <SearchItem item={result} />
            )
          })
        }
      </div>
    )
  }
}

export default SearchResult
