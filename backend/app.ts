const express = require('express')

require('./db')



const app = express()
const port = process.env.PORT


app.use(express.json())



app.listen(port, () => {
    console.log('server listening on port ' + port)
})