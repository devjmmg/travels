import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

// DataTypes.STRING      // VARCHAR(255)
// DataTypes.TEXT        // TEXT
// DataTypes.INTEGER     // INT
// DataTypes.FLOAT       // FLOAT
// DataTypes.DECIMAL     // DECIMAL
// DataTypes.BOOLEAN     // BOOLEAN
// DataTypes.DATE        // DATETIME
// DataTypes.DATEONLY    // DATE
// DataTypes.UUID        // UUID

export const Travel = db.define('viajes', {
    'titulo': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'precio': {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    'fecha_ida': {
        type: DataTypes.DATE,
        allowNull: false
    },
    'fecha_vuelta': {
        type: DataTypes.DATE,
        allowNull: false
    },
    'imagen': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'descripcion': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'disponibles': {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    'slug': {
        type: DataTypes.STRING,
        allowNull: false
    },
})