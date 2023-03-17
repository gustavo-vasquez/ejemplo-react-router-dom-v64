import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>{error.status}</h1>
            {error.data ? <p>{error.data}</p> :
            <p>Página no encontrada</p>
            }
            <p>{error.statusText || error.message}</p>
            <Link to='/'>Volver al principio</Link>
        </div>
    );
};
export default NotFound;
