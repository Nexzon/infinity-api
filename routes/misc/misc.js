const express = require('express')
const router = express.Router()
const animal = require('animal-api')
router.get("/", (req, res) => {
        res.json({error: "You need to choose an endpoint, go to misc/help for the endpoints"})
        })
        
        router.get('/hexGenerate', (req, res) => {
            (async() => {
                function hexGenerate(len, arr) {
                    var ans = '';
                    for (var i = len; i > 0; i--) {
                        ans += 
                          arr[Math.floor(Math.random() * arr.length)];
                    }
                    return ans;
                }
                res.json({result: `#${hexGenerate(6, '1234567890abcdef')}`})
            })()
                })

                router.get('/help', (req, res) => {
                    (async() => {
                        
                        res.json({result: "GET misc - misc/hexGenerate, misc/help\nGET animal - animal/cat, animal/dog, animal/pandat, animal/redpanda, animal/fox, animal/birb, animal/koala\nGET anime - anime/baka, anime/blush, anime/cuddle, anime/bite, anime/dance, anime/slap, anime/bonk, anime/kick, anime/bully, anime/hug, anime/confused, anime/kiss, anime/pat, anime/happy, anime/yes, anime/poke, anime/highfive, anime/wink, anime/wave, anime/goodnight, anime/thinking, anime/sad, anime/cry, anime/stare, anime/bored, anime/scream, anime/nervous, anime/smile, anime/punch, anime/kill, anime/yeet, anime/wallpaper, anime/zerotwo\nGET fun - fun/8ball"})
                    })()
                        })


        
        module.exports = router
