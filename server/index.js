
import express from 'express'
import cors from 'cors'
import prompt from './router/prompt.js'
import env from 'dotenv'

const app = express();
app.use(express.json());
env.config();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use("/prompt",prompt)

app.listen(9000, () => {
  console.log("server runing on 9000");

})