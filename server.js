const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Body
app.use(express.json());

//DB
const uri = require("./config/default").mongoURI;

//Connect
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error(err));

const port = process.env.PORT || 5000;

app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/comments", require("./routes/api/comments"));
app.use("/api/users", require("./routes/api/users"));

app.listen(port, () => console.log(`Server started on port ${port}`));
