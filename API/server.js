const express = require('express');
let users = require('./Users');
const app = express();
const idFilter = req => member => member.id === parseInt(req.params.id);

// Body Parser Middleware
app.use(express.json());
const PORT = 3000;

// GET All USERS
app.get('/api/users', (req, res) => res.json(users));

// GET Specific USER Based on ID
app.get('/api/users/:id', (req, res) => {
    const found = users.some(idFilter(req));

    if (found) {
        res.json(users.filter(idFilter(req)));
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

// CREATE A NEW USER 
app.post('/api/users', (req, res) => {
    
    const newMember = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        status: 'guest'
    };
    console.log(req.body)
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'NAME and EMAIL Must be provided' });
    }
    users.push(newMember);
    res.json(users);
});

// DELETE Specific USER Based on ID
app.delete('/api/users/:id', (req, res) => {
    const found = users.some(idFilter(req));

    if (found) {
        //first update the existing users
        users = users.filter(user=>{
            return user.id !== parseInt(req.params.id);
        })
        res.json({  //for client response
            msg: 'Deleted',
            members: users.filter(member => member.id !== parseInt(req.params.id))
        });

    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});


// UPDATE Specific USER Based on ID
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const foundUserIndex = users.findIndex(user => user.id === userId);

    if (foundUserIndex !== -1) {
        const updatedUser = users[foundUserIndex];
        updatedUser.name = req.body.name || updatedUser.name;
        updatedUser.email = req.body.email || updatedUser.email;
        res.json({ msg: 'Updated Details', updatedUser });
    } else {
        res.status(400).json({ msg: `No User found with ${req.params.id}` });
    }
});


app.listen(PORT, () => console.log(`Server is Running ${PORT}`));
