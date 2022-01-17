const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 8081;

let app = express();

app.use((req, res, next) => {
    console.log('PATH: ' + req.path);
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello');
    res.end();
});

app.get("/users/active/count", (req, res, next) => {
  axios.get("https://gorest.co.in/public/v1/users").then((users_res) => {
    let count = 0;
    const users = users_res.data.data;
    users.forEach(user => {
        if(user.status == 'active')
        {
            count++;
        }
    });
    res.send({count});
  });
});

app.listen(PORT);




