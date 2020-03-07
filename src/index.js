const cors = require('cors')
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/Users')

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})