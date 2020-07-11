import products from './_products'

const start = Math.floor(Math.random() * products.length)
const end = start + 4 + Math.floor(Math.random() * 4)
const trending = products.slice(start, end)

export default trending
