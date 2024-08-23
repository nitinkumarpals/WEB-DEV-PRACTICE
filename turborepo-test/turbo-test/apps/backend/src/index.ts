import express from "express";
import { BACKEND_URL } from "@repo/common/config";
const port = 3005;

const app = express();

app.get("/", (req,res) => {
    res.json({
        message: `hello world ${BACKEND_URL}`,
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })