import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>This is Home Page</h1>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/users'}>Users</Link>
              
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;