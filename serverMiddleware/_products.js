import { v4 as uuidv4 } from 'uuid'
import { LoremIpsum } from 'lorem-ipsum'

import brands from './_brands'
import categories from './_categories'
import colours from './_colours'

const lorem = new LoremIpsum()

const create = () => ({
  brand: brands[Math.floor(Math.random() * brands.length)],
  category: categories[Math.floor(Math.random() * categories.length)],
  colours: colours.reduce((acc, val) => {
    if (Math.random() > 0.5) acc.push(val)
    return acc
  }, []),
  description: lorem.generateSentences(2),
  image: 'https://placehold.it/100x100&text=00',
  images: [
    'https://placehold.it/100x100&text=01',
    'https://placehold.it/100x100&text=02',
    'https://placehold.it/100x100&text=03',
    'https://placehold.it/100x100&text=04'
  ],
  name: lorem.generateWords(2),
  price: Number(50 + Math.random() * 450).toFixed(2),
  uuid: uuidv4(),
  version: `v.${Number(Math.random() * 5).toFixed(2)}`,
})

const products = new Array(240).fill(null).map(() => create())

export default products
