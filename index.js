const express = require('express');
const app = express();
const port = 3000;

function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === 'password') {
      next();
    } else {
      res.status(401);
      res.send('Access forbidden');
    }
}

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/cities", (req,res) => {
    const cities = [
        {
            id: 1,
            name: "New York",
        },
        {
            id: 2,
            name: "Berlin",
        },
        {
        id: 3,
        name: "London",
        },
    ];
  
    res.json(cities);
});

app.get("/secrets", isAuth , (req,res) => {
    const secrets = [
        {
            id: 1,
            name: "Secret 1",
        },
        {
            id: 2,
            name: "Secret",
        }
    ];
  
    res.json(secrets);
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));