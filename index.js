const express = require("express");
const morgan = require("morgan");
const contactRoutes = require("./ContactRoutes");
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/contacts", contactRoutes);
app.get("*", (req, res) => {
  res.send("<h1>Please Use the Correct Routers</h1>");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is rnuing on port ${PORT} `);
});
