import dynamodb from "dynamodb";
import { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN } from "../config";

// Configurar aws para acceder al servicio de dynamodb
dynamodb.AWS.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    // Unicamente para cientas temporales (AWS Academy)
    sessionToken: AWS_SESSION_TOKEN
});

export default dynamodb;