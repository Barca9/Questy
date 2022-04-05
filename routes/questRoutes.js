const {Router} = require('express')
const router = Router()
const fs = require("fs");
const path = require("path");
const quests = require("./data/quests.json");


router.post('/create', async (req, res) => {
    try {
        const data = req.body

        quests.push({
            id: Math.random().toString(32).substr(2, 10),
            content: {...data}
        })

        let dataToWrite = JSON.stringify(quests, null, 2);

        fs.writeFile(path.join(__dirname, 'data', 'quests.json'),
            dataToWrite, (err) => {
                if (err) throw err;
                console.log('Data written to file');
                res.status(201).json({message: 'Квест сохранён'})
            });

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Что-то пошло не так post'})
    }
})

router.get('/get', async (req, res) => {
    try {
       res.json(quests)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так get'})
        console.log(e)
    }
})

module.exports = router