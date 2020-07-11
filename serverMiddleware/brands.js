import brands from './_brands'

export default {
  path: '/api/brands',
  handler(_req, res) {
    res.end(JSON.stringify(brands))
  },
}
