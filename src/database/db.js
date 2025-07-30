import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

// Expose DB connection test function
export async function testDbConnection() {
  const client = await pool.connect();
  await client.query("SELECT 1"); // Lightweight test
  client.release();
  console.log("Connected to the PostgreSQL database.");
}

// Fetch all users from db
export async function getAllUsers() {
  const result = await pool.query("SELECT * FROM employee");
  return result.rows;
}

// Insert a new user to database
export async function insertUser(name, email) {
  const result = await pool.query(
    "INSERT INTO employee (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
}
