const express = require("express")
const mongoose = require('mongoose');
const personsRoutes = require('./routes/persons')
const { MONGODB_URI } = require("./utils/config")

mongoose.connect(MONGODB_URI);
console.log("Connected to MongoDB");


const PORT = 3001
const app = express()

app.use(express.json())

// Disable CORS so that React client can freely access this server
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.set("Access-Control-Allow-Methods", "*")
  next()
})

app.use('/persons', personsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
