import colours from './_colours'

export default {
  path: '/api/colours',
  handler(_req, res) {
    res.end(JSON.stringify(colours))
  },
}
