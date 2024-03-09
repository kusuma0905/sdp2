const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const db = require('./db');


app.use(express.json());
app.use(cors());


const User = require('./models/userSchema');

app.get('/', (req, res) => {
    res.send('Hello World');
});



// register user 

app.post('/register', async (req, res) => {

    console.log(req.body);
    try {
        const { firstName, lastName, username, email, gender, password, branch, confirmPassword, phone, address, residence, profile_pic } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            gender,
            password,
            branch,
            confirmPassword,
            phone,
            address,
            residence,
            profile_pic,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.log(error);
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// login user

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({
            email,
            password,
        });

        if (!existingUser) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user: existingUser });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});



app.listen(3001, () => {
    console.log('Server is running on port 3001');
});