const express = require('express')
const config = require('config')

const PORT = config.get('port') || 5000

const app = express()

app.use(express.json({extended: true}))    //что бы express парсил req.body

app.use('/api/quest', require('./routes/questRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

