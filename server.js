const express = require('express');
const app = express();


app.get("/test", (req, res) => {
	res.send("Node is easy to run in EC2");
})

app.listen(3000, () => console.log('server started'));
