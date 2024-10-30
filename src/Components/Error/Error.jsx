import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const mainError=useRouteError()
    console.log(mainError)
    return (
        <div>
            <h1>OOps!!! Tässä on vike.</h1>
            <p>{mainError.statusText || mainError.message}</p>
            {
                mainError.status===404 && <div>
                    <p>Page not found here</p>
                </div>
            }
        </div>
    );
};

export default ErrorPage;