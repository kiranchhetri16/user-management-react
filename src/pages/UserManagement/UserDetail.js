import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () =>{
    const {userId} = useParams();
    const data = [
        {
            id: 1,
            username: 'Ram',
            email: 'rambahadur@gmail.com',
            age: 25,
            city: 'Kathmandu' 
        },
        {
            id: 2,
            username: 'Hari',
            email: 'haribahadur@gmail.com',
            age: 22,
            city: 'Lalitpur'
        }
    ];
    const [user, setUser] = useState({
        username: "",
        email: "",
        age: "",
        city: ""
    });
    useEffect (() => {
        const newUser = data.find((obj) => obj.id.toString() === userId.toString())
    if (newUser){
        setUser(newUser);
    }  
  }, []);
return(
    <div>
        <h2>User Detail</h2>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Age: {user.age}</div>
        <div>City: {user.city}</div>
  </div>
)
}

export default UserDetail;