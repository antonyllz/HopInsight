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

    const insertDataSql = `
    INSERT INTO users (username, password, birthdate) VALUES 
        ('antony', '123', '2005-07-25'),
        ('gabriel', '456', '2003-05-15'),
        ('arthur', '789', '2002-10-30');
    `;


    await db.run(hostsSql);
    await db.run(insertDataSql);
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