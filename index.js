const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')
dotenv.config()
const jobsRouter = require('./routes/jobsRoutes')
const userRouter = require('./routes/userRoutes')
const globusRouter = require('./routes/globusRoutes')

const port = process.env.PORT || 3500

const app = express()
app.use(cors())
app.use(helmet())

app.use('/api', jobsRouter)
app.use('/api', userRouter)
app.use('/api/globus', globusRouter)

app.get('/', (req, res) => {
  res.json('SERVER IS LIVE')
})

app.listen(port, () => console.log(`Listening on port ${port}, Scott.`))
