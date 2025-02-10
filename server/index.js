const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(
	cors({
		origin: 'http://localhost:5173', // frontend URL
		credentials: true,
	})
)
app.use(bodyParser.json())

// Assuming you have created routes/uploads.js
const uploadRoutes = require('./routes/uploads')
app.use('/api', uploadRoutes)

app.get('/', (req, res) => {
	res.send({ message: 'Hello from Virtual Quests Platform API!' })
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
