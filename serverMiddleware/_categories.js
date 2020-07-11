import { v4 as uuidv4 } from 'uuid'
import { LoremIpsum } from 'lorem-ipsum'
const lorem = new LoremIpsum()

const create = () => ({
  name: lorem.generateWords(2),
  uuid: uuidv4(),
})

const categories = new Array(17).fill(null).map(() => create())

export default categories
