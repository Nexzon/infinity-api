const express = require('express')
const router = express.Router()
const animal = require('animal-api')
const ball = require(`${process.cwd()}/assets/8ball.json`)
router.get("/", (req, res) => {
        res.json({error: "You need to choose an endpoint, go to misc/help for the endpoints"})
        })
        
        router.get('/8ball', (req, res) => {
            (async() => {
                res.json({result: ball[Math.floor(Math.random() * ball.length)]})
            })()
                })

            

        module.exports = router
