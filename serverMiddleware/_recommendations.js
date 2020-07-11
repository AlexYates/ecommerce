import products from './_products'

const start = Math.floor(Math.random() * products.length)
const end = start + 8
const recommendations = products.slice(start, end)

export default recommendations
