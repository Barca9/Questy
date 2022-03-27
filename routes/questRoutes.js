const {Router} = require('express')
const router = Router()
const dataJson = require('../data/data.json')


router.post('/post', async (req, res) => {
    try {
        const data = req.body
        res.send('Вернулись')
        console.log(data)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так post'})
    }
})

router.get('/get', async (req, res) => {
    try {
       res.json(dataJson.quests)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так get'})
        console.log(e)
    }
})

module.exports = router