const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Aplicatia functioneaza");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server pornit pe portul " + PORT);
});
git --version
