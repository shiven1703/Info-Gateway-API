// api module imports
const api = require('../modules')

// routes
module.exports = (app) => {
  app.use('/api', api)
  app.use('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1>')
  })
}
