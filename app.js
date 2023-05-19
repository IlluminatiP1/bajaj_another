const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// POST endpoint
// POST endpoint
app.post('/bhfl', (req, res) => {
  const { data } = req.body;

  let numbers = [];
  let alphabets = [];

  if (Array.isArray(data)) {
    // Separate numbers and alphabets
    for (const item of data) {
      if (typeof item === 'number' || /^\d+$/.test(item)) {
        numbers.push(String(item));
      } else if (typeof item === 'string' && /^[A-Za-z]+$/.test(item)) {
        alphabets.push(item);
      }
    }
  }

  const response = {
    is_success: true,
    user_id: 'Afraz Tanvir',
    email: 'at8757@srmist.edu.in',
    roll_number: 'RA2011003010499',
    numbers: numbers,
    alphabets: alphabets
  };

  res.json(response);
});
app.get('/bhfl', (req, res) => {
  const operation_code = generateOperationCode();

  res.json({ operation_code: operation_code });
});
// Function to generate operation code
function generateOperationCode() {
  const operationCode = 1;

  return operationCode;
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
