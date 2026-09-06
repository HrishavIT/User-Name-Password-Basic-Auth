import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";

const app = express();
const port = 3000;

const db= new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: process.env.DB_PASSWORD,
  port: 5432,
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email=req.body.username;
  const password=req.body.password;
  try{
      const result=await db.query(`SELECT * FROM USERS WHERE email = $1`,[email])
      if(result.rows.length>0) {
        res.send("Email already exists");
      }
      else
      {
            await db.query(`INSERT INTO USERS (email,password) VALUES ($1,$2)`,[email,password]);
            res.render("secrets.ejs");
      }
  }
 catch(err)
    {
      console.log(err);
    }
});

app.post("/login", async (req, res) => {
  const email=req.body.username;
  const password=req.body.password;
  try{
      const data=await db.query(`SELECT * FROM USERS WHERE email = $1`,[email]);
      if(data.rows.length>0)
      {
        const user=data.rows[0];
        const storedPassword=user.password;
        if(password===storedPassword) res.render("secrets.ejs");
        else res.send("Incorrect Password");
      }
      else res.send("User Not Found");
  }
  catch(err)
  {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
