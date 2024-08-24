import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.get('/', (req, res) => {
    res.json({
        message: "Hello from server"
    })
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign(
        {
            id: 1,
        },
        JWT_SECRET
    );
    res.cookie("token", token);
    res.json({
        success: true,
        message: "User logged in successfully",
        token,
    });
});

app.get("/user",(req,res)=>{
    const token = req.cookies.token;
    const decode = jwt.verify(token,JWT_SECRET) as JwtPayload;
    res.json({
        userId : decode.id
    })
});

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({
        success: true,
        message: "User logged out successfully",
    });
})

app.listen(3001, () => {
    console.log("Server started on port 3001");
});
