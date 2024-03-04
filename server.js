const express = require("express");
const app = express();
const port = 1232;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

app.get("/test", (request, response) => {
	console.log("Her er min test");
	console.log(request.body);
	response.json({
		message: "Yay!",
	});
});

app.post("/hello", (request, response) => {
	console.log("Hello!");
	console.log(request.body);
	response.json({
		message: "Woo!",
	});
});

app.listen(port, () => {
	console.log("Her er min server!");
});
