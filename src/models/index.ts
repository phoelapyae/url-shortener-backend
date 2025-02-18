import sequelize from "../databases/database";
import URL from "./shortener";

const syncDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');
        await sequelize.sync({ alter: true });
        console.log('Database synchronized.');
    } catch (error) {
        console.log('Database connection error ', error);
    }
}

export {
    sequelize, URL, syncDB
}