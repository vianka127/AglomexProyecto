import express from "express";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import materialesRoutes from "./routes/materiales.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import produccionRoutes from "./routes/produccion.routes.js";
import pedidosRoutes from "./routes/pedidos.routes.js";
import ventasRoutes from "./routes/ventas.routes.js";
import comprasRoutes from "./routes/compras.routes.js";
import objetos3dRoutes from "./routes/objetos3d.routes.js";

const app = express()
app.listen(4000)
console.log('server on port', 4000)

// Rutas API
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/materiales", materialesRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/produccion", produccionRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/compras", comprasRoutes);
app.use("/api/objetos3d", objetos3dRoutes);