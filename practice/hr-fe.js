function getMovieTitles(substr) {
  function getTitles() {}
  https
    .get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, res => {
      console.log('statusCode:', res.statusCode)
      console.log('headers:', res.headers)

      res.on('data', d => {})
    })
    .on('error', e => {
      console.error(e)
    })
}
