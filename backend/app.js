const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });


// app.use((req, res, next) => {
//     res.send('Hello from express');
// });

app.use('/api/posts', (req, res, next) => {
    const posts = [{
            id: 'fadf12421l',
            title: 'First server-side post',
            content: 'This is coming from the server'
        },
        {
            id: 'kasajlaj132',
            title: 'Second server-side post',
            content: 'This is coming from the server!'
        },
    ];
    res.status(200).json({
        message: 'Post fetched successfully!',
        posts: posts
    });
});

module.exports = app;