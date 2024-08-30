const mongoose=require('mongoose');


mongoose.connect(process.env.MONGO);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Db is connected')
})

db.on('disconnected',()=>{
    console.log('Db is disconnected');

})

db.on('error',(err)=>{
    console.log(err);
})

module.exports=db;