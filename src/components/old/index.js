import { ajax } from 'helpers/ajax'


constructor(props) {
  super(props)

  this.state = {
    searchResults: []
  }
}

ajax({
  url: `https://api.spotify.com/v1/search?query=${query}&offset=0&limit=20&type=artist&market=US`
})
  .then((data) => {
    this.setState({
      searchResults: data.artists.items
    })
  })


render() {
  return (
    <div>
      {
        this.state.searchResults.map((result) => {
          return (
            <div>
              {result.name}
            </div>
          )
        })
      }
    </div>
  )
}



