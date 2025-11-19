const express = require('express');
const app = express();

const userModel = require('./usermodel');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//for creating user
app.get('/create', async (req, res) => {
   let createduser = await userModel.create({
    Name: "gure",
    Username: "mrguru",
    Email: "guru@gmail.com", 
  })
    res.send(createduser);
});


//for updating user
app.get('/update', async (req, res) => {
   let updateduser = await userModel.findOneAndUpdate({Name: "gure"},{Username: "mrguru golu prajapati"})
    res.send(updateduser);
})

//find search all users
app.get('/read', async (req, res) => {
   let updateduser = await userModel.find()
    res.send(updateduser);
})

//for surching one user 
app.get('/read', async (req, res) => {
   let updateduser = await userModel.findOne({Username: "mrguru"})
    res.send(updateduser);
})

//for deleting user
app.get('/delete', async (req, res) => {
   let deleteduser = await userModel.findOneAndDelete({Name: "gure"})
    res.send(deleteduser);
})


app.listen(3000);