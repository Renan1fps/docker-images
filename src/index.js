const { default: axios } = require("axios")
const { urlencoded } = require("express")
const express = require("express")

const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get("/test", async (req, res) => {
  res.send('ok2')
})

app.listen(4014, () => {
  console.log("Server running")
})