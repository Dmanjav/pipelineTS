import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";
import MarcaModel from "../modelsNOSQL/marcaNOSQL";

class ProductoController extends AbstractController {
    //Singleton
    //Atributos de clase
    private static _instance: ProductoController;
    public static get instance(): ProductoController {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new ProductoController("producto");
        return this._instance;
    }

    protected initializeRoutes(): void {
        //CRUD
        this.router.get("/consultar", this.getConsultar.bind(this));
        this.router.post("/crear", this.postCrear.bind(this));
        this.router.get("/consultarMarca", this.getConsultarMarca.bind(this));
        this.router.post("/crearMarca", this.postCrearMarca.bind(this));
    }

    private async getConsultarMarca(req: Request, res: Response){
        try {
            const marcas = await MarcaModel.scan().exec().promise();
            res.status(200).send(marcas[0].Items);
            console.log(marcas)
        } catch (err) { 
            console.log(err);
            res.status(500).send("Error al consultar marcas");
        }
    }

    private async postCrearMarca(req: Request,res: Response){
        try{
            console.log(req.body);
            await MarcaModel.create(req.body);
            console.log("Marca creado");
            res.status(200).send("<h1>Marca creada</h1>");
        }catch(err){
            console.log(err);
            res.status(500).send('Internal server error' + err);
        }
    }

    private async getConsultar(req: Request, res: Response) {
        try {
            const productos = await db.Producto.findAll();
            res.status(200).send(productos);
        } catch (err) {
            console.error(err);
            res.status(500).send("Error al consultar agentes");
        }
    }

    private async postCrear(req: Request, res: Response) {
        try {
            console.log(req.body);
            await db.Producto.create(req.body);
            console.log("Producto creado")
            res.status(200).send("Producto creado");
        } catch (err) {
            console.error(err);
            res.status(500).send("Error al crear producto");
        }
    }
}

export default ProductoController;