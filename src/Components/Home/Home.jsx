import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>This is Home Page</h1>
            <nav>
                <Link style={{margin:'10px'}} to={'/'}>Home</Link>
                <Link style={{margin:'10px'}} to={'/about'}>About</Link>
                <Link style={{margin:'10px'}} to={'/axiosPhone'}>Axios Phone</Link>
                <Link style={{margin:'10px'}} to={'/contact'}>Contact</Link>
                <Link style={{margin:'10px'}} to={'/users'}>Users</Link>
              
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;