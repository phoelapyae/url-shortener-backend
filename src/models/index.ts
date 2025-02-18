import sequelize from "../databases/database";
import URL from "./shortener";

const syncDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database was connected.');
        await sequelize.sync({ alter: true });
        console.log('Database aws synchronized.');
    } catch (error) {
        console.log('Connection error ', error);
    }
}

export {
    sequelize, URL, syncDB
}