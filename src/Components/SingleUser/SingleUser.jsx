import { useLoaderData } from "react-router-dom";

const SingleUser = () => {
    const singleUser=useLoaderData();

    return (
        <div>
            <h1>{singleUser.name}</h1>
        </div>
    );
};

export default SingleUser;