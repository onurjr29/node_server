// import express from 'express';
// import http from 'http';
// import socketIo from 'socket.io';
// const { OpenAIAPI } = require('openai');

// const app = express()
// const server = http.createServer(app);
// const io = socketIo(server)
// const openai = new OpenAIAPI({ key: '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'});

// io.on('connection', (socket) => {
//     console.log('Bir istemci baglandi');
//     socket.on('text', async (text) => {
//         try{
            
//             const response = await openai.complete({
//                 engine: 'gpt-3.5-turbo',
//                 prompt: text,
//                 max_tokens: 50
//             });

//             const answer = response.choices[0].text.trim();
//             io.emit('answer', answer);
//         }
//         catch (error){
//             console.error(error);
//         }
//     });

//     socket.on('disconnect', () => {
//         console.log('A Client disconnected');
//     });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log('Server is running on http://localhost:${PORT}');
// });


const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const fs = require('fs');
const { Server } = require('http');
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //hosts server on localhost:3000

app.use(express.static('public'));
console.log("Server is running");
const io = socket(Server)

io.on('connection', (socket) => {
    console.log("New socket connection" + socket.id);

    socket.on("newMessage", (message) => {
        console.log(message);
    })
})
