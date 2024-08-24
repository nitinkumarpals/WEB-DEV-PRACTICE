import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
    useEffect(() => {
    axios.get('http://localhost:3001/user', {
      withCredentials: true,
    })
      .then(res => {
        setUserData(res.data.userId);
      })
  }, []);

  return (
    <div>
      You're id is {userData}
    <br /><br />
    <Button onClick={() => {
            axios.get(`http://localhost:3001/logout`, {
                withCredentials: true,
            })
            navigate('/signin');

        }}>Logout</Button>
    </div>
  )
}

