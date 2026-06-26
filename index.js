import express from "express";

const app= express();

const port = 5000;

app.get("/",(req,res)=>{
    res.send("Hey this is Samar Raghav, Nice to see you!");
}
)


app.listen(port,()=>{
   console.log('listening on port ${port}');
}
)
