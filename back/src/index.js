import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './route.js';


const server = express();

server.use(express.json());

server.use(morgan('tiny'));

server.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
  })
);


// server.use(express.static('public'));

server.use(router);

server.listen(3300, () => {
  console.log('Server is running on port 3300');
});

export default server;