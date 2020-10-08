require("dotenv").config();
const app = require('./src/app');
const port = process.env.PORT || 8084;

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);