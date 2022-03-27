const {Router} = require('express')
const config = require('config')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = Router()

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

        // const candidate = await отправляем email,  ждём пока идёт проверка в бд

        if(candidate) {
            return res.status(400).json({message: 'такой пользователь уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        //const user = создаём нового пользователя {email, password: hashedPassword}

        //await user.save()

        res.status(201).json({message: 'пользователь создан'})

    }catch (e){
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

            //const user  = найти пользователя ({email})
/*
        if (!user) = {
            return res.status(400).json({message: 'Позьзователь не найден'})
        }*/

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