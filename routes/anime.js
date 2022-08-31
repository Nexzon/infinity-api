const express = require('express')
const router = express.Router()
const anime = require('anime-actions')
router.get("/", (req, res) => {
    res.json({error: "You need to choose an endpoint, go to misc/help for the endpoints"})
    })
        
        router.get('/kill', (req, res) => {
                (async() => {
                    res.json({result: await anime.kill()})
                })()
            })
            
            router.get('/highfive', (req, res) => {
                (async() => {
                    res.json({result: await anime.highfive()})
                })()
            })
            
            router.get('/wave', (req, res) => {
                (async() => {
                    res.json({result: await anime.wave()})
                })()
            })
            
            router.get('/happy', (req, res) => {
                (async() => {
                    res.json({result: await anime.happy()})
                })()
            })
            
            router.get('/wallpaper', (req, res) => {
                (async() => {
                    res.json({result: await anime.wallpaper()})
                })()
            })
            
            router.get('/pat', (req, res) => {
                (async() => {
                    res.json({result: await anime.pat()})
                })()
            })
            
            router.get('/kiss', (req, res) => {
                (async() => {
                    res.json({result: await anime.kiss()})
                })()
            })
            
            router.get('/hug', (req, res) => {
                (async() => {
                    res.json({result: await anime.hug()})
                })()
            })
            
            router.get('/bully', (req, res) => {
                (async() => {
                    res.json({result: await anime.bully()})
                })()
            })
            
            router.get('/bonk', (req, res) => {
                (async() => {
                    res.json({result: await anime.bonk()})
                })()
            })
            
            router.get('/slap', (req, res) => {
                (async() => {
                    res.json({result: await anime.slap()})
                })()
            })
            
            router.get('/dance', (req, res) => {
                (async() => {
                    res.json({result: await anime.dance()})
                })()
            })
            
            router.get('/bite', (req, res) => {
                (async() => {
                    res.json({result: await anime.bite()})
                })()
            })
            
            router.get('/blush', (req, res) => {
                (async() => {
                    res.json({result: await anime.blush()})
                })()
            })
            
            router.get('/cuddle', (req, res) => {
                (async() => {
                    res.json({result: await anime.cuddle()})
                })()
            })
            
            router.get('/nervous', (req, res) => {
                (async() => {
                    res.json({result: await anime.nervous()})
                })()
            })
            
            router.get('/baka', (req, res) => {
                (async() => {
                    res.json({result: await anime.baka()})
                })()
            })
            
            
            
            
            
            router.get('/cry', (req, res) => {
                (async() => {
                    res.json({result: await anime.cry()})
                })()
            })
            
            router.get('/smile', (req, res) => {
                (async() => {
                    res.json({result: await anime.smile()})
                })()
            })
            
            router.get('/punch', (req, res) => {
                (async() => {
                    res.json({result: await anime.punch()})
                })()
            })
            
            router.get('/kick', (req, res) => {
                (async() => {
                    res.json({result: await anime.kick()})
                })()
            })
            
            router.get('/poke', (req, res) => {
                (async() => {
                    res.json({result: await anime.poke()})
                })()
            })
            
            router.get('/goodnight', (req, res) => {
                (async() => {
                    res.json({result: await anime.goodnight()})
                })()
            })
            
            router.get('/zerotwo', (req, res) => {
                (async() => {
                    res.json({result: await anime.zerotwo()})
                })()
            })
            
            
            router.get('/confused', (req, res) => {
                (async() => {
                    res.json({result: await anime.confused()})
                })()
            })
            
            router.get('/sad', (req, res) => {
                (async() => {
                    res.json({result: await anime.sad()})
                })()
            })
            
            router.get('/nervous', (req, res) => {
                (async() => {
                    res.json({result: await anime.nervous()})
                })()
            })
            
            
            router.get('/thinking', (req, res) => {
                (async() => {
                    res.json({result: await anime.thinking()})
                })()
            })
            
            router.get('/yes', (req, res) => {
                (async() => {
                    res.json({result: await anime.yes()})
                })()
            })
            
            router.get('/yeet', (req, res) => {
                (async() => {
                    res.json({result: await anime.yeet()})
                })()
            })
            
            router.get('/stare', (req, res) => {
                (async() => {
                    res.json({result: await anime.stare()})
                })()
            })
            
            
            router.get('/bored', (req, res) => {
                (async() => {
                    res.json({result: await anime.bored()})
                })()
            })
            
            router.get('/scream', (req, res) => {
                (async() => {
                    res.json({result: await anime.scream()})
                })()
            })
        
        module.exports = router
