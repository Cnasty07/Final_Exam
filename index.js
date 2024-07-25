const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const dburi = "mongodb+srv://cn:12345web@web-dev-db.fhkedej.mongodb.net/?retryWrites=true&w=majority&appName=web-dev-db" // used the uri from the project unti l i can change it 

port = 5500


//express engine
const app = express()
app.set("views", "./views")
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("./public/"))
app.use('/public', express.static('public'));


app.get("/", (req,res) => {
    let bmi = 0.0
    // if (req.calc == true){
    //     bmi = req.bmi
    //     res.render('home',{bmi: req.bmi})
    // }
    console.log(bmi)
    res.render("home",{bmi})
})

app.post("/calculate", async (req,res) => {
    // mongoose.connect(dburi).then(() => console.log("connected")) // connects to database
    console.log(req.body)
    let weight = req.body.weight
    let height = req.body.height
    let bmi = (weight / (height * height))
    
    
    // INFO: this is how i would save the data to the mongodb database but i commented it out because i dont want to add it to the project cluster i am working on currently.
    
    // let bmi_model = await mongoose.model("BMI")
    // bmi_model.create({
        //     weight: weight,
        //     height: height,
        //     BMI: bmi
        // })
        await mongoose.connection.close()
        console.log(bmi)
        res.render("home",{bmi})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})