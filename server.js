const express = require('express');
const mongoose = require("mongoose");

const app = express();

// connect to MongoDB

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/workout',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     }
// );


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use('/', require('./routes/html-routes'));
// app.use('/api/workouts', require('./routes/api-routes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});