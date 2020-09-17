const express = require('express');
const bodyParser = required("body-parser");

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });
// app.use((req, res, next) => {
//     res.send('Hello from express');
// });

app.use(bodyParser.json());
// similarly is capable of parser all kinds of different bodies as below
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origen", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.get("/api/post", (req, res, next) => {
    const posts = [{
            id: "fadf12421l",
            title: "First server-side post",
            content: "this is coming from the server"
        },
        {
            id: "ksajflaj132",
            title: "second server-side post",
            content: "this is coming from the server!"
        }
    ];
    res.status(200).json({
        message: 'Post fetched successfully!',
        posts: posts
    });
})

module.exports = app;