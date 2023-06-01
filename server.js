const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',
]

const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
});

// Make the connection
io.on('connection', (socket) => {
  console.log(`A new user has entered the chat.`);

  // Respond to messages
  socket.on('message', (data) => {
    // Reply with encrypted message.
    socket.emit('message', {
      username: 'Server',
      body: `${encryptUserMessage(data.body)}`
    });
  });
});

/**
 * Encrypts a user's message using Caesar Cipher 
 */
function encryptUserMessage(messageText) {
  if (typeof (messageText) !== "string") {
    throw new Error('Must be a String')
  }

  messageText = messageText.toUpperCase();
  messageText = messageText.split('') 

  for (let i = 0; i < messageText.length; i++) {
    const index = alphabet.findIndex((item) => item === messageText[i])
    if (index === -1) continue;
    if (index >= 13) messageText[i] = alphabet[index - 13];
    else if (index < 13) messageText[i] = alphabet[index + 13];
  }
  return messageText.join('').toLowerCase()
}