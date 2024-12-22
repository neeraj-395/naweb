import Database from "better-sqlite3";

const db = new Database('naweb.db');

db.pragma('journal_mode = WAL');
db.pragma('foreign_key = ON');

db.exec(`CREATE TABLE IF NOT EXISTS user (
         id INTEGER PRIMARY KEY,
         name TEXT NOT NULL,
         username TEXT UNIQUE NOT NULL,
         password TEXT NOT NULL,
         email TEXT UNIQUE NOT NULL,
         contact TEXT,
         profession TEXT,
         reg_date DATE DEFAULT (DATETIME('now')) NOT NULL);`);

db.exec(`CREATE TABLE IF NOT EXISTS note (
         id INTEGER PRIMARY KEY,
         owner_id INTEGER NOT NULL,
         title TEXT NOT NULL,
         description TEXT,
         cover_image TEXT,
         file_path TEXT,
         uploaded_at TEXT DEFAULT (DATETIME('now')) NOT NULL,
         FOREIGN KEY (owner_id) REFERENCES user(id) ON DELETE CASCADE);`);

db.exec('CREATE INDEX IF NOT EXISTS idx_username ON user (username);');
db.exec('CREATE INDEX IF NOT EXISTS idx_email ON user (email);');
db.exec('CREATE INDEX IF NOT EXISTS idx_owner_id ON note (owner_id);');

export default db;