const {db} = require('./server/db')
const app = require('./server')
const PORT = 8080

db.sync()
.then(() => {
  console.log('database is Synced')
  app.listen(PORT, () => (`listening to this fucking port: ${PORT}`))
})