import React from "react";
import ReactDOM from "react-dom/client";

import { router } from "./router"; // mi componente donde se almacenan las rutas
import { RouterProvider } from "react-router-dom"; // el proveedor de rutas al que le paso como prop el 'router' para conectar mi aplicación

// El 'RouterProvider' reemplazaria al típico componente <App /> que tenía todas mis rutas, ahora está en otra carpeta separado
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
