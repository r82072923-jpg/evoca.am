import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: { origin: "*" }
});

const connectedUsers = {}; 

const broadcastActiveUsers = () => {
    const names = Object.values(connectedUsers);
    const uniqueNames = [...new Set(names)];
    console.log("📢 Ուղարկվում է ակտիվ օգտատերերի ցանկը բոլորին:", uniqueNames);
    io.emit("users-list-updated", uniqueNames);
};

io.on('connection', (socket) => {
    console.log('Նոր կապ:', socket.id);

    socket.on("register", (userName) => {
        if (userName) {
            connectedUsers[socket.id] = userName
            console.log(`Գրանցվեց՝ ${userName} (${socket.id})`)
        
            
            broadcastActiveUsers(); 
        }
    });

    socket.on('call-user', (data) => {
        const targetSocketId = Object.keys(connectedUsers).find(
            key=>connectedUsers[key]===data.targetUser  
        )
        if (targetSocketId) {
            io.to(targetSocketId).emit("incoming-call", {
                sender: data.sender,
                type: data.type,
                senderPeerId: data.senderPeerId
            });
        } else {
            console.log(`Զանգը ձախողվեց: ${data.targetUser}-ը օֆլայն է:`);
        }
    });

    socket.on('disconnect', () => {
        if (connectedUsers[socket.id]) {
            const userName=connectedUsers[socket.id]
            delete connectedUsers[socket.id]
            console.log(`${userName} (${socket.id}) անջատվեց`);
            broadcastActiveUsers();
        }
    });
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

let allMessages = []; 

app.post('/messages', (req, res) => {
    const newMessage = req.body;
    
    newMessage.id = Date.now().toString(); 
    allMessages.push(newMessage); 

    io.emit('receive-message', newMessage);
    
    res.status(201).json(newMessage);
});

app.get('/messages', (req, res) => {
    res.json(allMessages);
});

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: "Արամ" }, { id: 2, name: "Աննա" }]);
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(message);
        const response = await result.response;
        res.json({ reply: response.text() });
    } catch (error) {
        res.status(500).json({ error: "Սերվերի հետ կապի սխալ" });
    }
});

const PORT = 3001;
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`Սերվերը աշխատում է պորտ ${PORT}-ով`);
});