import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
    const navigation = useNavigation(); // este hook devuelve el estado actual de la app: "idle", "submitting" o "loading"
    
    return (
        <>
            <Navbar />
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Cargando...</div>
                )}
                <Outlet />
            </main>
            <footer className="container text-center">Soy el footer</footer>
        </>
    );
};
export default LayoutPublic;
