import Database from "./database.js";

async function up() {
    const db = await Database.connect();

    const usersSql = `
        CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            birthdate DATE NOT NULL
        );
    `;

    const hostsSql = `
        CREATE TABLE hosts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            destiny VARCHAR(255) NOT NULL,
            time TIMESTAMP NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `;

    const insertUsersSql = `
    INSERT INTO users (email, password, birthdate) VALUES 
        ('antony@hop.com', '123', '2005-07-25'),
        ('gabriel@hop.com', '456', '2003-05-15'),
        ('arthur@hop.com', '789', '2002-10-30');
    `;

    const insertHostsSql = `
    INSERT INTO hosts (user_id, destiny, time) VALUES 
        (1, '8.8.8.8', '2025-04-01 10:00:00'),
        (2, '200.129.77.237', '2025-05-10 12:00:00'),
        (3, '128.116.102.4', '2025-06-15 15:00:00');
    `;

    await db.run(usersSql);
    await db.run(hostsSql);
    await db.run(insertUsersSql);
    await db.run(insertHostsSql);
    db.close();
}


export default { up };