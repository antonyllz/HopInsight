import Database from '../database/database.js'

async function create({ email, password, birthdate }) {
    const db = await Database.connect();

    const sql = `
        INSERT INTO
            users (email, password, birthdate)
        VALUES
            (?, ?, ?)
        `;
    
    const { lastID } = await db.run(sql, [email, password, birthdate]);

    db.close();

    return await readById(lastID);
}

async function read(where) {
    const db = await Database.connect();
   
    if (where) {
      const field = Object.keys(where)[0];
   
      const value = where[field];
   
      const sql = `
        SELECT
            *
          FROM
            users
          WHERE
            ${field} LIKE CONCAT( '%',?,'%')
        `;
   
      const users = await db.all(sql, [value]);
   
      db.close();
   
      return users;
    }
   
    const sql = `
      SELECT
        *
      FROM
        users
    `;
   
    const users = await db.all(sql);
   
    db.close();
   
    return users;
}
   
async function readById(id) {
    const db = await Database.connect();
   
    const sql = `
        SELECT
            *
          FROM
            users
          WHERE
            id = ?
        `;
   
    const user = await db.get(sql, [id]);
   
    db.close();
   
    return user;
}
   
async function update({ id, email, password, birthdate }) {
    const db = await Database.connect();
   
    const sql = `
        UPDATE
          users
        SET
          email = ?, password = ?, birthdate = ?
        WHERE
          id = ?
      `;
   
    const { changes } = await db.run(sql, [email, password, birthdate, id]);
   
    db.close();
   
    if (changes === 1) {
      return readById(id);
    } else {
      throw new Error('user not found');
    }
}
   
async function remove(id) {
    const db = await Database.connect();
   
    const sql = `
      DELETE FROM
        users
      WHERE
        id = ?
    `;
   
    const { changes } = await db.run(sql, [id]);
   
    db.close();
   
    if (changes === 1) {
      return true;
    } else {
      throw new Error('user not found');
    }
}   
   
export default { create, read, readById, update, remove };  