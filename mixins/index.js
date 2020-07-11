/**
 * formatCurrency
 * @param {Array|String} locales
 * @param {String} currency
 * @param {String|Number} value
 */
const formatCurrency = (locales, currency, value) =>
  Intl.NumberFormat(locales, { currency, style: 'currency' }).format(value)

/**
 * formatNameUUID
 * @param {String} name
 * @param {String} uuid
 * @returns {String} 'name---uuid'
 */
const formatNameUUID = (name, uuid) => `${name}---${uuid}`

/**
 * splitNameUUID
 * @param {String} nameUUID
 * @returns {Array} [0] === 'name', [1] === 'uuid'
 */
const splitNameUUID = (nameUUID) => nameUUID.split('---')

export { formatCurrency, formatNameUUID, splitNameUUID }
