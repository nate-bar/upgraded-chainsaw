
// run 'node server.js' from terminal to start

const express = require('express')  // https://expressjs.com/
const mysql = require('mysql2')     // https://sidorares.github.io/node-mysql2/docs
const cors = require('cors')        // https://www.npmjs.com/package/cors
const axios = require('axios');     // https://axios-http.com/docs/intro
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Team 14!')
})

// mySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NuteGunray25',
    database: 'mydb'
})

// Connect to database
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as ID ' + db.threadId);
});

// Routes
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        res.status(500).send('Error fetching users');
        return;
      }
      res.json(results);
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
