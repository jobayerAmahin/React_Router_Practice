import { useLoaderData } from "react-router-dom";
import UserBox from "../UserBox/UserBox";

const Users = () => {
    const user=useLoaderData()
    return (
        <div>
            <h1>{'User: '+user.length}</h1>
            {
                user.map((user)=><UserBox user={user} key={user.id}></UserBox>)
            }
        </div>
    );
};

export default Users;