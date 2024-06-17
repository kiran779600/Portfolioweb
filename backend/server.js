const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pass@123', 
  database: 'contact_form'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);

 
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL
    )
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table: ' + err.stack);
    } else {
      console.log('Table "submissions" created or already exists');
    }
  });
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;
  const sql = 'INSERT INTO submissions (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error saving to database: ' + err.stack);
      res.status(500).send('Error saving to database');
      return;
    }
    console.log('Form data saved to database');
    res.status(200).send('Form data saved successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
