const express = require("express");

const app = express();

app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Jhener Daniel",
    age: 23,
    email: "jhener9@gmail.com",
    phone: "+573137448742",
    country: "Colombia",
  });
});

app.post("/metas", (req, res) => {
  res.status(200).json({
    hobbies: ["leer", "nadar", "jugar videojuegos"],
  });
});

app.patch("/metas", (req, res) => {
  res.status(200).json({
    Goals: {
      1: 'Aprender ingles para mejorar mis posibilidades de encontrar un empleo',
      2: 'Aprender backend',
    }
  });
});

app.put("/bussines", (req, res) => {
  res.status(200).json({
    enterprises: {
      1: 'Globant',
      2: 'Mercado Libre',
      3: 'Google'
    }
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
