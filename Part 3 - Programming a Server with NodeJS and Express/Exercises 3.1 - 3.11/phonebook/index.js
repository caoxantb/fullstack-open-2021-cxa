const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

morgan.token("person", (req) => JSON.stringify(req.body));

app.use(express.json());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :person"
  )
);
app.use(cors());
app.use(express.static("build"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  res.send(`
  <div>Phonebook has info for ${persons.length} people</div>
  <div>${new Date()}</div>
  `);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((note) => note.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "info missing",
    });
  }

  if (isNaN(body.number.replace(/-/g, "")) || body.number === "") {
    return res.status(400).json({
      error: `${body.number} is not a valid telephone number`,
    });
  }

  if (persons.some((person) => person.name === body.name)) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }

  const newPerson = {
    id: generateID(persons),
    name: body.name,
    number: body.number,
  };

  persons = [...persons, newPerson];

  res.json(newPerson);
});

const generateID = (data) => {
  let id = Math.floor(Math.random() * 1000) + 1;
  while (data.some((d) => d.id === id))
    id = Math.floor(Math.random() * 1000) + 1;
  return id;
};

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
