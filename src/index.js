const { urlencoded } = require("express")
const express = require("express")

const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))

app.get("/image", (req, res)=>{
  res.json({message: "Image Docker running"})
})

app.listen(8080, ()=>{
  console.log("Server running")
})