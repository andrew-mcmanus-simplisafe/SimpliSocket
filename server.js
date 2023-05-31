
const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log(`A new user has entered the chat.`);
  socket.on('message', (data) => {
    console.log(`${data.username} : ${data.input}`);
  });
});
