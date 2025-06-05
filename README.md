# Prime Number API

A simple Node.js API endpoint that checks if a given number is a prime number.

## Features

- Accepts a number as input via a GET request
- Returns whether the number is prime
- Basic error handling for missing or invalid input

## Requirements

- Node.js (v14 or higher recommended)
- npm (Node package manager)

## Installation

1. **Clone the repository:**
git clone https://github.com/AlkaGupta680/prime-api.git
cd prime-api

2. **Install dependencies:**
npm install

## Usage

1. **Start the server:**
npm start
The server will run at `http://localhost:3000`.

2. **Test the endpoint:**

Send a GET request to `/is_prime` with a `number` query parameter.

**Example using browser or curl:**
http://localhost:3000/is_prime?number=17


**Example response:**
{
"number": 17,
"is_prime": true
}

## Error Handling

- If the `number` query parameter is missing:
{ "error": "Missing "number" query parameter" }

- If the input is not an integer:
{ "error": ""number" must be an integer" }


## Project Structure

prime-api/
│
├── server.js # Main API code
├── package.json
├── package-lock.json
└── .gitignore

