import { useRouteError } from "react-router-dom";
import React from "react";

const ErrorPage: React.FC = () => {
    // const error: any = useRouteError();

    return (
        <div id="error-page" className="font-bold flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-4xl mb-4">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <p className="italic">
                <i>{error?.statusText || error?.message}</i>
            </p> */}
        </div>
    );
}

export default ErrorPage;