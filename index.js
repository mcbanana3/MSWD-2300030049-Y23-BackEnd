import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book_route.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("Conencted to MongoDB");
}

catch(error){
    console.log("Error: "+error);
}

app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});