import recommendations from './_recommendations'

export default {
  path: '/api/recommendations',
  handler(_req, res) {
    res.end(JSON.stringify(recommendations))
  },
}
