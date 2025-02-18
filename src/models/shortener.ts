import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../databases/database";

class URL extends Model {
    public id!: number;
    public short_url!: string;
    public long_url!: string;
}

URL.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        short_url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        long_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'urls'
    }
)

export default URL;