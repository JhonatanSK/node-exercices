const express = require('express');

const server = express();

server.use(express.json());

const users = ["Jhonatan", "Bruno", "Diego"];

function checkUserExists(req, res, next){
    if(!req.body.user) {
        return res.status(400).json({ error: 'User name is required' })
    }
    return next();
}

function checkUserInArray(req, res, next) {
    const user = users[req.params.index];

    if(!user)   return res.status(400).json({ error: 'User does not exists' });

    req.user = user;

    return next();
}

server.get('/users', (req, res) => { 
    return res.json(users);
});

server.get('/users/:id', checkUserInArray, (req, res) => {
    const { id } = req.params;

    return res.json(users[id]);
})

server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    
    users[index] = name;

    return res.json(users);
})

server.delete("/users/:index", checkUserInArray, (req, res) =>{
    const { index } = req.params;

    users.splice(index, 1);

    return res.json(users);
});

server.listen(3333)