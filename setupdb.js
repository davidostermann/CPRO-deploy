const db = require('./server/models/db')
const fs = require('fs')

const sql = fs.readFileSync(__dirname + '/setup.sql').toString()
db.query(sql).then(data => process.exit())