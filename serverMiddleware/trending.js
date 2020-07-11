import trending from './_trending'

export default {
  path: '/api/trending',
  handler(_req, res) {
    res.end(JSON.stringify(trending))
  },
}
