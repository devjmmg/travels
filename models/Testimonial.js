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

export const Testimonial = db.define('testimoniales', {
    'name': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'email': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'message': {
        type: DataTypes.STRING,
        allowNull: false
    }
})