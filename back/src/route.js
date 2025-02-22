import express from 'express';
import User from './models/Users.js';

class HttpError extends Error {
    constructor(message, code = 400) {
      super(message);
      this.code = code;
    }
  }
   
  const router = express.Router();
   
  router.post('/users', async (req, res) => {
    console.log(req.body);
    const { username, password, birthdate } = req.body;
   
    if (!username || !password || !birthdate) {
      throw new HttpError('Erro ao cadastrar o usuário!');
    }
   
    try {
      const createdUser = await User.create({ username, password, birthdate });
   
      return res.status(201).json(createdUser);
    } catch (error) {
      console.log(error)
      throw new HttpError('Não foi possível criar o usuário!');
    }
  });
   
  router.get('/users', async (req, res) => {
    const { username } = req.query;
   
    try {
      if (username) {
        const filteredUsers = await User.read({ username });
   
        return res.json(filteredUsers);
      }
   
      const users = await User.read();
   
      return res.json(users);
    } catch (error) {
      throw new HttpError('Unable to read users');
    }
  });
   
  router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
   
    try {
      const user = await User.readById(id);
   
      if (user) {
        return res.json(user);
      } else {
        throw new HttpError('User not found');
      }
    } catch (error) {
      throw new HttpError('Unable to read a user');
    }
  });
   
  router.put('/users/:id', async (req, res) => {
    const { username, password } = req.body;
   
    const id = req.params.id;
   
    if (!username || !password) {
      throw new HttpError('Erro ao utilizar o put');
    }
   
    try {
      const updatedUser = await User.update({ id, username, password, birthdate });
   
      return res.json(updatedUser);
    } catch (error) {
      throw new HttpError('Unable to update a user');
    }
  });
   
  router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
   
    try {
      await User.remove(id);
   
      return res.send(204);
    } catch (error) {
      throw new HttpError('Unable to delete a user');
    }
  });
   
  // 404 handler
  router.use((req, res, next) => {
    return res.status(404).json({ message: 'Content not found!' });
  });
   
  // Error handler
  router.use((err, req, res, next) => {
    // console.error(err.message);
    console.error(err.stack);
   
    if (err instanceof HttpError) {
      return res.status(err.code).json({ message: err.message });
    }
   
    // next(err);
    return res.status(500).json({ message: 'Something broke!' });
  });
   
  export default router;  