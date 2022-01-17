const express = require("express");
const app= express();
const cors= require("cors");

let options = { origin :"*"}
app.use (cors(options))

let rooms =[{
    "roomno":1,
    "seats":50,
    "amenities":[{
        "amenity1":"television",
        "amenity2":"smartboard",
        "amenity3":"projector",
        "amenity4":"speakers",
        "amenity5":"conference table"
    }],
    "price":5000
},
{
    "roomno":2,
    "seats":35,
    "amenities":[{
        "amenity1":"television",
        "amenity2":"smartboard",
        "amenity3":"projector",
        "amenity4":"speakers",
        "amenity5":"conference table"
    }],
    "price":3000
},
{
    "roomno":3,
    "seats":45,
    "amenities":[{
        "amenity1":"television",
        "amenity2":"smartboard",
        "amenity3":"projector",
        "amenity5":"conference table"
    }],
    "price":4500
},
{
    "roomno":4,
    "seats":30,
    "amenities":[{
        "amenity1":"television",
        "amenity2":"smartboard",
        "amenity3":"projector",
        "amenity4":"speakers",
        "amenity5":"conference table"
    }],
    "price":3000
},
{
    "roomno":5,
    "seats":50,
    "amenities":[{
        "amenity1":"television",
        "amenity2":"smartboard",
        "amenity3":"projector",
        "amenity4":"speakers",
        "amenity5":"conference table"
    }],
    "price":4500
}]
app.use(express.json())

app.get("/data",function(req,res){
    res.json(rooms)
})


app.post("/create-room", function (req,res){
    req.body= rooms
    res.json({message:"rooms created"})
})
app.put("/update/:id",function(req,res){
    let index= rooms.findIndex(obj=> obj.roomno == req.params.id)
    let keyarray= Object.keys(req.body)
    keyarray.forEach((obj) =>{
      rooms[index][obj]= req.body[obj]
    })
    res.json({message:"room booked"})
})


app.listen(3000)