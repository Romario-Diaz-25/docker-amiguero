const express = require("express")
const { createPool } = require("mysql2/promise")

const app = express();

const pool = createPool({
    host: 'mysqldb',
    user: 'root',
    password: '12345678',
    port: 3306
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/ping', async(req, res) => {
    const result = await pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(3000)

console.log("server running on port: ", 3000)