const product = (name) => ({
  name,
  path: `/products?category=${name}`
})

const links = [
  'Women',
  'Men',
  'Kids',
  'Home',
  'Sale',
].map((name) => product(name))

export default links
