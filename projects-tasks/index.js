const express = require('express');
const server = express();

server.use(express.json());

let tasks = [
    {
      id: "1",
      title: "Java",
      tasks: ["Estudar"]
    },
    {
        id: "2",
        title: "Node",
        tasks: ["Estudar"]
      }
  ];

function verifyIfIdExists(req, res, next){
    const { id } = req.params;
    const project = tasks.find(p => p.id == id);

    if (!project) {
      return res.status(400).json({ error: 'Project not found' });
    }
  
    return next();
}

let cont = 0;

server.use((req, res, next) => {
    cont++;
    console.log("Contagem de requisições: " + cont);

    return next();
})

server.get('/projects', (req, res) => {
    return res.json(tasks);
});

server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    let task = {
        id,
        title,
        tasks: []
    }
    tasks.push(task);

    return res.json(tasks);
});

server.put('/projects/:id', verifyIfIdExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
  
    const project = tasks.find(p => p.id == id);
  
    project.title = title;
  
    return res.json(project);
})

server.delete('/projects/:id', verifyIfIdExists, (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id == id);

    tasks.splice(taskIndex, 1);

    return res.json(tasks);
});

server.post('/projects/:id/tasks', verifyIfIdExists, (req, res) => {
    const { title } = req.body;
    const { id } = req.params;

    const task = tasks.find(task => task.id == id);
    task.tasks.push(title);

    return res.json(task);
});

server.listen(3333);