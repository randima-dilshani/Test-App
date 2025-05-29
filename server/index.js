const express = require('express');
const app = express();
const core = require ('cors');
app.use (express.json());

let users =[];
let nextID = 1;

app.get('/api/users', (req,res) =>{
    res.json(users);
});

app.post('/api/users', (req,res) => {
    const { name,email } = req.body;
    const newUser = {id: nextId++, name, email };
    users.push(newUSer);
    res.json(newUSer);
});

app.listen(3000, () => 
    console.log('Server running on port'));

;
