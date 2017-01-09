const serialize = function(obj) {
  const str = []
  for(let p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  return str.join('&')
}


export const ajax = (request) => {
  return window.fetch('https://api.spotify.com/v1' + request.url + (request.params ? '?' + serialize(request.params) : ''))
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err)
    })
}
