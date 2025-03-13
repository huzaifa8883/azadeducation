import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors'
const app = express();



app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.json(({limit:"16kb"})))
app.use(express.static('public'))
app.use(cookieParser())

app.post("/", (req, res) => {
    res.send("Hello, World!");
});

import { router } from "./routes/user.routes.js";
app.use("/users",router)
import videorouter from './routes/video.routes.js'
app.use("/videos",videorouter)
import likedrouter from "./routes/like.routes.js"
app.use("/like",likedrouter)
import commentrouter from "./routes/comment.routes.js"
app.use("/comment",commentrouter)
import tweetuser from "./routes/tweet.routes.js"
app.use("/tweet",tweetuser)
export default app;