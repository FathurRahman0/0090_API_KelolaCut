
import dotenv from "dotenv";
import app from "./app.js";
import sequelize from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log("Database connected successfully!");

        app.listen(PORT, () => {
            console.log(`KelolaCut API running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to database:", error.message);
    }
};

startServer();
