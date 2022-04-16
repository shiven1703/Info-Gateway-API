// api module imports
const apiV1 = require('../modules/v1')

// util imports
const { unknownPathHandler } = require('../utils/errorHandlers')

// routes
module.exports = (app) => {
  app.use('/api', apiV1)
  app.use('/', unknownPathHandler)
}
