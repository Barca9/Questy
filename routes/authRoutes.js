const {Router} = require('express')
const path = require('path')
const fs = require('fs')
const router = Router()
const config = require('config')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const users = require('./data/users.json')


// /api/auth/register
router.post('/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 симовлов').isLength({min:6})
    ],
    async (req,res)=> {
    try{

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'})
        }

        const {email, password} = req.body

        /*let data = fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf-8');
        let usersData = JSON.parse(data);*/


        const candidate = users.find(item=> item.email === email)
        console.log(candidate)

        if(candidate) {
            return res.status(400).json({message: 'такой пользователь уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        users.push({
            id: Math.random().toString(32).substr(2, 10),
            email,
            password: hashedPassword
        })

        let dataToWrite = JSON.stringify(users, null, 2);

        fs.writeFile(path.join(__dirname, 'data', 'users.json'),
            dataToWrite, (err) => {
            if (err) throw err;
            console.log('Data written to file');
            res.status(201).json({message: 'пользователь создан'})
        });

    }catch (e){
        console.log(e)
        res.status(500).json({message: 'что-то пошло не так на сервере, попробуйте снова'})
    }
})

// /api/auth/login
router.post('/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req,res)=> {
    try{

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'})
        }

        const {email, password} = req.body

        const user = users.find(item=> item.email === email)

        if (!user) {
            return res.status(400).json({message: 'Позьзователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'})
        }

        //дальше тдёт авторизация через токены

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    }catch (e){
        res.status(500).json({message: 'что-то пошло не так на сервере, попробуйте снова'})
    }
})


module.exports = router