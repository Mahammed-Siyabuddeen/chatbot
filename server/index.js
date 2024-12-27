
import express from 'express'
import cors from 'cors'
import prompt from './router/prompt.js'
import env from 'dotenv'

const app = express();
app.use(express.json());
env.config();
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
const port = process.env.PORT  || 5000

app.use("/prompt", prompt)

app.listen(port, () => {
  console.log("server runing on ", port);

})