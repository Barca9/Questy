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



/*
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset = utf-8'
        })

        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/api/users') {
            res.writeHead(200, {
                    'Content-Type': 'text/json'
                }
            )

            const users = [
                {
                    name: 'Vladilen'
                },
                {
                    name: 'Elena'
                }]

            res.end(JSON.stringify(users))
        }

    }

})

server.listen(3000, () => {
    console.log('server is running...')
})*/
