const express = require("express");
const mongoose = require("mongoose");
const parameter_controller = require("./parameter_controller")
const body_parser = require("body-parser");


const PORT = process.env.PORT || 8080;

const app = express();
app.use(body_parser.json());

//ROUTING
app.post("/api/parameter", parameter_controller.api_post_parameter);
app.get("/api/parameters", parameter_controller.api_get_parameters);
app.get("/api/parameter/:id", parameter_controller.api_get_parameter);
app.put("/api/parameter/:id", parameter_controller.api_put_parameter);
app.delete("/api/parameter/:id", parameter_controller.api_delete_parameter);

//LS9JIpc1aQ3VnDsO
//5JbkYbID4pAt063k

const db_uri = "mongodb+srv://Machine_user:5JbkYbID4pAt063k@cluster0.7j81d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



mongoose.connect(db_uri, {}).then(() => {
  console.log("db connected");
  console.log("listening port: ", PORT);
  app.listen(PORT);
});





