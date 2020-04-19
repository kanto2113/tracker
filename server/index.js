const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://kanto2113:<password>@trackerapp-z7xx1.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
            res.redirect(`https://${req.header('host')}${req.url}`)
        else 
            next()
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);