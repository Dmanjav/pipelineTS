import { Model } from "sequelize";

interface ProductoAttributes {
    id: number;
    nombre: string;
    serNum: string;
    color: string;
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Producto extends Model<ProductoAttributes> implements ProductoAttributes {
        id!: number;
        nombre!: string;
        serNum!: string;
        color!: string;
        static associate(models:any) {
            // define association here
        }
    };

    Producto.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serNum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Producto'
    });
    return Producto;
}