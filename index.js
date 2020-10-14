require("dotenv").config()
const express = require('express')
const app = express()


console.log(process.env.PORT)

app.get('/code/:code', (req, res) => {
  
  code = req.params.code
  if (code == "5467"){
    res.send('Hacked!  You have captued the flag.')
  } else {
    res.send('Invalid Code')
  }
  
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`)
});