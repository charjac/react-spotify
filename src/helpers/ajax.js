export const ajax = (httpParams) => {
  return window.fetch(httpParams.url)
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err)
    })
}
