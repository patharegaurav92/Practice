var express=require('express');
var mongojs= require('mongojs');
var db=mongojs('notes',['notes']);
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/'));


app.get('/notes',function(req,res){
    
console.log("Recieved");
    db.notes.find(function(err,docs){
    console.log(docs);
    res.json(docs);
})
})

app.post('/addnotes',function(req,res){
    console.log(req.body);
    db.notes.insert(req.body,function(err,doc){
     res.json(doc);
    })
})

app.delete('/deletenote/:id',function(req,res){
    var id=req.params.id;
    console.log(id);
    db.notes.remove({"_id":mongojs.ObjectId(id)},function(err,doc){
        res.json(doc);
    })
    
})
app.delete('/deleteAll',function(req,res){
    db.notes.drop(function(err,doc){
        res.json(doc);
    })
})
app.put('/editNote/:id',function(req,res){
    var id=req.params.id;
    console.log(req.body.noteheading);
    db.notes.findAndModify({query: { _id : mongojs.ObjectId(id)},
        update: {$set:{noteheading:req.body.noteheading, notedescription:req.body.notedescription}},
        new:true},function(err,doc){
            res.json(doc);
        })
    })
    





app.listen(process.env.PORT,process.env.IP)
    
console.log('Server running on port %s',process.env.PORT,process.env.IP);