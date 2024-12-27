import { GoogleGenerativeAI } from "@google/generative-ai"
import env from 'dotenv'
env.config();

const genAi = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAi.getGenerativeModel({ model: process.env.MODEL_NAME })

export default model