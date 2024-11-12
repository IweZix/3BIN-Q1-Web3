require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

if ((MONGODB_URI === undefined) || (PORT === undefined)) {
  console.error('Please set the MONGODB_URI and PORT environment variables');
  process.exit(1);
}

module.exports = {
    MONGODB_URI,
    PORT
}