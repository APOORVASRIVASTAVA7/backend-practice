const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.services")
const postModel = require("./models/post.models")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());


const upload = multer({ storage: multer.memoryStorage() })


app.post('/create-post', upload.single("image"), async (req, res) => {

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    console.log(result);

    return res.status(201).json({
        message: "Post created successfully",
        post: result,
    })

})

app.get("/posts", async (req, res) => {

    const posts = await postModel.find()


    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })

})


module.exports = app;
