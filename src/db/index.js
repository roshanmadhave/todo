const { connect } = require("mongoose");

// const uri = "mongodb://localhost:27017/test-db"
const uri = "mongodb+srv://brillian:VeT9Xvz2uKjSEgLK@cluster0.cmlec.mongodb.net/brillio-db?retryWrites=true&w=majorit"


connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)