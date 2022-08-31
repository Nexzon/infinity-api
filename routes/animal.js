const express = require('express')
const router = express.Router()
const animal = require('animal-api')
router.get("/", (req, res) => {
    res.json({error: "You need to choose an endpoint, go to misc/help for the endpoints"})
    })
        
        router.get('/cat', (req, res) => {
            (async() => {
                animal.cat(link => {
                    res.json({result: link})
                })
            })()
                })

                router.get('/dog', (req, res) => {
                    (async() => {
                        animal.dog(link => {
                            res.json({result: link})
                        })
                    })()
                        })

                        router.get('/panda', (req, res) => {
                            (async() => {
                                animal.panda(link => {
                                    res.json({result: link})
                                })
                            })()
                                })
                
                                router.get('/redpanda', (req, res) => {
                                    (async() => {
                                        animal.repanda(link => {
                                            res.json({result: link})
                                        })
                                    })()
                                        })

                                        router.get('/fox', (req, res) => {
                                            (async() => {
                                                animal.fox(link => {
                                                    res.json({result: link})
                                                })
                                            })()
                                                })
    
                                                router.get('/birb', (req, res) => {
                                                    (async() => {
                                                        animal.birb(link => {
                                                            res.json({result: link})
                                                        })
                                                    })()
                                                        })

                                                        router.get('/koala', (req, res) => {
                                                            (async() => {
                                                                animal.koala(link => {
                                                                    res.json({result: link})
                                                                })
                                                            })()
                                                                })
            

        module.exports = router
