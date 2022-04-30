// api module imports
const api = require('../modules')

// util imports
const { unknownPathHandler } = require('../utils/errorHandlers')

// routes
module.exports = (app) => {
  app.use('/api', api)
  app.use('/', unknownPathHandler)
}
