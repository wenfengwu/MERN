const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
  res.json( users );
});

app.get("/api", (req, res) => {
  res.json({ message: "hahaha" });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// app.listen( port, () => console.log(`Listening on port: ${port}`) );
