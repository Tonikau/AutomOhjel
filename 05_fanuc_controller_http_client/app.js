const express = require('express');
const axios = require('axios');
const { json } = require('express');

const PORT = process.env.PORT || 8081;

let app = express();


app.use((req, res, next) => {
    console.log('PATH: ' + req.path);
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello World');
    res.end();
});



app.get("/robot/joint_values/", (req, res, next) => {
    axios.get('https://fanuc-robot-http-server.herokuapp.com/').then((robot_res) => {
        const regexp = 'Joint   [1-6]: *(-?.*)'; //[1-6]
         let joint_values = [];
         let matches = robot_res.data.matchAll(regexp);
         let count = 0;
            for (const match of matches)
            {
            count++;
            if (count > 6) break;
            const value = parseFloat(match[1]);
            joint_values.push(value);
            };
        res.send( {joint_values});
        console.log({joint_values});
    });
});
    

  app.listen(PORT);
//testi



// app.get("/robot/joint_values/", (req, res, next) => {
//     axios.get('https://fanuc-robot-http-server.herokuapp.com/').then((res)=>{
//             const regexp = 'Joint   [1-6]: *(-?.*)'; //[1-6]
//             let joint_values = [];
//             let matches = res.data.matchAll(regexp);
//             let count = 0;
             
//             for (const match of matches) {
//                  count++;
//                  if (count > 6) break;
//                 const value = parseFloat(match[1]);
//                 joint_values.push(value); 
//             }
            
//             });
//             // res.send({joint_values});
            
        
//         console.log({joint_values});
//     app.listen(PORT);