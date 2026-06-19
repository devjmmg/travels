import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";

// Crea una nueva conexión a la base de datos
const db = new Sequelize(
    process.env.DB_NAME, // Nombre de la base de datos
    process.env.DB_USER,    // Usuario de MySQL
    process.env.DB_PASSWORD,    // Contraseña de MySQL
    {
        host: process.env.DB_HOST, // Servidor donde corre MySQL
        port: process.env.DB_PORT,      // Puerto de MySQL (3306 por defecto)

        // Motor de base de datos que utilizará Sequelize
        // Opciones: mysql, postgres, mariadb, sqlite, mssql
        dialect: 'mysql',

        define: {
            // Desactiva createdAt y updatedAt en todos los modelos
            // true  => Sequelize espera y administra esas columnas
            // false => No las utiliza
            timestamps: false
        },

        pool: {
            // Máximo de conexiones simultáneas
            max: 5,

            // Mínimo de conexiones abiertas
            min: 0,

            // Tiempo máximo (ms) para obtener una conexión
            // 3000 = 3 segundos
            acquire: 3000,

            // Tiempo máximo (ms) que una conexión puede estar
            // inactiva antes de cerrarse
            // 10000 = 10 segundos
            idle: 10000
        },

        // Opción obsoleta en versiones modernas de Sequelize
        // Puede eliminarse en proyectos nuevos
        operatorsAliases: false
    }
);

// Exporta la conexión para utilizarla en otros archivos
export default db;