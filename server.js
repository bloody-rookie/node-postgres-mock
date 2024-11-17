const express = require("express");
const sequelize = require("./db");
const Student = require("./model");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world")
});

sequelize.authenticate()
.then(console.log("Database connected"))
.catch(err => console.log("Error connecting", err));

app.get("/get", async(req, res)=>{
    const studentToFind = await Student.findAll();
    res.send(studentToFind);
})

app.post("/post", async(req, res)=>{
    const {name, age, course, address}=req.body;
    const studentToCreate = await Student.create({name, age, course, address});
    res.send({"msg": "data posted", studentToCreate});
})

app.delete("/delete/:id", async(req, res)=>{
    const {id}= req.params;
    const studentToDelete = await Student.destroy({
        where:{id: id}
    });
    res.send({"msg": "Users deleted", studentToDelete});
})

app.put("/put/:id", async(req, res)=>{
    const {id} = req.params;
    const studentToUpdate = await Student.update(req.body, {
        where:{id: id}
    });
    res.send({"msg": "Data updated", studentToUpdate});
})

app.listen(8000, () => {
    console.log("server is running");
})