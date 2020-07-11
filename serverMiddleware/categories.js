import categories from './_categories'

export default {
  path: '/api/categories',
  handler(_req, res) {
    res.end(JSON.stringify(categories))
  },
}
