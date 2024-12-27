import { Router } from "express";
import aiMOdel from "../util/aiModel.js";


const router = Router();


router.post("/generateresult", async (req, res) => {
    try {
        const { input } = req.body

        const result = await aiMOdel.generateContent(input)
        res.status(200).json(result.response.candidates[0].content.parts[0].text)

    } catch (error) {
        console.log(error);

        res.status(404).send("someting went wrong")
    }
})

export default router;