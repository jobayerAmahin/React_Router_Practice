import { Link } from 'react-router-dom';
import './userBox.css'

const UserBox = ({user}) => {
    const {id,name,website}=user
    return (
        <div className='mainBox'>
            <h3>{name}</h3>
            <h3>{website}</h3>
            <Link to={`/user/${id}`}><button>Click to See User</button></Link>
        </div>
    );
};

export default UserBox;