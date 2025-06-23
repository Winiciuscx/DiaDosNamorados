const express = require('express')
const app = express()
const port = 3050

app.get('/products/all', (req, res) => {
  res.json([{
    id: 1,
    desc: "flocão"
  },
  {
    id: 2,
    desc: "arroz"
  },  
    ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})