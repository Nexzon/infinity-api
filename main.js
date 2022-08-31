const express = require('express');
const anime = require('anime-actions')
const app = express();
app.set("view engine", "ejs")
app.get("/", (req, res) => {
console.log("Here")
res.render("index", {text: "World" })
})

const animeRouter = require("./routes/anime")
const animalRouter = require("./routes/animal")
const hexRouter = require("./routes/misc/misc")
const funRouter = require("./routes/fun/fun")

app.use("/fun", funRouter)
app.use("/misc", hexRouter)
app.use("/anime", animeRouter)
app.use("/animal", animalRouter)

app.listen(3000)

