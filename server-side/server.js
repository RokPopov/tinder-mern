import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';

// App config
const app = express();
const PORT = process.env.PORT || 4000;
const CONNECTION_URL = "mongodb+srv://admin:anticefur3d@cluster0.pu0je.mongodb.net/tinderdb?retryWrites=true&w=majority"

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})


// API endpoints
app.get('/', (req, res) => res.status(200).send("Great success!!"));

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(201).send(data)
    }
  })
});

app.get('/tinder/cards', (req, res) => {
  Cards.find((error, data) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send(data)
    }
  })
});

// Listener 
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))