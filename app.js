const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/KiaDetails');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
});

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema, 'user');

app.post('/sign_up', function (req, res) {
    var Name = req.body.name;
    var Email = req.body.email;
    var Password = req.body.password;

    User.findOne({ email: Email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).send('User already exists');
            } else {
                const newUser = new User({
                    "name": Name,
                    "email": Email,
                    "password": Password
                });

                newUser.save()
                    .then(() => {
                        console.log("User registered successfully");
                        return res.redirect('success.html');
                    })
                    .catch(err => {
                        console.error(err);
                        return res.status(500).send('Error saving user.');
                    });
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send('Error during signup.');
        });
});

app.post('/log_in', function (req, res) {
    var Email = req.body.email;
    var Password = req.body.password;

    User.findOne({ email: Email, password: Password })
        .then(user => {
            if (user) {
                console.log("Login successful");
                return res.redirect('success.html');
            } else {
                console.log("Invalid email or password");
                return res.status(401).send('Invalid email or password');
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).send('Error during login.');
        });
});

app.listen(8000, () => {
    console.log("Server listening at port 8000");
});