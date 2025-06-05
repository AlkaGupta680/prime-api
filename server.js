// Import the Express framework
import express from 'express';
const app = express();

// Function to check if a number is prime
function isPrime(num) {
  // Check if input is a valid integer
  if (typeof num !== 'number' || !Number.isInteger(num)) return false;
  // Primes are greater than 1
  if (num <= 1) return false;
  // 2 is the only even prime number
  if (num === 2) return true;
  // Exclude other even numbers
  if (num % 2 === 0) return false;
  // Check for factors from 3 up to the square root of num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  // If no factors found, number is prime
  return true;
}

// Define the GET endpoint for checking primality
app.get('/is_prime', (req, res) => {
  const { number } = req.query;
  // Validate that 'number' query parameter exists
  if (number === undefined) {
    return res.status(400).json({ error: 'Missing "number" query parameter' });
  }
  // Convert the query parameter to a number
  const num = Number(number);
  // Validate that the input is an integer
  if (!Number.isInteger(num)) {
    return res.status(400).json({ error: '"number" must be an integer' });
  }
  // Check if the number is prime
  const result = isPrime(num);
  // Respond with the result in JSON format
  res.json({ number: num, is_prime: result });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
