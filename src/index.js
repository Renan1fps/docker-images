const { default: axios } = require("axios")
const { urlencoded } = require("express")
const express = require("express")
const cors = require ('cors')

const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.get("/test", async (req, res) => {
  res.send(`API online ${new Date()}`)
})

app.listen(4014, () => {
  console.log("Server running")
})
