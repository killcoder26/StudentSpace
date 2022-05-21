import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/dashboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    id: Number,
    gender:String,
    race:String,
    parental_edu:String,
    lunch:String,
    test_prep:String,
    math:Number,
    reading:Number,
    writing:Number
})
const User = new mongoose.model("users", userSchema)


//routes
app.get("/",(req,res)=>{
      User.find((err,data)=>{
            if(!err)
            {
                console.log(data)
                res.send(data);
            }
            else{console.log(err)}
     })

     
   
})
app.post("/add",(req,res)=>{
    const {i, g, rc,p,l,t,m,r,w} = req.body
    
    const user = new User({
    id: i,
    gender:g,
    race:rc,
    parental_edu:p,
    lunch:l,
    test_prep:t,
    math:m,
    reading:r,
    writing:w
        
    })
    user.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "Successfully submitted" })
        }
    })
})

app.post("/delete",(req,res)=>{
    const {i} = req.body
    
    User.deleteOne({id: i}, (err, user) => {
        if(user){
            res.send("deleted successfully")
        }
        else{
            res.send("error in del")
        }

})
})

app.post("/edit",(req,res)=>{
    const {idd,lu,tp} = req.body   
   
    User.findOneAndUpdate({"id":idd}, {"$set":{"lunch":lu, "test_prep":tp}}, {new: true}, (err, doc) => {
        if (!err) {
            console.log("Successful updation");
            res.send(doc);
        }
        else{
            console.log(err);
            res.send("Error")
        }
        
    })});

    app.post("/search",(req,res)=>{
        const {sd} = req.body
        
        User.find({parental_edu: sd}, (err, user) => {
            if(user){
                res.send(user)
            }
            else{
                res.send("error in search")
            }
    
    })
    })

app.post("/searchid",(req,res)=>{
        const {studid} = req.body
        
        User.find({id:studid}, (err, user) => {
            if(user){
                res.send(user)
            }
            else{
                res.send("error in search")
            }
    
    })
    })


   //db for post
const userSchema2 = new mongoose.Schema({
    name:String,
    anoc:String,
    time:String
})

const Userp = new mongoose.model("posts", userSchema2)

    app.post("/post",(req,res)=>{
        const {n,a,t} = req.body
        
        const user = new Userp({
       
        name:n,
        anoc:a,
        time:t
            
        })
        user.save(err => {
            if(err) {
                res.send(err)
            } else {
                res.send( { message: "Successfully posted" })
            }
        })
    })
    
    app.get("/find",(req,res)=>{
        Userp.find((err,data)=>{
              if(!err)
              {
                  console.log(data)
                  res.send(data);
              }
              else{console.log(err)}
       })
    })

app.listen(5000,() => {
    console.log("BE started at port 5000")
})