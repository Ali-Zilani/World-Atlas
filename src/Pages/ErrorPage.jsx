import { useRouteError, NavLink } from "react-router-dom";

export const ErrorPage = () => {
    //error is a object with propery (data,error,status,statusText,etc)
    const error = useRouteError();
    return (
        <div>
            <h1>OOPs! An error occured.</h1>
            <br/>
            <h2>{error.status} : {error.statusText}</h2>
            <br/>
            <NavLink to ='/'><button>Go Home</button> </NavLink>
        </div>
    )
}