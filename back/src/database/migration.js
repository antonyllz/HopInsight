import Database from "./database.js";

async function up() {
    const db = await Database.connect();

    const hostsSql = `
        CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            birthdate DATE NOT NULL
        )
    `;

    await db.run(hostsSql);
    db.close();
}

async function down() {
    const db = await Database.connect();

    const hostsSql = `
        DROP TABLE users
    `;

    await db.run(hostsSql);
    db.close();
}

export default { up, down };