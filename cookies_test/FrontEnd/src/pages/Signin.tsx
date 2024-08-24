import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from 'react-router-dom';

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <div className="text-4xl font-extrabold mb-6">Create an account</div>
            
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Label className="text-sm font-semibold text-black w-24 text-left">Email</Label>
                    <Input
                        className="max-w-md"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="email"
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <Label className="text-sm font-semibold text-black w-24 text-left">Password</Label>
                    <Input
                        className="max-w-md"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                    />
                </div>

                <Button
                    className="mt-5"
                    onClick={async () => {
                        await axios.post("http://localhost:3001/login", {
                            email,
                            password
                        }, {
                            withCredentials: true
                        });
                        alert("logged in");
                        navigate('/user');
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};
