import mongoose from "mongoose";

mongoose
.connect("mongodb+srv://azizsystem:azizbot123@discord-bot.3ow8b.mongodb.net/test")
.then(() => console.log('Connectd To Database'))
.catch((err) => console.log(err))