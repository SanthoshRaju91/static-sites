const path = require('path')
const express = require('express')
const morgan = require('morgan')

const port = process.env.PORT || 3000
const app = express()
app.set('view engine', 'ejs')
app.use(morgan('common'))
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.render('pages/index')
})

app.listen(port)
console.log(`> static server started on port: ${port}`)
