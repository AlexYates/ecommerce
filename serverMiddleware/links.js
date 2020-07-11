import links from './_links'

export default {
  path: '/api/links',
  handler(_req, res) {
    res.end(JSON.stringify(links))
  },
}
