import products from './_products'

export default {
  path: '/api/products',
  handler(_req, res) {
    res.end(JSON.stringify(products))
  },
}
