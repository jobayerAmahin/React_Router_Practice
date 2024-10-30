import { useNavigate } from 'react-router-dom';
import './userBox.css'

const UserBox = ({user}) => {
    const {id,name,website}=user
    const mainNavigate=useNavigate()

    const handleUserBtn=()=>{
        mainNavigate(`/user/${id}`)
    }


    return (
        <div className='mainBox'>
            <h3>{name}</h3>
            <h3>{website}</h3>
            <button onClick={handleUserBtn}>Click to See User</button>
        </div>
    );
};

export default UserBox;