const express = require('express');
const app = express();

// Body Parser Middleware
app.use(express.json());
const PORT = 3000;

//Routing
app.get('/', (req, res) => {
    console.log(req.method);
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.method);
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    console.log(req.method);
    res.send('Got a PUT request at /user')
})
            
app.delete('/user', (req, res) => {
    console.log(req.method);
    res.send('Got a DELETE request at /user')
})
                
app.listen(PORT,()=>console.log(`server is running on port number ${PORT}`))
