import dynamodb from "../services/dybamodbService";
import joi from "joi";
import { PREFIX_NAME } from "../config";

const MarcaModel = dynamodb.define("marca", {
    hashKey: "MarcaId",
    timestamps: false,
    schema: {
        MarcaId: dynamodb.types.uuid(),
        Nombre: joi.string(),
        Mercado: joi.string(),
        ValorMarca: joi.number(),
    },
    tableName: `Marca${PREFIX_NAME}`,
})

dynamodb.createTables((err) => {
    if (err) {
        console.log("Error creando tablas");
        console.log(err);
    } else {
        console.log("Tablas creadas");
    }
});

export default MarcaModel;