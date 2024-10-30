import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const SingleUser = () => {
    const singleUser=useLoaderData();
    const goBack=useNavigate();
    const handleBack=()=>{
        goBack(-1);
    }

    const {userId}=useParams();
    console.log(userId)
    return (
        <div>
            <h1>{singleUser.name}</h1>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default SingleUser;