import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { users } from './data/users.js';
 
class HttpError extends Error {
  constructor(message, code = 400) {
    super(message);
    this.code = code;
  }
}

const router = express.Router();
 
router.post('/users', (req, res) => {
  const { username, password } = req.body;
 
  if (!username || !password) {
    throw new HttpError('Error when passing parameters');
  }
 
  const id = uuidv4();
 
  const newHost = { id, username, password };
 
  users.push(newHost);
 
  res.status(201).json(newHost);
});
 
router.get('/users', (req, res) => {
  const where = req.query;
 
  if (where) {
    const field = Object.keys(where)[0];
 
    const value = where[field];
 
    const filteredUsers = users.filter((host) =>
      host[field] instanceof String
        ? host[field].toLowerCase().includes(value.toLowerCase())
        : host[field] === value
    );
 
    return res.json(filteredUsers);
  }
 
  return res.json(users);
});
 
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
 
  const index = users.findIndex((host) => users.id === id);
 
  if (!users[index]) {
    throw new HttpError('Unable to read a user');
  }
 
  return res.json(users[index]);
});
 
router.put('/users/:id', (req, res) => {
  const { username, password } = req.body;
 
  const { id } = req.params;
 
  if (!username || !password) {
    throw new HttpError('Error when passing parameters');
  }
 
  const newHost = { id, username, password };
 
  const index = hosts.findIndex((host) => host.id === id);
 
  if (!hosts[index]) {
    throw new HttpError('Unable to update a host');
  }
 
  hosts[index] = newHost;
 
  return res.json(newHost);
});
 
router.delete('/hosts/:id', (req, res) => {
  const { id } = req.params;
 
  const index = hosts.findIndex((host) => host.id === id);
 
  if (!hosts[index]) {
    throw new HttpError('Unable to delete a host');
  }
 
  hosts.splice(index, 1);
 
  return res.send(204);
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