const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.NODE_ENV === 'local' ? process.env.LOCAL_DATABASE_URL : process.env.PROD_DATABASE_URL 
})

module.exports = pool